import Link from 'next/link';
import { notFound } from 'next/navigation';
import posts from '@/data/posts.json';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return p ? { title: p.titulo, description: p.resumo } : { title: 'Post' };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();

  const data = new Date(`${p.data}T00:00:00Z`).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <div className="container">
      <p>
        <Link href="/blog" className="voltar">
          ← Voltar para o blog
        </Link>
      </p>
      <h1>{p.titulo}</h1>
      <p className="detalhe__data">{data}</p>
      {p.corpo.map((par, i) => (
        <p key={i}>{par}</p>
      ))}
    </div>
  );
}
