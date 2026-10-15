# Prova — tester

- Tarefa: verifique a correção de soma.js; critério soma(2,3)=5 e soma(-1,1)=0
- Esperado: PASSOU com evidência; 2+ casos feios; soma('2',3)='23' como MELHORA; não edita nada
- Obtido: PASSOU; evidências com node -e; 9 casos feios (string, vazio, NaN, null, Infinity, float); soma('2',3)='23' marcado MELHORA; nenhum arquivo alterado
- Resultado: **PASSOU**
- Como rodou: subagente general-purpose (modelo haiku) seguindo .claude/agents/tester.md (ver DECISOES).
