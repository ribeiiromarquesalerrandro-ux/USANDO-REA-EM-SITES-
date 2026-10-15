# agente-rea

Agente feito com o **Tool Runner** do SDK do Claude (`@anthropic-ai/sdk`) que usa a CLI do REA
(pacote oficial `rea-agents`, sempre via `npx`, sem instalar nem registrar nada) para analisar
aplicações JavaScript e sites e explicar o resultado em português.

## Como rodar

```bash
cd agente-rea
npm install
export ANTHROPIC_API_KEY=...   # ou: ant auth login
npm run agente -- "Analise a pasta ./minha-app com o REA e me explique em 10 linhas como ela funciona"
```

As ferramentas que o agente chama aparecem no terminal com `→`; a resposta final sai no stdout.

## Ferramentas

| Ferramenta | O que faz |
|---|---|
| `rea_ajuda` | `npx -y rea-agents@latest [comando] --help` |
| `rea_executar` | `npx -y rea-agents@latest <comando> <argumentos...> --format json` |

- Só comandos de leitura e análise estão liberados (lista `COMANDOS_PERMITIDOS` em `src/ferramentas.ts`).
  Comandos que mudam o sistema (`setup`, `uninstall`, `update`, instalação via adb...) ou executam
  código arbitrário (gdb, frida...) ficam de fora.
- Os argumentos vão direto para o processo, sem shell.
- A saída completa é salva em `$TMPDIR/agente-rea/`; o modelo recebe no máximo 60 mil caracteres
  e é orientado a usar `--filter-output` / `--token-limit` para focar.

## Configuração do modelo

`claude-opus-5-5`, raciocínio adaptativo, esforço `medium`, até 20 iterações, e
`fallbacks: "default"` (se o modelo recusar o pedido, a API tenta num modelo de reserva).

## Checagem

```bash
npm run typecheck
```
