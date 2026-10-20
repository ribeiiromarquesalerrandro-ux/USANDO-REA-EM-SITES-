-- Vértice fase 2 (Postgres 17, Supabase). Aplicada em partes pelo apply_migration.

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

