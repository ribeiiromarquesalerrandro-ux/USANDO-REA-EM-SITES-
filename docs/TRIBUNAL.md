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
