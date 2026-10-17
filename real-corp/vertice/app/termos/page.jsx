export const metadata = { title: 'Termos e privacidade' };

export default function Page() {
  return (
    <div className="container">
      <h1>Termos de uso e privacidade</h1>
      <p className="detalhe__data">Atualizado em 17 de outubro de 2026</p>
      <h2>Uso do site</h2>
      <p>
        O Vértice é um site estático para exibir experiências 3D. Use-o livremente, sem copiar o
        conteúdo como se fosse seu. Os projetos marcados como Exemplo são fictícios.
      </p>
      <h2>Privacidade</h2>
      <ul>
        <li>Não há conta, formulário, cookies nem ferramentas de análise (analytics).</li>
        <li>As fontes de texto são servidas pelo próprio site, sem pedir nada a terceiros.</li>
        <li>
          A hospedagem (Vercel) pode registrar dados técnicos de acesso, como IP e navegador, nos
          registros do servidor.
        </li>
        <li>Links externos abrem outros sites, que têm suas próprias políticas.</li>
      </ul>
      <h2>Contato</h2>
      <p>Contato a definir pelo dono do site.</p>
    </div>
  );
}
