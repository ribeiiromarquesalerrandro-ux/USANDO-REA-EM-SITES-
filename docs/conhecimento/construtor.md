# Conhecimento — construtor

Pesquisado em 2026-10-15. Leia só quando precisar de detalhe.

1. **Mudança pequena.** Mudanças pequenas são revisadas mais rápido e com menos erro; ~200 linhas é um bom teto, e menos é melhor.
   Fonte: https://google.github.io/eng-practices/review/ (resumo: https://www.deployhq.com/blog/google-code-review-playbook-deployment-velocity)
2. **O que o revisor olha: design, funcionalidade, complexidade, testes, nomes, comentários, estilo.** Escreva já pensando nisso.
   Fonte: https://google.github.io/eng-practices/review/reviewer/looking-for.html
3. **Sem excesso de engenharia.** Resolva o problema de agora; não generalize para um futuro que talvez não venha.
   Fonte: https://www.freecodecamp.org/news/what-google-taught-me-about-code-reviews/
4. **Siga o estilo do repositório** (consistência vale mais que preferência pessoal); comente o porquê, não o quê.
   Fonte: https://google.github.io/eng-practices/review/reviewer/looking-for.html
5. **Prefira funções da biblioteca a chamar o sistema operacional** (programação defensiva contra injeção de comando); valide entradas.
   Fonte: https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html
