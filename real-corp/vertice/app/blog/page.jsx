import Link from 'next/link';
import posts from '@/data/posts.json';

export const metadata = { title: 'Blog' };

const formatar = (d) =>
  new Date(`${d}T00:00:00Z`).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

export default function Page() {
  return (
    <div className="container">
      <h1>Blog</h1>
      {posts.map((p) => (
        <article key={p.slug}>
          <h2>
            <Link href={`/blog/${p.slug}`}>{p.titulo}</Link>
          </h2>
          <p className="detalhe__data">{formatar(p.data)}</p>
          <p>{p.resumo}</p>
          <p>
            <Link href={`/blog/${p.slug}`}>Ler post</Link>
          </p>
        </article>
      ))}
    </div>
  );
}
