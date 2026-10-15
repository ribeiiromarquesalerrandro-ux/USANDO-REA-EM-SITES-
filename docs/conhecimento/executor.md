# Conhecimento — executor

Pesquisado em 2026-10-15. Leia só quando precisar de detalhe.

1. **Dry-run e lista de alvos antes do destrutivo.** Mostre o que será afetado antes de rodar; use a flag de simulação quando existir; teste primeiro em ambiente não produtivo.
   Fonte: https://docs.rs/crate/safe-chains/latest/source/docs/design/safety-foundations.md
2. **Menor privilégio e "na dúvida, não".** Só o que está numa lista permitida roda; o desconhecido é negado por padrão.
   Fonte: https://docs.rs/crate/safe-chains/latest/source/docs/design/safety-foundations.md
3. **Portão humano para comando destrutivo.** Comando destrutivo sem confirmação, ou operação de alto risco sem dry-run antes, é violação.
   Fonte: https://developer.salesforce.com/docs/platform/einstein-for-devs/guide/safe-commands.html
4. **Evite o shell e argumentos montados de texto.** Todo comando com entrada externa pode sofrer injeção de argumento (até um `--help` a mais muda o efeito).
   Fonte: https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html
5. **Verifique por um segundo caminho.** Código de saída 0 não basta: confirme o efeito com outro comando (listar, status, ler o resultado).
   Fonte: https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html (impacto vai de vazamento a execução remota; conferir o efeito real)
