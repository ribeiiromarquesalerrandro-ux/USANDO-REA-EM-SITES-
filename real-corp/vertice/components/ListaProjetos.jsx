'use client';

import { useMemo, useState } from 'react';
import CartaoProjeto from './CartaoProjeto';
import projetos from '@/data/projetos.json';
import criadores from '@/data/criadores.json';

const nomes = Object.fromEntries(criadores.map((c) => [c.slug, c.nome]));
const normalizar = (s) =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();

const itens = projetos.map((p) => {
  const criador = nomes[p.criador] || p.criador;
  return {
    cartao: {
      slug: p.slug,
      titulo: p.titulo,
      criador,
      etiquetas: [p.categoria, ...p.tecnologias],
      cores: p.cores,
      exemplo: p.exemplo,
    },
    categoria: p.categoria,
    tecnologias: p.tecnologias,
    texto: normalizar([p.titulo, criador, p.descricao, ...p.tecnologias].join(' ')),
  };
});
const categorias = [...new Set(projetos.map((p) => p.categoria))];
const tecnologias = [...new Set(projetos.flatMap((p) => p.tecnologias))];

export default function ListaProjetos() {
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [techs, setTechs] = useState([]);

  const termo = normalizar(busca);
  const visiveis = useMemo(
    () =>
      itens.filter(
        (i) =>
          (!termo || i.texto.includes(termo)) &&
          (!categoria || i.categoria === categoria) &&
          techs.every((t) => i.tecnologias.includes(t))
      ),
    [termo, categoria, techs]
  );

  const alternarTech = (t) => setTechs((atual) => (atual.includes(t) ? atual.filter((x) => x !== t) : [...atual, t]));
  const limpar = () => {
    setBusca('');
    setCategoria('');
    setTechs([]);
  };

  return (
    <div>
      <label htmlFor="busca" className="filtros__rotulo">
        Buscar
      </label>
      <input
        id="busca"
        type="search"
        className="filtros__busca"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Título, criador ou tecnologia"
        autoComplete="off"
      />

      <div className="filtros__linha" role="group" aria-label="Categoria">
        <button type="button" className="chip" aria-pressed={categoria === ''} onClick={() => setCategoria('')}>
          Todos
        </button>
        {categorias.map((c) => (
          <button key={c} type="button" className="chip" aria-pressed={categoria === c} onClick={() => setCategoria(c)}>
            {c}
          </button>
        ))}
      </div>

      <div className="filtros__linha" role="group" aria-label="Tecnologia">
        {tecnologias.map((t) => (
          <button key={t} type="button" className="chip" aria-pressed={techs.includes(t)} onClick={() => alternarTech(t)}>
            {t}
          </button>
        ))}
      </div>

      <p className="contador" aria-live="polite">
        {visiveis.length} {visiveis.length === 1 ? 'projeto' : 'projetos'}
      </p>

      {visiveis.length === 0 ? (
        <div className="vazio">
          <p>Nenhum projeto encontrado com esses filtros.</p>
          <button type="button" className="botao botao--primario" onClick={limpar}>
            Limpar filtros
          </button>
        </div>
      ) : (
        <div className="grade">
          {visiveis.map((i) => (
            <CartaoProjeto key={i.cartao.slug} projeto={i.cartao} />
          ))}
        </div>
      )}
    </div>
  );
}
