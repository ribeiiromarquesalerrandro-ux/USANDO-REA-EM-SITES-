# Regra do CEO — uso de especialistas do catálogo

1. **Procure** no índice com grep, sem ler o índice inteiro: `grep -i "<assunto>" docs/CATALOGO.md`.
2. **Leia** o arquivo escolhido: `real-corp/catalogo/ORIGEM/<origem>/<nome>.md`.
3. **Copie só ele** para `.claude/agents/<nome>.md`.
4. **Ajuste a cópia:** `model: haiku`; tire `Bash` e `Write` de `tools` se a tarefa não precisar deles.
5. **No máximo 5** especialistas do catálogo ativos em `.claude/agents/` ao mesmo tempo.
6. **Ao terminar**, apague o arquivo de `.claude/agents/`. O original continua em `ORIGEM/`.
7. **Tribunal:** qualquer mudança de arquitetura, custo ou segurança (inclusive dar mais ferramentas a um agente ou reaproveitar um rejeitado) passa pelo tribunal antes.
