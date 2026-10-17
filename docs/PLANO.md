# Plano: fase 1 estática do site "Vértice"

STATUS: OK

Pedido: fase 1 estática do site Vértice, Next.js App Router com output 'export', em real-corp/vertice/, com base visual e de conteúdo da galeria real-corp/galeria/index.html (12 itens). Aprovado com condições no CASO 002 (docs/TRIBUNAL.md).

Diretório do projeto: /home/user/USANDO-REA-EM-SITES-

## Passos

1. Criar esqueleto em real-corp/vertice/: package.json com só next, react, react-dom e three em versão exata (sem ^ ou ~), next.config.js com output: 'export', tsconfig, .gitignore com .env* e sem API routes nem server actions | construtor | Dado package.json, quando lido, então tem só essas 4 deps fixas, sem @supabase, e next.config tem output 'export'
2. Instalar dependências e auditar: npm install gera package-lock.json; npm audit | executor | package-lock.json existe e npm audit não lista vulnerabilidade alta ou crítica (saída anexada ao relatório)
3. Criar os dados em JSON (data/projetos.json com os 12 itens da galeria renomeados para Vértice, data/criadores.json, data/posts.json) | construtor | Dado galeria/index.html, quando comparado, então há 12 projetos; todo projeto e criador de exemplo tem exemplo ou ficticio true; nenhum texto "escolhidas a dedo"
4. Criar layout base: nome Vértice, paleta nova em CSS (variáveis), fontes via next/font/local ou next/font/google com download no build (sem link externo), cabeçalho e rodapé com links para todas as páginas | construtor | Dado o código de app/, quando buscado por "Órbita" e "fonts.googleapis", então nada é encontrado; next/font é usado
5. Porte do 3D para o componente cliente com three do npm (sem CDN, sem OrbitControls de CDN; import do npm), carregado com dynamic import, e fallback com mensagem quando WebGL falha | construtor | Dado o build, quando a página de projeto abre, então a cena renderiza com three do npm; sem WebGL, aparece aviso e o resto da página funciona
6. Criar páginas início (destaques e novidades) e /projetos (busca e filtros sobre projetos.json) e /projetos/[slug] com generateStaticParams para os 12 slugs | construtor | Dado projetos.json, quando /projetos recebe busca "mapa" ou filtro de categoria, então lista só os projetos que batem; /projetos/[slug] existe para cada slug
7. Criar páginas /criadores (com aviso de dados fictícios), /blog, /blog/[slug], /sobre, /termos e app/rss.xml gerado no build a partir de posts.json | construtor | Dado o build, quando lido, então existem essas rotas, /criadores mostra o aviso de fictício e out/rss.xml é XML válido
8. Rodar verificações estáticas e build: grep -rEi "cdn|googleapis|gstatic|<iframe" real-corp/vertice/{app,components,public}; grep -rEi "analytics|cookie|<form|useState.*email" no código; git ls-files | grep -i env; npm run build | executor | greps sem saída; git ls-files com env vazio; npm run build com código 0 e out/ contendo index.html, projetos, criadores, blog, sobre, termos e rss.xml
9. Testar: páginas respondem 200 em servidor local, busca e filtros funcionam, 3D renderiza com three do npm, fallback sem WebGL funciona (simular WebGL indisponível) | tester | saída "PASSOU" com lista de páginas testadas; qualquer "FALHOU" volta ao passo 5, 6 ou 7 (máximo 3 voltas)
10. Backup e preview: criar commit local e tag git (ex.: vertice-fase1-pre, sem push) anotando o hash; depois deploy de preview na Vercel (conta pessoal, via MCP) | executor | tag existe; URL do preview responde 200; ID do deploy e URL anotados em docs/PLANO.md; 2FA confirmado pelo usuário (já confirmado no tribunal)
11. Teste de rollback: com OK explícito do usuário, promover o deploy anterior, checar a URL com 200, depois promover de volta o deploy atual e checar 200 | executor | URL de produção responde 200 após cada promoção; ID do deploy final igual ao do passo 10; resultado enviado ao tester para PASSOU

## Suposições

- Versões exatas: o construtor escolhe a versão estável atual de cada dep no passo 1 e a registra no package.json.
- Conteúdo de blog, criadores e projetos novos é fictício e marcado; os 12 itens da galeria mantêm exemplo true/false como estão, e "Prédio Real Corp" (exemplo false) é da própria Real Corp.
- Paleta nova é escolha de estilo do construtor (decisão pequena, não exige tribunal).
- Rollback "promover deploy anterior" exige pelo menos dois deploys de produção; o primeiro promote para produção é ação pública e só ocorre com OK do usuário (passo 11).
- Vercel MCP tem operações de deploy e promote; se não tiver rollback, usar fallback de CLI descrito pela Vercel, sem imprimir credenciais.
- Node e npm estão disponíveis.

## Riscos

- Prob. média, impacto médio, passo 5: API do three mudou desde a galeria (three 0.128 via CDN). Mitigação: porte com three do npm e teste no passo 9.
- Prob. baixa, impacto alto, passo 8: link externo ou fonte do Google escapa. Mitigação: greps do passo 8 bloqueiam o build.
- Prob. média, impacto baixo, passo 6 ou 7: generateStaticParams ou route do rss.xml falha com output 'export'. Mitigação: build do passo 8.
- Prob. média, impacto médio, passo 11: MCP não tem rollback ou promote. Mitigação: CLI da Vercel como fallback; se falhar, parar e relatar.
- Prob. baixa, impacto médio, passo 10 e 11: custo ou limite do Hobby excedido (custo recorrente não verificado). Mitigação: checar uso antes do passo 11; se houver cobrança, parar e pedir novo tribunal.
- Reversível: preview pode ser removido; rollback por tag git (vertice-fase1-pre) e por deploy anterior.

## Decisão

Não é decisão grande nova: o CASO 002 já aprovou arquitetura, custo e segurança com condições. Nenhum passo adiciona dependência fora das 4 aprovadas, Analytics, formulário, cookie ou plano pago.

Mudança que exige novo tribunal: qualquer dependência extra, Vercel Analytics, plano pago ou uso comercial.

Tribunal: não. O CASO 002 cobre este plano; as 6 condições estão nos passos 1 (cond. 1), 2 (cond. 1), 3 e 7 (cond. 4), 4 e 8 (cond. 2 e 3), 9 (cond. 5), 10 e 11 (cond. 6).
