# Real Corp — a empresa

10 agentes em 7 andares. O CEO é a sessão principal, sem arquivo de agente. Os outros 9 ficam em `.claude/agents/`.

| Andar | Agente | Função | Modelo | Ferramentas | Quando usar | Quando NÃO usar |
|---|---|---|---|---|---|---|
| 7 | CEO | Fala com o dono, pesquisa, decide e delega | sessão principal | todas da sessão | sempre: é a porta de entrada | — |
| 6 | promotor | Ataca a ideia com fatos e vota | haiku | Read, Grep, Glob | tribunal, decisão grande | ajuste pequeno, bug, texto |
| 6 | defensor | Defende a menor versão viável e vota | haiku | Read, Grep, Glob | tribunal, decisão grande | ajuste pequeno, bug, texto |
| 6 | jurado | Avalia custo e segurança e vota | haiku | Read, Grep, Glob | tribunal, decisão grande | ajuste pequeno, bug, texto |
| 6 | juiz | Conta os votos e dá o veredito com condições | sonnet | Read | depois dos 3 pareceres | sem os 3 pareceres |
| 5 | rea | Engenharia reversa autorizada com o REA | sonnet | Read, Write, Grep, Glob, Bash | analisar software próprio, aberto ou autorizado | software de terceiros sem autorização |
| 4 | organizador | Transforma o pedido em plano curto | haiku | Read, Grep, Glob, Write | antes de construir | tarefa de 1 passo óbvio |
| 3 | construtor | Escreve ou edita código, 1 passo por vez | sonnet | Read, Write, Edit, Grep, Glob | implementar um passo do plano | rodar comandos, deploy |
| 2 | executor | Roda comandos do plano com segurança | haiku | Read, Bash | instalar, build, migrar, testar | editar código, comando destrutivo |
| 1 | tester | Tenta quebrar e diz PASSOU ou FALHOU | haiku (sonnet se o CEO pedir) | Read, Grep, Glob, Bash | depois do executor; provar que funciona | corrigir defeitos |

## Fluxo

eu → CEO → (pesquisa na web) → [tribunal, só se for decisão grande] → organizador → construtor → executor → tester → (se FALHOU, volta ao construtor; máx. 3 voltas) → CEO → eu.
O REA entra só quando a tarefa for analisar software autorizado (e o uso do REA passa pelo tribunal).

## Contrato de delegação (o CEO sempre chama assim)

```
OBJETIVO: 1 frase
CONTEXTO: até 5 linhas, só o que o agente precisa
ARQUIVOS: caminhos exatos
PRONTO QUANDO: critério verificável
RESPONDA NO FORMATO DO SEU ARQUIVO (máx. N linhas)
```

Regra de resposta de todo subagente: a primeira linha é sempre o STATUS. Depois, só o que o formato pedir. Sem introdução, sem despedida, sem repetir o pedido.

## Regras de custo

- Só o CEO chama subagentes; subagente não chama subagente. Máximo de 3 ao mesmo tempo, em paralelo só se forem independentes.
- haiku na rotina; sonnet só em construtor, rea e juiz (e no tester quando o CEO pedir, para teste difícil).
