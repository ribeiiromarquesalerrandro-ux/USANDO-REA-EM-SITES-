# Plano: FASE 2 do site "Vértice" (Supabase, login, favoritos, envios, admin)

STATUS: PENDENTE (2026-10-19) — aguarda passo 1 (pendências do CASO 003) e passo 15 (backup) antes do go-live

Pedido: fase 2 do Vértice. Site continua estático (output 'export', sem API routes nem server actions) na Vercel (https://vertice-ebon.vercel.app). Dados vão pelo cliente com @supabase/supabase-js (versão exata, sem ^ ou ~). Aprovado com condições no CASO 003 (docs/TRIBUNAL.md). Região do projeto Supabase: us-east-1 (docs/DECISOES.md, 2026-10-19), e não sa-east-1 como citado no CASO 003.

Diretório do projeto: /home/user/USANDO-REA-EM-SITES-
Projeto do código: /home/user/USANDO-REA-EM-SITES-/real-corp/vertice/
Supabase: projeto "vertice", ref zfvzyzwaafjmtjssrsqu, us-east-1, vazio.
Estado atual do package.json: next 16.3.8, react 19.3.0, react-dom 19.3.0, three 0.186.1 (todas exatas). Build: `next build --webpack`.

## Passos

1. Fechar pendências do CASO 003: DONO lista por escrito os sites que dependem do jarvis-stark (checar com `grep -r "jarvis-stark"` e prj_8G7fvSR1VrgILyv8dXuvsTfap4q3). CEO registra a resposta, a nota da região us-east-1 e decide se a mudança de região exige tribunal curto | DONO + CEO | Dado docs/TRIBUNAL.md, quando lido, então tem: lista de dependentes (ou "nenhum"), data do registro, e decisão do CEO sobre tribunal da região. Se houver dependente, o banco jarvis-stark não é pausado
2. Criar migrations SQL em real-corp/vertice/supabase/migrations/: tabelas favoritos, newsletter, envios, admins; RLS habilitada e policies de insert/update com WITH CHECK; REVOKE UPDATE em envios para authenticated e GRANT só nas colunas editáveis pelo dono do envio; trigger que grava aprovado_por = auth.uid() e aprovado_em = now() na troca de status; CHECK em envios.link para `^https://`; função excluir_minha_conta() SECURITY DEFINER com `set search_path = ''`, que apaga as linhas do auth.uid() e o auth.users dele, com EXECUTE revogado de public e concedido a authenticated; admins sem policy de insert/update para usuário comum | construtor | Dado os arquivos SQL, quando lidos, então: as 4 tabelas têm `enable row level security`; toda policy de insert/update tem `with check`; a função tem `search_path = ''`; não há a string service_role
3. Aplicar as migrations no projeto zfvzyzwaafjmtjssrsqu com apply_migration; criar 2 usuários de teste (e-mails example.com marcados como teste) por SQL no Supabase MCP, sem gravar senha no repositório | CEO | list_tables mostra as 4 tabelas com RLS ativa; o SQL aplicado é igual aos arquivos do git (sem diferença); IDs dos 2 usuários de teste anotados fora do git
4. Configurar o painel Auth do Supabase (ver "Bloqueios do dono", item 2): Site URL, allowlist de URLs de retorno exata (sem curinga) e confirmação de e-mail ligada | DONO | DONO confirma por escrito os valores salvos; passo 14 prova que redirect fora da lista é recusado
5. Adicionar @supabase/supabase-js na versão estável atual, fixada no package.json sem ^ ou ~ (versão registrada no relatório); criar lib/supabase.ts que lê só NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY | construtor | Dado package.json, quando lido, então a dep aparece com versão exata; `grep -rn "service_role" real-corp/vertice/app real-corp/vertice/lib real-corp/vertice/components` vazio
6. Rodar npm install e npm audit para atualizar package-lock.json | executor | package-lock.json atualizado e commitado; npm audit sem vulnerabilidade alta ou crítica (saída anexada ao relatório)
7. Criar login: /entrar (campo e-mail, signInWithOtp com emailRedirectTo fixo em `https://vertice-ebon.vercel.app/entrar/callback/`, e `http://localhost:3000/entrar/callback/` só em dev), /entrar/enviado, /entrar/callback (troca a sessão), botão entrar/sair no cabeçalho e guarda de rota para /perfil, /enviar e /admin (redireciona para /entrar) | construtor | Dado um e-mail válido, quando enviado em /entrar, então chama signInWithOtp com o redirect da allowlist e mostra /entrar/enviado; sem sessão, /perfil vai para /entrar
8. Criar /enviar (nome, link só https, categoria, tecnologias, descrição até 280 caracteres, validação no cliente e erro claro do banco) e o botão de favoritar nos cartões de projeto (insert/delete em favoritos); links de envio exibidos como âncora com rel="noopener noreferrer", nunca em iframe | construtor | Dado link `javascript:alert(1)` ou `http://`, quando enviado, então é recusado; descrição de 281 caracteres é recusada; favoritar um cartão cria 1 linha em favoritos
9. Criar /perfil: lista de favoritos com remover; interruptor de newsletter (liga/desliga; só grava se o e-mail estiver confirmado); lista dos meus envios com status; botão excluir conta com confirmação digitada e chamada da função excluir_minha_conta | construtor | Dado usuário logado, quando remove um favorito, então some da lista e do banco; quando liga a newsletter sem e-mail confirmado, então a gravação é recusada e o aviso aparece
10. Criar /admin simples: lista de envios pendentes com aprovar e recusar; página só mostra dados se o banco liberar (RLS com admins); sem lógica de permissão só no front | construtor | Dado usuário fora de admins, quando abre /admin, então não vê envios; dado admin, quando aprova, então status muda e aprovado_por e aprovado_em são preenchidos
11. Criar /termos e /privacidade atualizadas: dados coletados (e-mail, favoritos, envios, newsletter), Supabase como operador nos Estados Unidos (região us-east-1), transferência internacional (LGPD art. 33), direito de excluir a conta, contato | construtor | Dado o build, quando o HTML de /privacidade é lido, então contém "Supabase", "Estados Unidos", "art. 33" e "excluir"; DONO aprova o texto (ver bloqueios)
12. Criar real-corp/vertice/.env.local só na máquina local com as duas variáveis NEXT_PUBLIC (valores nunca no git) e rodar npm run build; depois grep de service_role em out/ e .next/static, grep de cdn/googleapis/iframe e git ls-files | grep -i env | executor | `npm run build` código 0; `grep -r "service_role" out .next/static` vazio; `git ls-files | grep -i env` vazio; out/ tem entrar, enviar, perfil, admin, privacidade, termos
13. Criar deploy de preview na Vercel com as variáveis NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY no ambiente de preview (CEO lê os valores com Supabase MCP e grava só na Vercel, sem imprimir) e anotar ID e URL do preview | executor | URL do preview responde 200; ID e URL anotados no relatório; variáveis presentes no projeto Vercel (valores não impressos)
14. Testar com a chave anon e os 2 usuários de teste: (a) A não lê nem altera favoritos, newsletter e envios de B; (b) A não insere com user_id de B; (c) A não escreve em admins e não vira admin; (d) A não altera status, aprovado_por ou aprovado_em; (e) admin aprova e o registro sai com quem e quando; (f) newsletter recusada sem e-mail confirmado; (g) excluir_minha_conta apaga as linhas de A e o auth.users de A, e não toca em B; (h) link http e javascript: recusados; (i) redirect fora da allowlist não é aceito; (j) no preview, rotas /, /entrar, /enviar, /perfil, /admin, /privacidade, /termos respondem 200 | tester | Saída "PASSOU" com os 10 casos listados e resultado de cada um; qualquer "FALHOU" volta ao passo 2, 5 ou 7 (máximo 3 voltas)
15. Backup e restauração antes do 1º e-mail real (condição 2): DONO roda pg_dump do vertice com a senha que só ele digita, restaura num Postgres local e conta as linhas das 4 tabelas; CEO conta as mesmas tabelas no remoto com SQL; só os números são passados | DONO (CEO confere) | 4 contagens locais iguais às 4 contagens remotas, registradas em docs/TRIBUNAL.md; dump fica fora do git
16. Teste de rollback e go-live: com OK explícito do DONO, promover o preview a produção, checar https://vertice-ebon.vercel.app com 200, promover o deploy da fase 1 e checar 200, promover de volta o deploy da fase 2 e checar 200 (cond. 6) | executor (com OK do DONO) | URL de produção responde 200 em cada promoção; ID final igual ao do passo 13; resultado enviado ao tester com PASSOU e ao CEO para registro em docs/TRIBUNAL.md

## Suposições

- Callback de login é /entrar/callback/ (trailingSlash true). Se mudar, a allowlist do passo 4 muda junto.
- "Link só https" (passo 8) é mais restrito que "http(s)" da condição 4; escolhido por segurança. O CHECK do banco reforça.
- A versão do @supabase/supabase-js é a estável atual, escolhida pelo construtor no passo 5 e registrada; não é fixada aqui.
- A RLS não restringe colunas sozinha: a proteção de status/aprovado_* usa REVOKE/GRANT por coluna mais trigger (passo 2).
- Newsletter: "e-mail confirmado" é checado pela RLS. Se o claim do JWT não servir, o construtor usa função SECURITY DEFINER com search_path fixo que lê auth.users.email_confirmed_at, e o tester confirma.
- E-mail de login usa o SMTP padrão do Supabase (limite baixo de envios). SMTP próprio é dependência nova e exige novo tribunal; não entra nesta fase.
- Usuários de teste são criados por SQL pelo CEO (passo 3). Remoção deles só com OK do DONO.
- Construtor trabalha em um passo por vez nos mesmos arquivos; nenhum passo roda em paralelo com outro que escreve os mesmos arquivos.
- Preview da Vercel não está na allowlist do Supabase, então login real só funciona em produção ou localhost; o teste de login no preview usa os usuários SQL, não e-mail real.

## Riscos

- Prob. alta, impacto alto, passos 1 e 15: região us-east-1 foi decidida em 2026-10-19, mas o CASO 003 avaliou sa-east-1. Dados pessoais saem do Brasil. Mitigação: passo 1 registra a decisão e o CEO decide sobre tribunal curto antes de qualquer dado real; termos (passo 11) citam transferência internacional.
- Prob. média, impacto alto, passo 1: o OK do DONO ("pode pausar mesmo assim") vai contra a condição 1 literal ("se algum site depender, não pausar"). Mitigação: banco jarvis-stark (tmyrickggvyapdawkuub) não é pausado sem lista escrita de dependentes.
- Prob. alta, impacto alto, passos 2 e 14: usuário comum altera status ou aprovado_* por falha de grant. Mitigação: REVOKE/GRANT por coluna e teste (d) do passo 14.
- Prob. média, impacto alto, passo 13: NEXT_PUBLIC ausente no build (chave vazia) ou service_role parar no bundle. Mitigação: passo 12 grep e passo 13 checa variáveis; nunca usar service_role.
- Prob. alta, impacto baixo, passo 15: banco vazio torna o restore trivial (0 = 0). Mitigação: o teste prova o pipeline; se houver dados antes de novo envio em massa, repetir o backup (decisão do CEO).
- Prob. média, impacto médio, passo 4 e 16: e-mail padrão do Supabase com limite baixo de envios; sem SMTP próprio o login pode travar em uso real. Mitigação: anotado; SMTP próprio exige novo tribunal.
- Prob. média, impacto baixo, passo 3: migration aplicada no remoto diverge do git. Mitigação: CEO compara o SQL aplicado com os arquivos.
- Prob. baixa, impacto alto, passo 15: senha do banco exposta. Mitigação: só o DONO digita a senha; CEO recebe os números.
- Prob. baixa, impacto médio, passo 16: rollback sem deploy anterior útil. Mitigação: alvo é o deploy da fase 1 (ID anotado antes da promoção).
- Irreversível: aplicar migrations (passo 3 com dados vazios, corrigível por nova migration), coleta de e-mails e go-live (passo 16). Backup antes do go-live: passo 15. Rollback de código: passo 16.

## Decisão

Mudança de região (us-east-1) não foi avaliada pelo tribunal: decisão de dono + CEO em 2026-10-19 (docs/DECISOES.md). Tribunal: sim, recomendado só para a região, decisão do CEO no passo 1. As 6 condições do CASO 003 estão nos passos: cond. 1 no passo 1; cond. 2 no passo 15; cond. 3 nos passos 2 e 14; cond. 4 nos passos 8, 12 e 14; cond. 5 nos passos 7, 9 e 14; cond. 6 nos passos 11 e 16. Qualquer dependência nova além de @supabase/supabase-js, SMTP próprio, Analytics ou plano pago exige novo tribunal.

## Bloqueios do dono

1. Passo 1: responder por escrito quais sites dependem do jarvis-stark (Vercel prj_8G7fvSR1VrgILyv8dXuvsTfap4q3 e o repositório). Se algum depender, não pausar o banco tmyrickggvyapdawkuub. Decidir se a região us-east-1 segue sem tribunal.
2. Passo 4, painel Supabase do projeto "vertice": (a) Authentication > URL Configuration: Site URL `https://vertice-ebon.vercel.app`; em Redirect URLs, adicionar exatamente `https://vertice-ebon.vercel.app/entrar/callback/` e `http://localhost:3000/entrar/callback/`; sem curinga; Save. (b) Authentication > Sign In / Providers > Email: deixar "Confirm email" ligado; Save. Depois avisar o CEO.
3. Passo 11: aprovar o texto de /termos e /privacidade (revisão do dono, não é parecer jurídico).
4. Passo 15: rodar o backup e a restauração local (pg_dump com a senha digitada por você; ou exportar CSV das 4 tabelas pelo painel e restaurar com \copy). Mandar ao CEO só as 4 contagens. O arquivo de dump não entra no git.
5. Passo 16: dar o OK explícito para promover o preview a produção e para os dois promotes do teste de rollback.
6. Qualquer remoção de usuários de teste ou de dados de teste (passo 3 ou 14): só com OK seu.
