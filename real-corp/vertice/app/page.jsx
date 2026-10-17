import Link from 'next/link';
import CartaoProjeto from '@/components/CartaoProjeto';
import Cena3D from '@/components/Cena3D';
import projetos from '@/data/projetos.json';
import criadores from '@/data/criadores.json';

const nomes = Object.fromEntries(criadores.map((c) => [c.slug, c.nome]));

function paraCartao(p) {
  return {
    slug: p.slug,
    titulo: p.titulo,
    criador: nomes[p.criador] || p.criador,
    etiquetas: [p.categoria, ...p.tecnologias],
    cores: p.cores,
    exemplo: p.exemplo,
  };
}

export default function Page() {
  const destaques = projetos.filter((p) => p.destaque).map(paraCartao);
  const novidades = [...projetos]
    .sort((a, b) => b.dataAdicao.localeCompare(a.dataAdicao))
    .slice(0, 6)
    .map(paraCartao);

  return (
    <div className="container">
      <section className="abertura">
        <div>
          <h1>Vértice</h1>
          <p>Uma galeria de experiências 3D na web</p>
        </div>
        <div className="abertura__cena">
          <Cena3D tipo="orbita" altura="100%" />
        </div>
      </section>

      <section>
        <h2>Em destaque</h2>
        <div className="grade">
          {destaques.map((p) => (
            <CartaoProjeto key={p.slug} projeto={p} />
          ))}
        </div>
      </section>

      <section className="secao">
        <h2>Novidades</h2>
        <div className="grade">
          {novidades.map((p) => (
            <CartaoProjeto key={p.slug} projeto={p} />
          ))}
        </div>
        <p className="secao__link">
          <Link href="/projetos" className="botao botao--primario">
            Ver todos os projetos
          </Link>
        </p>
      </section>
    </div>
  );
}
