import Link from 'next/link';

// projeto: { slug, titulo, criador, etiquetas?: string[], cores: [c1, c2], exemplo?: boolean }
export default function CartaoProjeto({ projeto }) {
  if (!projeto || !projeto.slug) return null;
  const { slug, titulo, criador, etiquetas = [], cores = [], exemplo } = projeto;
  const [c1 = 'var(--acento)', c2 = 'var(--acento2)'] = cores;

  return (
    <Link href={`/projetos/${slug}`} className="cartao">
      <div className="cartao__mini" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }} aria-hidden="true">
        <span className="cartao__losango" />
      </div>
      <div className="cartao__corpo">
        <h3 className="cartao__titulo">
          {titulo}
          {exemplo && <span className="selo">Exemplo</span>}
        </h3>
        {criador && <p className="cartao__criador">por {criador}</p>}
        {etiquetas.length > 0 && (
          <ul className="etiquetas">
            {etiquetas.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
