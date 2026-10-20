-- Vértice fase 2 (Postgres 17, Supabase). Aplicada em partes pelo apply_migration.

-- PENDENTE: o apply_migration dá timeout (pede confirmação por ter DELETE). Rodar no SQL Editor.
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
