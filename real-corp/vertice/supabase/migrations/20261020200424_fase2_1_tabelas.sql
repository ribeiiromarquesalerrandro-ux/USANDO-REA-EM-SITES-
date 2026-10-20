-- Vértice fase 2 (Postgres 17, Supabase). Aplicada em partes pelo apply_migration.

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

-- RLS

alter table public.favoritos enable row level security;
alter table public.newsletter enable row level security;
alter table public.envios enable row level security;
alter table public.admins enable row level security;

-- Privilégios (RLS não restringe colunas; por isso o GRANT por coluna)
revoke all on public.favoritos, public.newsletter, public.envios, public.admins from anon;
revoke all on public.favoritos, public.newsletter, public.envios, public.admins from authenticated;
