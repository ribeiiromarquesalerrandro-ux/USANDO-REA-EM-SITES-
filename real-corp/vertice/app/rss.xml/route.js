import posts from '@/data/posts.json';
import projetos from '@/data/projetos.json';

export const dynamic = 'force-static';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vertice-ebon.vercel.app';

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

export function GET() {
  const base = SITE_URL.replace(/\/+$/, '');
  const itens = [
    ...posts.map((p) => ({ titulo: p.titulo, desc: p.resumo, data: p.data, url: `${base}/blog/${p.slug}/` })),
    ...projetos.map((p) => ({ titulo: p.titulo, desc: p.descricao, data: p.dataAdicao, url: `${base}/projetos/${p.slug}/` })),
  ]
    .sort((a, b) => b.data.localeCompare(a.data))
    .slice(0, 20);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Vértice</title>
<link>${esc(base)}/</link>
<description>Galeria de experiências 3D na web, feita pela Real Corp.</description>
<language>pt-BR</language>
${itens
  .map(
    (i) => `<item>
<title>${esc(i.titulo)}</title>
<link>${esc(i.url)}</link>
<guid isPermaLink="true">${esc(i.url)}</guid>
<pubDate>${new Date(`${i.data}T00:00:00Z`).toUTCString()}</pubDate>
<description>${esc(i.desc)}</description>
</item>`,
  )
  .join('\n')}
</channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
