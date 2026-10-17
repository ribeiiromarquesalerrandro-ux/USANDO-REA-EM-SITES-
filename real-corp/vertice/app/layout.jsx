import { Syne, Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';

const titulo = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--fonte-titulo',
  fallback: ['system-ui', 'sans-serif'],
});

const texto = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--fonte-texto',
  fallback: ['system-ui', 'sans-serif'],
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--fonte-mono',
  fallback: ['ui-monospace', 'monospace'],
});

export const metadata = {
  title: { default: 'Vértice', template: '%s · Vértice' },
  description: 'Galeria de experiências 3D na web, feita pela Real Corp.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${titulo.variable} ${texto.variable} ${mono.variable}`}>
      <body>
        <Cabecalho />
        <main>{children}</main>
        <Rodape />
      </body>
    </html>
  );
}
