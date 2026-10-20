-- Vértice fase 2 (Postgres 17, Supabase). Aplicada em partes pelo apply_migration.

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

grant select, insert, delete on public.favoritos to authenticated;
grant select, insert, update on public.newsletter to authenticated;
grant select, insert, delete on public.envios to authenticated;
grant update (status) on public.envios to authenticated;
grant select on public.admins to authenticated;
