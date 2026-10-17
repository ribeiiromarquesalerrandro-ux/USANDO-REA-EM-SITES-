import Link from 'next/link';

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="container">
        <p>Vértice · galeria de experiências 3D na web, feita pela Real Corp.</p>
        <p>
          <Link href="/termos">Termos</Link> · <a href="/rss.xml">RSS</a>
        </p>
        <p className="rodape__aviso">Projetos e criadores marcados como Exemplo são fictícios.</p>
        <p className="rodape__aviso">© {new Date().getFullYear()} Real Corp</p>
      </div>
    </footer>
  );
}
