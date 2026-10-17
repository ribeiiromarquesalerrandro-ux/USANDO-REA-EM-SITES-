'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const LINKS = [
  { href: '/', texto: 'Início' },
  { href: '/projetos', texto: 'Projetos' },
  { href: '/criadores', texto: 'Criadores' },
  { href: '/blog', texto: 'Blog' },
  { href: '/sobre', texto: 'Sobre' },
];

export default function Cabecalho() {
  const caminho = usePathname() || '/';
  const [aberto, setAberto] = useState(false);

  const ativo = (href) => (href === '/' ? caminho === '/' : caminho.startsWith(href));

  return (
    <header className="cabecalho">
      <div className="container cabecalho__linha">
        <Link href="/" className="marca" aria-label="Vértice, página inicial">
          <span className="marca__losango" aria-hidden="true" />
          Vértice
        </Link>
        <button
          type="button"
          className="botao cabecalho__menu"
          aria-expanded={aberto}
          aria-controls="nav-principal"
          onClick={() => setAberto(!aberto)}
        >
          Menu
        </button>
        <nav id="nav-principal" aria-label="Principal" className={`nav${aberto ? ' nav--aberta' : ''}`}>
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={ativo(l.href) ? 'page' : undefined}
                  onClick={() => setAberto(false)}
                >
                  {l.texto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
