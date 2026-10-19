-- Vértice fase 2: favoritos, newsletter, envios, admins (Postgres 17, Supabase).
-- Aplicar com apply_migration; não inclui dados nem segredos.

-- Tabelas

create table public.favoritos (
  user_id uuid not null references auth.users (id) on delete cascade,
  projeto_slug text not null check (projeto_slug ~ '^[a-z0-9-]{1,80}$'),
  criado_em timestamptz not null default now(),
  primary key (user_id, projeto_slug)
);

create table public.newsletter (
  user_id uuid primary key references auth.users (id) on delete cascade,
  ativo boolean not null default false,
  atualizado_em timestamptz not null default now()
);

create table public.envios (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  nome text not null check (char_length(nome) between 1 and 80),
  -- só https, sem espaço, < > ou aspas (evita javascript: e http:)
  link text not null check (char_length(link) <= 300 and link ~ '^https://[^\s<>"]+$'),
  categoria text not null check (categoria in ('Portfólio','Produto','Arte','Jogo','Arquitetura','Ferramenta')),
  tecnologias text[] not null default '{}' check (cardinality(tecnologias) <= 6),
  descricao text not null default '' check (char_length(descricao) <= 280),
  status text not null default 'em_revisao' check (status in ('em_revisao','aprovado','recusado')),
  aprovado_por uuid,
  aprovado_em timestamptz,
  criado_em timestamptz not null default now()
);

create table public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade
);

-- Funções auxiliares

-- Admin = linha em public.admins; DEFINER para ler a tabela sem expor ela
create function public.eh_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.admins a where a.user_id = (select auth.uid()));
$$;

-- E-mail confirmado do usuário logado (lê auth.users, que o cliente não acessa)
create function public.email_confirmado()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from auth.users u
    where u.id = (select auth.uid()) and u.email_confirmed_at is not null
  );
$$;

revoke execute on function public.eh_admin() from public, anon;
revoke execute on function public.email_confirmado() from public, anon;
grant execute on function public.eh_admin() to authenticated;
grant execute on function public.email_confirmado() to authenticated;

-- RLS

alter table public.favoritos enable row level security;
alter table public.newsletter enable row level security;
alter table public.envios enable row level security;
alter table public.admins enable row level security;

-- favoritos: só o dono
create policy favoritos_select on public.favoritos
  for select to authenticated using (user_id = (select auth.uid()));
create policy favoritos_insert on public.favoritos
  for insert to authenticated with check (user_id = (select auth.uid()));
create policy favoritos_delete on public.favoritos
  for delete to authenticated using (user_id = (select auth.uid()));

-- newsletter: só o dono; gravar exige e-mail confirmado
create policy newsletter_select on public.newsletter
  for select to authenticated using (user_id = (select auth.uid()));
create policy newsletter_insert on public.newsletter
  for insert to authenticated
  with check (user_id = (select auth.uid()) and (select public.email_confirmado()));
create policy newsletter_update on public.newsletter
  for update to authenticated
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()) and (select public.email_confirmado()));

-- envios: dono ou admin lê; dono cria em revisão; só admin atualiza; dono apaga se em revisão
create policy envios_select on public.envios
  for select to authenticated
  using (user_id = (select auth.uid()) or (select public.eh_admin()));
create policy envios_insert on public.envios
  for insert to authenticated
  with check (
    user_id = (select auth.uid())
    and status = 'em_revisao'
    and aprovado_por is null
    and aprovado_em is null
  );
create policy envios_update on public.envios
  for update to authenticated
  using ((select public.eh_admin()))
  with check ((select public.eh_admin()));
create policy envios_delete on public.envios
  for delete to authenticated
  using (user_id = (select auth.uid()) and status = 'em_revisao');

-- admins: só lê a própria linha; sem policy de insert/update/delete
-- (admin novo entra só por SQL do dono/CEO)
create policy admins_select on public.admins
  for select to authenticated using (user_id = (select auth.uid()));

-- Privilégios (RLS não restringe colunas; por isso o GRANT por coluna)

revoke all on public.favoritos, public.newsletter, public.envios, public.admins from anon;
revoke all on public.favoritos, public.newsletter, public.envios, public.admins from authenticated;

grant select, insert, delete on public.favoritos to authenticated;
grant select, insert, update on public.newsletter to authenticated;
grant select, insert, delete on public.envios to authenticated;
grant update (status) on public.envios to authenticated;
grant select on public.admins to authenticated;

-- Trigger: registra quem aprovou e quando; trava as outras colunas

create function public.envios_antes_update()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.status is distinct from old.status then
    new.aprovado_por := auth.uid();
    new.aprovado_em := now();
  else
    new.aprovado_por := old.aprovado_por;
    new.aprovado_em := old.aprovado_em;
  end if;
  new.id := old.id;
  new.user_id := old.user_id;
  new.nome := old.nome;
  new.link := old.link;
  new.categoria := old.categoria;
  new.tecnologias := old.tecnologias;
  new.descricao := old.descricao;
  new.criado_em := old.criado_em;
  return new;
end;
$$;

revoke execute on function public.envios_antes_update() from public, anon, authenticated;

create trigger envios_antes_update
  before update on public.envios
  for each row execute function public.envios_antes_update();

-- Excluir minha conta e dados (LGPD)

create function public.excluir_minha_conta()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'não autenticado';
  end if;
  delete from public.favoritos where user_id = uid;
  delete from public.newsletter where user_id = uid;
  delete from public.envios where user_id = uid;
  delete from public.admins where user_id = uid;
  delete from auth.users where id = uid;
end;
$$;

revoke execute on function public.excluir_minha_conta() from public, anon;
grant execute on function public.excluir_minha_conta() to authenticated;
