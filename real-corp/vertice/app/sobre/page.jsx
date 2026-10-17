export const metadata = { title: 'Sobre' };

export default function Page() {
  return (
    <div className="container">
      <h1>Sobre o Vértice</h1>
      <p>
        O Vértice é uma galeria de experiências 3D na web, feita pela Real Corp. Aqui você encontra
        arte, jogos, produtos e visualizações que rodam direto no navegador.
      </p>
      <h2>Como os projetos são escolhidos</h2>
      <p>
        Cada projeto passa por uma curadoria: precisa rodar bem em aparelhos simples, respeitar a
        preferência por menos movimento e ter texto que descreva o que a cena mostra.
      </p>
      <h2>Sobre os exemplos</h2>
      <p>
        Os criadores marcados como Exemplo são estúdios fictícios, criados para mostrar a galeria
        funcionando.
      </p>
    </div>
  );
}
