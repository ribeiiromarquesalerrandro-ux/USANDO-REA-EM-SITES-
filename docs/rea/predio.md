# REA: predio.html
Alvo: real-corp/predio.html (copia em /tmp/real-corp-re/predio/). Autorizacao: "e meu" (dono confirmou 2026-10-15; arquivo criado pela Real Corp).
Pergunta: quais scripts externos, de onde, qual versao.
Comando: npx -y -p rea-agents@6.5.0 rea analyze-javascript-application /tmp/real-corp-re/predio --format json (codigo 0; evidence ev_65de6a8c...6c1; sha256 do alvo 7fc703f7...63c1).
## Achados (fato)
- three 0.128.0 — https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js — predio.html linha 63
- OrbitControls (three examples/js, 0.128.0) — https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js — predio.html linha 64
- Ambos via CDN jsDelivr, versao fixa; onerror chama falhaCDN().
## Incertezas / hipoteses
- Sem atributo integrity (SRI) nas linhas 63-64 (ver grep); nao ha verificacao de hash do CDN.
- Nao foi verificado o conteudo servido hoje pelo CDN.
