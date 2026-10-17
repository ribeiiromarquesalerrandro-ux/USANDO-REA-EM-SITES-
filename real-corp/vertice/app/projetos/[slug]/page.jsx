import Link from 'next/link';
import { notFound } from 'next/navigation';
import Cena3D from '@/components/Cena3D';
import projetos from '@/data/projetos.json';
import criadores from '@/data/criadores.json';

export const dynamicParams = false;

export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = projetos.find((x) => x.slug === slug);
  return { title: p ? p.titulo : 'Projeto' };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const p = projetos.find((x) => x.slug === slug);
  if (!p) notFound();

  const criador = criadores.find((c) => c.slug === p.criador);
  const data = new Date(`${p.dataAdicao}T00:00:00Z`).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <div className="container">
      <p>
        <Link href="/projetos" className="voltar">
          ← Voltar para projetos
        </Link>
      </p>
      <div className="detalhe__cena">
        <Cena3D tipo={p.cena} cores={p.cores} interativa altura={360} />
      </div>
      <h1>{p.titulo}</h1>
      {p.exemplo && <p><span className="selo selo--solto">Exemplo · projeto fictício</span></p>}
      <p>
        por <Link href={`/criadores#${p.criador}`}>{criador ? criador.nome : p.criador}</Link>
      </p>
      <p>{p.descricao}</p>
      <ul className="etiquetas">
        {[p.categoria, ...p.tecnologias].map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
      <p className="detalhe__data">Adicionado em {data}</p>
      {!p.exemplo && p.link && (
        <p>
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="botao botao--primario">
            Abrir projeto
          </a>
        </p>
      )}
    </div>
  );
}
