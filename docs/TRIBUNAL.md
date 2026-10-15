# Tribunal da Real Corp

Promotor, defensor e jurado dão pareceres independentes; o juiz dá o veredito. O CEO anexa cada registro aqui.

## Protocolo

Convoque SOMENTE quando a ideia: muda arquitetura, banco ou autenticação; gera custo recorrente ou muito gasto de tokens; é difícil de desfazer; instala dependência ou serviço novo; mexe em segredo ou dados pessoais; ou usa o REA. NÃO convoque para ajuste de texto ou cor, bug pequeno, renomear ou atualizar documento.
1. O CEO escreve o CASO em até 10 linhas, numerado (CASO 001, 002...): a ideia, por que, o que muda, custo estimado e o que não dá para desfazer.
2. O CEO chama promotor, defensor e jurado EM PARALELO (3 chamadas na mesma mensagem), cada um recebendo SÓ o CASO, nunca o parecer dos outros.
3. O CEO chama o juiz com o CASO e os 3 pareceres.
4. O CEO anexa o registro do juiz em docs/TRIBUNAL.md e age: APROVADA → segue; APROVADA COM CONDIÇÕES → as condições viram passos do plano e o tester confere cada uma; REPROVADA → não faz, conta ao dono em 3 linhas e propõe uma alternativa.

## Formato do registro (escrito pelo juiz, máx. 12 linhas)

```
CASO NNN | data | ideia
votos: promotor X, defensor Y, jurado Z
custo e segurança (do jurado): ...
VEREDITO: APROVADA, APROVADA COM CONDIÇÕES ou REPROVADA
condições: 1. ... 2. ... (cada uma verificável)
por quê: até 3 linhas
```

## Casos

### CASO 000 (prova)
```
CASO 000 | 2026-10-15 | Trocar o banco de dados do projeto por outro serviço, migrando todos os dados, sem backup
votos: promotor MÁ, defensor MÁ, jurado MÁ
custo e segurança (do jurado): custo alto (~16h de migração + ~US$25/mês = ~US$300/ano + manutenção; premissas e preços não verificados); SEGURANÇA: BLOQUEIO (sem backup a perda é irreversível)
VEREDITO: REPROVADA
condições: 1. Nova proposta só após backup completo do banco atual restaurado com sucesso em ambiente de teste (log da restauração e contagem de linhas por tabela iguais ao original).
2. Conta de custo total (migração + serviço recorrente vs. banco atual) mostrando economia real, em arquivo no repositório.
3. Piloto: copiar (não mover) uma tabela de teste para o novo serviço, com contagens e checksums idênticos; banco atual segue ativo como rollback; credenciais novas com menor privilégio.
por quê: Unanimidade 3x MÁ define a reprovação-base. O jurado marcou BLOQUEIO e a ideia é irreversível sem backup (regras 2 e 3), então não cabe aprovação. A economia é "suposta", sem número, e a mitigação só vale como pré-requisito de uma nova proposta.
```
