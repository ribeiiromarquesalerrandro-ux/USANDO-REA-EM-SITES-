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

### CASO 001
```
CASO 001 | 2026-10-17 | Órbita vira site real (Next.js na Vercel + Supabase, ~15 funções)
votos: promotor MÁ, defensor BOA (só em etapas), jurado MÁ (vira BOA com mitigações)
custo e segurança (do jurado): construção ≈ US$4; recorrente até ~US$25/mês (Supabase) mais e-mail da newsletter; Vercel Hobby é só para uso não comercial. SEGURANÇA: BLOQUEIO (sem backup no plano grátis; código de terceiros em envios e experimentos; 3º projeto pode pausar jarvis-real ou jarvis-stark).
VEREDITO: REPROVADA (o escopo completo com Supabase; a fase 1 estática pode ser proposta como novo caso)
condições: 1. Nova proposta limitada à fase 1 estática: Next.js com dados em JSON no repo, sem login, sem newsletter e sem Supabase. Verificável por `npm run build` sem erro, ausência de `@supabase/supabase-js` no package.json e PASSOU do tester.
2. Cena 3D portada para o pacote npm `three`. Verificável por não haver `<script src>` de CDN no código e pela cena renderizando no teste.
3. Antes de qualquer Supabase: o dono decide por escrito se um 3º projeto é aceitável (custo e pausa dos existentes). Nada é pausado sem essa decisão.
4. Antes de coletar e-mails: backup `pg_dump` restaurado com sucesso, RLS ativo em todas as tabelas (`pg_tables.rowsecurity` = true), service role fora do bundle do cliente (`grep -r service_role .next/static` sem resultado), termos e política publicados, confirmação dupla e caminho de remoção.
5. Rollback testado ("promover deploy anterior" na Vercel) e envios ou experimentos de terceiros só em iframe com sandbox em domínio separado.
por quê: A maioria (2 de 3) votou MÁ, e o BLOQUEIO do jurado impede aprovação simples. O escopo completo junta dados pessoais, custo incerto e risco aos projetos existentes, sem mitigação já verificável. A fase 1 estática, que o defensor e o promotor propõem, remove esses riscos e pode voltar como novo caso.
```

### CASO 002
```
CASO 002 | 2026-10-17 | Fase 1 estática do site "Vértice" (Next.js App Router, Vercel Hobby)
votos: promotor BOA, defensor BOA, jurado BOA
custo e segurança (do jurado): custo baixo (~US$2–3 construção; recorrente US$0 se couber no Hobby, não verificado); segurança: atenção, sem BLOQUEIO (reversível, sem segredo nem dado pessoal)
VEREDITO: APROVADA COM CONDIÇÕES
condições: 1. real-corp/vertice/package.json tem só next, react, react-dom e three com versões fixas, sem @supabase; package-lock.json existe e `npm audit` sem vulnerabilidade alta/crítica. 2. `grep -rEi "cdn|googleapis|gstatic|<iframe" real-corp/vertice/{app,components,public}` não retorna nada; fontes via next/font (locais); next.config com output: 'export', sem API routes nem server actions. 3. Sem formulário, cookie, analytics nem Vercel Analytics (grep no código); nenhum token ou .env no git (`git ls-files | grep -i env` vazio). 4. Autores/projetos de exemplo marcados como fictícios e sem texto "escolhidas a dedo"; página de criadores só com essa sinalização. 5. `npm run build` sem erro; tester dá PASSOU, incluindo 3D com three do npm e fallback sem WebGL. 6. Deploy de preview primeiro; rollback testado (promover deploy anterior) com URL respondendo 200 depois; 2FA ativo na Vercel (confirmado pelo usuário); uso não comercial (Hobby).
por quê: 3 votos BOA e sem BLOQUEIO, então aprova. É reversível (rollback e git), mas o rollback tem de ser testado. Os riscos do promotor (portar o 3D, conteúdo fictício, Google Fonts) viram condições verificáveis. O custo recorrente US$0 não foi verificado, então qualquer mudança de plano ou Analytics exige novo tribunal.
```

### CASO 003
```
CASO 003 | 2026-10-17 | Fase 2 do Vértice: Supabase (projeto "vertice", sa-east-1, grátis) e pausa do jarvis-stark
votos: promotor MÁ, defensor BOA, jurado BOA
custo e segurança (do jurado): custo baixo (~US$3–5 de construção, US$0/mês no grátis, não verificado; Pro ~US$25/mês só se precisar de backup diário). Segurança: atenção, sem BLOQUEIO. SMTP próprio seria dependência nova e exige novo tribunal.
VEREDITO: APROVADA COM CONDIÇÕES
condições: 1. Antes de pausar o jarvis-stark, o dono lista os sites que dependem dele. O CEO confere com `grep -r "jarvis-stark"` no repositório e na Vercel (prj_8G7fvSR1VrgILyv8dXuvsTfap4q3). O resultado e o OK do dono ficam registrados em docs/TRIBUNAL.md. Se algum site depender dele, não pausar.
2. Antes do 1º e-mail coletado, um pg_dump do vertice é restaurado em banco local e as contagens de linhas das 4 tabelas ficam iguais. As migrations ficam no git.
3. As 4 tabelas têm RLS com WITH CHECK. O tester prova com a chave anon que não lê nem altera dados alheios, não escreve em admins nem no status dos envios e não vira admin.
4. `grep -r "service_role" .next/static` retorna vazio. Os links de envio aceitam só http(s), sem iframe. Cada aprovação registra quem aprovou e quando.
5. O link mágico usa allowlist de URLs de retorno. A newsletter exige e-mail confirmado e tem liga/desliga. A função SECURITY DEFINER de "excluir minha conta e dados" é testada e apaga todas as linhas do usuário.
6. Termos e política atualizados no repositório antes do 1º e-mail. Rollback da Vercel testado (redeploy do deploy anterior com resposta 200).
por quê: 2 votos BOA contra 1 MÁ. Os riscos do promotor (backup, inventário, RLS) viram condições verificáveis. A pausa é reversível e o dono autorizou por escrito, mas só depois do inventário. Coletar e-mails é difícil de desfazer, então o backup restaurado vem antes. O plano não muda de fase, porque as condições já bloqueiam o 1º e-mail.
```
Inventário (condição 1, 2026-10-17): grep no repositório não encontra uso do jarvis-stark fora de docs/. Na Vercel existe o projeto "jarvis-stark" (prj_8G7fvSR1VrgILyv8dXuvsTfap4q3), que provavelmente usa esse banco e sairia do ar. Aguardando o OK do dono depois deste inventário.
OK do dono (2026-10-18): "pode pausar mesmo assim". Projeto da Vercel jarvis-stark pausado pelo CEO. A pausa do banco Supabase jarvis-stark (tmyrickggvyapdawkuub) foi negada pelo controle de permissões e fica com o dono.
Nota CEO (2026-10-19): região us-east-1 em vez de sa-east-1 decidida pelo CEO com o dono (docs/DECISOES.md); política de privacidade cita a transferência (LGPD art. 33). Condição 1: o banco jarvis-stark NÃO foi pausado (segue ativo); só o projeto Vercel jarvis-stark foi pausado, com OK escrito do dono. O vertice usa a vaga liberada pelo jarvis-real, pausado pelo dono.
