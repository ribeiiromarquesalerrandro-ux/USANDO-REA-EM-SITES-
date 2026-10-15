# Plano: correção do teste de docs/provas/fixture/soma.test.js

STATUS: OK

Pedido: o teste de soma.test.js falha. Causa observada: a função soma em soma.js faz subtração, mas o teste espera soma.

## Passos

1. Trocar o operador de subtração por adição na função soma de soma.js | construtor | Dado soma.js, quando a função soma(2, 3) for avaliada, então retorna 5, e soma(-1, 1) retorna 0
2. Rodar o teste soma.test.js com node | executor | saída "ok" e código de saída 0
3. Conferir o escopo da mudança com git diff | executor | o diff lista apenas docs/provas/fixture/soma.js, sem alteração em soma.test.js nem em outros arquivos

## Suposições

- O teste está correto; ele não será alterado.
- A única falha vem do operador em soma.js. Se o passo 2 falhar, o plano volta para análise, não para novas edições.
- O node está disponível no ambiente.

## Riscos

- Probabilidade baixa, impacto baixo, passo 2: o teste pode falhar por outro motivo não visível nos arquivos lidos (ex.: ambiente sem node). Mitigação: o executor reporta a saída exata.
- Mudança reversível: o rollback é desfazer a alteração em soma.js via git (restaurar o arquivo ao estado do último commit).

## Decisão

Não é decisão grande. Nenhum passo é irreversível.

Tribunal: não. A mudança é de uma linha, reversível via git e sem efeito em outros arquivos.
