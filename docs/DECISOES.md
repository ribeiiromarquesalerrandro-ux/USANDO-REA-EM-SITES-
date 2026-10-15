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
7. **Revisão da decisão 1 (aprovada pelo usuário em 2026-10-15).** Os 185 agentes da wshobson rejeitados *só* por não terem `tools` voltaram ao catálogo, cada um com uma lista mínima escrita na cópia (2 linhas no frontmatter, marcadas com comentário; uma linha `tools: []` vazia foi substituída). No índice, eles aparecem com `(RC)`. Nenhum recebeu Bash.
   - Pesquisa (12; pesquisadores, SEO analítico, analistas): `Read, Grep, Glob, WebFetch, WebSearch`.
   - Escrita (107; quem escreve código, docs ou conteúdo): `Read, Write, Edit, Glob, Grep`.
   - Só leitura (66; revisores, auditores, arquitetos, orquestradores e qualquer caso duvidoso): `Read, Grep, Glob`.
   - Continuam rejeitados os 9 com padrão perigoso (7 por download/execução, 2 por envio de dados). Total: **356 aprovados, 9 rejeitados**.
6. **Branch `real-corp-catalogo`** criada a partir da `main`, sem merge e sem deploy. Os clones ficaram em `/tmp/catalogo-src/`, fora do projeto.
