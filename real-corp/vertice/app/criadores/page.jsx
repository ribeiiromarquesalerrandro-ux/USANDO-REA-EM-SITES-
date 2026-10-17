import Link from 'next/link';
import criadores from '@/data/criadores.json';
import projetos from '@/data/projetos.json';

export const metadata = { title: 'Criadores' };

export default function Page() {
  return (
    <div className="container">
      <h1>Criadores</h1>
      <p>
        Os criadores marcados como Exemplo são estúdios fictícios, criados para mostrar a galeria funcionando.
      </p>
      {criadores.map((c) => {
        const lista = projetos.filter((p) => p.criador === c.slug);
        return (
          <section key={c.slug} id={c.slug}>
            <h2>{c.nome}</h2>
            {c.exemplo && <p><span className="selo selo--solto">Exemplo</span></p>}
            <p>{c.cidade}</p>
            <p>{c.bio}</p>
            {lista.length > 0 && (
              <ul>
                {lista.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/projetos/${p.slug}`}>{p.titulo}</Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  );
}
