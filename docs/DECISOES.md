# Decisões — Real Corp

## Catálogo de especialistas (2026-10-15)

Regra usada quando algo foi ambíguo: opção mais segura e mais barata.

**Triagem.** Os agentes foram lidos só como texto, por um script nosso. Nenhum script, instalador,
hook ou `npx` das fontes foi executado.

| Fonte | Agentes | Aprovados | Rejeitados |
|---|---|---|---|
| voltagent | 163 | 158 | 5 |
| wshobson | 202 | 13 | 189 |

Motivos (um agente pode ter mais de um):
- voltagent: download e execução de código (4: instalam pacote ou agente de terceiros); curl com pipe para shell (1); envio de dados para fora (1: servidor MCP externo).
- wshobson: ferramentas amplas (188: sem lista `tools`, ou seja, herdam todas, inclusive MCP); download e execução de código (3); envio de dados para fora (1: webhooks do Slack/Discord).

**Decisões tomadas:**
1. **Agente sem `tools` = rejeitado.** Sem a lista, o agente herda todas as ferramentas, o que conta como "ferramenta ampla sem necessidade". Isso derrubou 185 agentes da wshobson só por esse motivo. Para reaproveitá-los, é preciso uma nova triagem que defina `tools` mínimas, e essa mudança passa pelo tribunal.
2. **Regras pelo padrão perigoso, não pelo assunto.** Citar "webhook" como tema, "eval" no sentido de avaliação ou falar de "base64" não rejeita o agente. Rejeitam: `eval(`/`eval "$..."`, decodificação de base64 ou blocos codificados longos, `curl`/`wget` enviando dados (`-d`, `POST`, `-F`), webhooks concretos, servidor MCP remoto, `npx`, `uvx`, `npm i -g`, `raw.githubusercontent.com`, `curl | sh`, `iex`, e pedidos para ignorar regras.
3. **Frontmatter com YAML inválido** (`:` sem aspas na descrição) foi lido linha a linha, como o Claude Code aceita. Não é motivo de rejeição.
4. **Descrição do índice** = início da descrição original em inglês, até 12 palavras, sem o "Use this agent when…". Traduzir 171 linhas custaria mais e não melhora a busca por grep.
5. **Arquivos fora da lista permitida:** `docs/CEO.md` foi criado porque o passo 6 o pede explicitamente. Como não havia `CLAUDE.md`, ele foi criado só com o título da seção Real Corp e as 2 linhas pedidas.
6. **Revisão da decisão 1 (aprovada pelo usuário em 2026-10-15).** Os 185 agentes da wshobson rejeitados *só* por não terem `tools` voltaram ao catálogo, cada um com uma lista mínima escrita na cópia (2 linhas no frontmatter, marcadas com comentário; uma linha `tools: []` vazia foi substituída). No índice, eles aparecem com `(RC)`. Nenhum recebeu Bash.
   - Pesquisa (12; pesquisadores, SEO analítico, analistas): `Read, Grep, Glob, WebFetch, WebSearch`.
   - Escrita (107; quem escreve código, docs ou conteúdo): `Read, Write, Edit, Glob, Grep`.
   - Só leitura (66; revisores, auditores, arquitetos, orquestradores e qualquer caso duvidoso): `Read, Grep, Glob`.
   - Continuam rejeitados os 9 com padrão perigoso (7 por download/execução, 2 por envio de dados). Total: **356 aprovados, 9 rejeitados**.
7. **Branch `real-corp-catalogo`** criada a partir da `main`, sem merge e sem deploy. Os clones ficaram em `/tmp/catalogo-src/`, fora do projeto.

## Real Corp — empresa de agentes

data | decisão | motivo | fonte
--- | --- | --- | ---
2026-10-15 | Branch `real-corp` criada a partir de `real-corp-catalogo` | manter o catálogo junto da empresa; nada na main | FASE 0
2026-10-15 | Papel do CEO gravado em `docs/CEO.md.novo` | `docs/CEO.md` já existia (regra do catálogo); regra "não sobrescrever" | FASE 0
2026-10-15 | `CLAUDE.md` e `docs/DECISOES.md` receberam só acréscimos no fim | o prompt pede seção no fim; DECISOES é um registro | FASE 0
2026-10-15 | Prédio 3D em `real-corp/predio.html` | o projeto não tem pasta `public/` | FASE 0
2026-10-15 | FASE 1 ok: CLAUDE.md (+9 linhas), EMPRESA, CEO.md.novo, DECISOES, TRIBUNAL, PLANO | conferência com ls e leitura | FASE 1
2026-10-15 | FASE 2 ok: 9 arquivos em docs/conhecimento/ (14 buscas, máx. 2 por agente) | algumas fontes oficiais não vieram na busca; usei secundárias e marquei | buscas web
2026-10-15 | FASE 3 ok: 9 agentes em .claude/agents/ (34–38 linhas; name, model, tools, description validados com grep/wc) | validação da FASE 3 | —
2026-10-15 | Provas rodadas com subagente general-purpose + modelo do agente, mandando seguir .claude/agents/NOME.md | agentes novos só carregam numa sessão nova; ferramentas foram restringidas por instrução, não pelo sistema | FASE 4
2026-10-15 | Backup de docs/ em /tmp/real-corp-backup antes da prova do rm -rf | prova envolve comando destrutivo | FASE 4
2026-10-15 | FASE 4 ok: 9 de 9 provas PASSOU; CASO 000 (prova) REPROVADA anexado a TRIBUNAL.md | docs/provas/*.md | FASE 4
2026-10-15 | Prédio testado com three@0.128.0 servido de cópia local (npm pack em /tmp, fora do projeto) no lugar do jsDelivr | a rede do ambiente bloqueia cdn.jsdelivr.net; no celular o arquivo usa o jsDelivr normalmente | FASE 5
2026-10-15 | FASE 5 ok: real-corp/predio.html; tester PASSOU (7 andares, 10 personagens, 0 erros, missão completa, CDN fora = mensagem); captura docs/provas/predio-360.png | Playwright 360x800 | FASE 5
2026-10-15 | FASE 6 ok: 9 agentes válidos; CLAUDE.md só +9 linhas; 0 segredos (5 falsos positivos 'risk-register' descartados); git status só em caminhos permitidos; 9/9 provas; prédio PASSOU | verificação final | FASE 6
2026-10-15 | Agente rea: passo 2 passa a rodar o REA com npx -y -p rea-agents@6.5.0 (pacote oficial, versão fixa), sem tribunal | ordem direta do dono; o teste antigo (npx --no) falhava mesmo com o REA disponível; a linha 'Nunca' ainda não foi trocada (edição barrada pelo controle de permissões, aguarda confirmação do dono) | conversa
2026-10-15 | Agente rea: linha 'Nunca' trocada (sai 'instalar a ferramenta', entra 'usar outro pacote, versão ou fonte do REA, ou instalar algo global'); prova real: rea analisou real-corp/predio.html → docs/rea/predio.md; tester PASSOU | confirmação do dono ('pode trocar') | conversa
2026-10-17 | Galeria Órbita criada do zero (ideia de vitrine 3D; nada copiado do mesh3d.gallery, que não é do dono); 11 itens marcados como Exemplo; tester PASSOU | dono pediu um site parecido com mudanças; copiar o site de terceiros foi recusado | conversa
2026-10-17 | CASO 001 (Órbita completa com Vercel + Supabase) REPROVADO pelo tribunal; proposta alternativa: fase 1 estática | veredito em docs/TRIBUNAL.md | tribunal
2026-10-17 | Dono autorizou pausar jarvis-real e jarvis-stark no Supabase | pedido do dono; nada pausado porque a criação do projeto novo foi negada pelo controle de permissões | conversa
2026-10-17 | CASO 002 (fase 1 estática "Vértice") APROVADA COM CONDIÇÕES | 3 votos BOA, sem BLOQUEIO | tribunal
2026-10-17 | Vértice fase 1: build com --webpack (Turbopack falha com next/font/google); estúdio fictício 'Fábrica Órbita' renomeado para 'Fábrica Prisma'; tester PASSOU (9 rotas, busca, 3D, aviso sem WebGL, 0 requisições externas) | passos 1–9 do plano | CASO 002
2026-10-17 | Vértice publicado na Vercel: projeto vertice (prj_jfwNkJQdGwX1RLn1XqTQNlazgLRh), deploy dpl_3hjL6PnK2R8RY3YmrqAL1iFZpzer READY, endereço vertice-ebon.vercel.app, branch real-corp | pedido do dono após reconectar a Vercel; o 1º deploy de projeto novo saiu como produção (não como preview, desvio da condição 6 do CASO 002); não consegui abrir o site daqui (rede bloqueia vercel.app; a checagem pela Vercel deu 403); rollback e 2FA ainda pendentes | Vercel
2026-10-17 | Vértice v2 em produção: prévia dpl_3b3qL2pnqsvwJEZxEeAXCT2pknL5 (READY), depois redeploy de produção dpl_8ofPwZWzFUQERd6ZoBgrdC5htbaK (commit 7000080); tester PASSOU 2 rodadas no site real | correções do RSS, enquadramento 3D e dica nos chips; a Vercel não promove prévia sem rebuild (422), por isso o redeploy | Vercel
2026-10-17 | 502 isolado no console (1 de 2 rodadas) não se repetiu em 9 carregamentos nem em 2 novas rodadas | tratado como falha passageira da rede do ambiente | teste
2026-10-17 | Teste de rollback do Vértice: rollback para dpl_3hjL6PnK2R8RY3YmrqAL1iFZpzer (versão antiga no ar, 200) e promoção de volta para dpl_8ofPwZWzFUQERd6ZoBgrdC5htbaK (versão atual no ar, 200); tester PASSOU | condição 6 do CASO 002, autorizado pelo dono | Vercel
2026-10-17 | 2FA ativo na conta Vercel (confirmado pelo dono). Fase 1 do Vértice concluída: as 6 condições do CASO 002 atendidas (a 1ª publicação saiu direto em produção; as seguintes passaram por prévia) | condição 6 do CASO 002 | conversa
2026-10-17 | CASO 003 (fase 2 com Supabase) APROVADA COM CONDIÇÕES; pausa do jarvis-stark aguarda o OK do dono após o inventário | veredito em docs/TRIBUNAL.md | tribunal
