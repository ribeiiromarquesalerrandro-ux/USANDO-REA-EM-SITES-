'use client';

import { useEffect, useRef, useState } from 'react';

const TIPOS = ['predio', 'particulas', 'cidade', 'planeta', 'cristais', 'no', 'orbita'];
const AVISO = 'Seu navegador não mostrou o 3D. O resto da página funciona normalmente.';

// Gerador pseudoaleatório com semente, para a cena ser sempre a mesma.
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// THREE.Color não entende var(--x); resolve pelo CSS do documento.
function resolverCor(valor, token) {
  const estilo = getComputedStyle(document.documentElement);
  const v = typeof valor === 'string' ? valor.trim() : '';
  const m = v.match(/^var\((--[\w-]+)\)$/);
  if (m) return estilo.getPropertyValue(m[1]).trim() || '#808080';
  return v || estilo.getPropertyValue(token).trim() || '#808080';
}

function construirCena(THREE, tipo, c1, c2, seed) {
  const r = rng(seed);
  const grupo = new THREE.Group();
  const a = new THREE.Color(c1);
  const b = new THREE.Color(c2);
  const cor = (t) => a.clone().lerp(b, t);
  const lambert = (c, flat) => new THREE.MeshLambertMaterial({ color: c, flatShading: !!flat });

  if (tipo === 'predio') {
    for (let i = 0; i < 8; i++) {
      const w = 3 - i * 0.22;
      const malha = new THREE.Mesh(new THREE.BoxGeometry(w, 0.62, w), lambert(cor(i / 7)));
      malha.position.y = -2 + i * 0.66;
      grupo.add(malha);
    }
    const topo = new THREE.Mesh(new THREE.ConeGeometry(0.25, 0.7, 4), lambert(b));
    topo.position.y = -2 + 8 * 0.66 + 0.1;
    grupo.add(topo);
  } else if (tipo === 'particulas') {
    const N = 48;
    const pos = new Float32Array(N * N * 3);
    const col = new Float32Array(N * N * 3);
    let k = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const x = (i / (N - 1) - 0.5) * 6;
        const z = (j / (N - 1) - 0.5) * 6;
        pos[k * 3] = x;
        pos[k * 3 + 1] = Math.sin(x * 1.6) * 0.5 + Math.cos(z * 1.3) * 0.5;
        pos[k * 3 + 2] = z;
        const cc = cor(i / (N - 1));
        col[k * 3] = cc.r;
        col[k * 3 + 1] = cc.g;
        col[k * 3 + 2] = cc.b;
        k++;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    grupo.add(new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.06, vertexColors: true })));
  } else if (tipo === 'cidade') {
    for (let i = -2; i <= 2; i++) {
      for (let j = -2; j <= 2; j++) {
        const hh = 0.4 + r() * 2.4;
        const malha = new THREE.Mesh(new THREE.BoxGeometry(0.8, hh, 0.8), lambert(cor(r())));
        malha.position.set(i * 1.1, hh / 2 - 1.2, j * 1.1);
        grupo.add(malha);
      }
    }
  } else if (tipo === 'planeta') {
    grupo.add(new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 14), lambert(a, true)));
    const anel = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.1, 6, 48), lambert(b));
    anel.rotation.x = Math.PI / 2.4;
    anel.scale.z = 0.4;
    grupo.add(anel);
    const lua = new THREE.Mesh(new THREE.SphereGeometry(0.34, 12, 8), lambert(b, true));
    lua.position.set(2.5, 1.1, 0.4);
    grupo.add(lua);
  } else if (tipo === 'cristais') {
    for (let i = 0; i < 9; i++) {
      const g = i % 2 ? new THREE.OctahedronGeometry(0.5 + r() * 0.5) : new THREE.IcosahedronGeometry(0.4 + r() * 0.4);
      const malha = new THREE.Mesh(g, lambert(cor(r()), true));
      malha.position.set((r() - 0.5) * 4, (r() - 0.5) * 3, (r() - 0.5) * 4);
      malha.rotation.set(r() * 3, r() * 3, 0);
      grupo.add(malha);
    }
  } else if (tipo === 'orbita') {
    const anel = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.04, 6, 80), new THREE.MeshBasicMaterial({ color: a }));
    anel.rotation.x = Math.PI / 2;
    grupo.add(anel);
    const geos = [new THREE.TetrahedronGeometry(0.55), new THREE.OctahedronGeometry(0.5), new THREE.IcosahedronGeometry(0.48)];
    geos.forEach((g, i) => {
      const s = new THREE.Mesh(g, lambert(a.clone().offsetHSL(i * 0.05, 0, i * 0.06 - 0.04), true));
      const ang = (i * Math.PI * 2) / 3;
      s.position.set(Math.cos(ang) * 2.1, 0, Math.sin(ang) * 2.1);
      s.userData.gira = true;
      grupo.add(s);
    });
  } else {
    grupo.add(new THREE.Mesh(new THREE.TorusKnotGeometry(1.3, 0.42, 110, 14), lambert(cor(0.3), true)));
  }
  return grupo;
}

// tipo: predio | particulas | cidade | planeta | cristais | no | orbita
// cores: [c1, c2] do projeto; "orbita" usa os tokens --acento e --acento2.
export default function Cena3D({ tipo, cores = [], interativa = false, altura = 320 }) {
  const contRef = useRef(null);
  const [estado, setEstado] = useState('carregando');
  const [c1 = 'var(--acento)', c2 = 'var(--acento2)'] = cores;

  useEffect(() => {
    const cont = contRef.current;
    if (!cont) return undefined;
    const tipoOk = TIPOS.includes(tipo) ? tipo : 'no';
    let cancelado = false;
    let limpar = () => {};

    (async () => {
      try {
        const THREE = await import('three');
        const OrbitControls = interativa ? (await import('three/examples/jsm/controls/OrbitControls.js')).OrbitControls : null;
        if (cancelado) return;

        const canvas = document.createElement('canvas');
        canvas.style.cssText = 'display:block;width:100%;height:100%';
        const rend = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        rend.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        cont.appendChild(canvas);

        const cena = new THREE.Scene();
        const cam = new THREE.PerspectiveCamera(tipoOk === 'orbita' ? 40 : 45, 1, 0.1, 100);
        if (tipoOk === 'orbita') cam.position.set(0, 2.6, 6.2);
        else cam.position.set(0, 1.8, 7);
        cam.lookAt(0, 0, 0);
        cena.add(new THREE.AmbientLight(0xffffff, 0.65));
        const luz = new THREE.DirectionalLight(0xffffff, 0.85);
        luz.position.set(3, 5, 4);
        cena.add(luz);

        const seed = [...tipoOk].reduce((s, ch) => s * 31 + ch.charCodeAt(0), 7);
        const grupo = construirCena(THREE, tipoOk, resolverCor(c1, '--acento'), resolverCor(c2, '--acento2'), seed);
        cena.add(grupo);

        const desenhar = () => rend.render(cena, cam);

        let controls = null;
        if (OrbitControls) {
          controls = new OrbitControls(cam, canvas);
          controls.enablePan = false;
          controls.minDistance = 4;
          controls.maxDistance = 12;
          controls.addEventListener('change', desenhar);
        }

        const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)');
        let visivel = !('IntersectionObserver' in window);
        let raf = null;
        const pode = () => visivel && !document.hidden && !reduzir.matches;
        const laco = () => {
          raf = null;
          if (!pode()) return;
          grupo.rotation.y += 0.006;
          grupo.children.forEach((s) => {
            if (s.userData.gira) {
              s.rotation.x += 0.012;
              s.rotation.y += 0.016;
            }
          });
          desenhar();
          raf = requestAnimationFrame(laco);
        };
        const talvez = () => {
          if (raf === null && pode()) raf = requestAnimationFrame(laco);
        };

        const ajustar = () => {
          const w = cont.clientWidth;
          const h = cont.clientHeight;
          if (!w || !h) return;
          rend.setSize(w, h, false);
          cam.aspect = w / h;
          cam.updateProjectionMatrix();
          desenhar();
        };
        const ro = new ResizeObserver(ajustar);
        ro.observe(cont);

        let io = null;
        if (!visivel) {
          io = new IntersectionObserver((es) => {
            visivel = es[0].isIntersecting;
            talvez();
          });
          io.observe(cont);
        }
        const aoMudar = () => {
          ajustar();
          talvez();
        };
        document.addEventListener('visibilitychange', talvez);
        reduzir.addEventListener('change', aoMudar);

        ajustar();
        talvez();
        setEstado('pronto');

        limpar = () => {
          if (raf !== null) cancelAnimationFrame(raf);
          ro.disconnect();
          if (io) io.disconnect();
          document.removeEventListener('visibilitychange', talvez);
          reduzir.removeEventListener('change', aoMudar);
          if (controls) {
            controls.removeEventListener('change', desenhar);
            controls.dispose();
          }
          cena.traverse((o) => {
            if (o.geometry) o.geometry.dispose();
            if (o.material) o.material.dispose();
          });
          rend.dispose();
          canvas.remove();
        };
        if (cancelado) limpar();
      } catch {
        if (!cancelado) setEstado('sem-webgl');
      }
    })();

    return () => {
      cancelado = true;
      limpar();
    };
  }, [tipo, interativa, c1, c2]);

  return (
    <div
      ref={contRef}
      data-estado={estado}
      style={{
        position: 'relative',
        width: '100%',
        height: altura,
        borderRadius: 'inherit',
        overflow: 'hidden',
        background: estado === 'sem-webgl' ? `linear-gradient(135deg, ${c1}, ${c2})` : undefined,
      }}
    >
      {estado === 'sem-webgl' && (
        <p
          role="status"
          style={{
            position: 'absolute',
            inset: 0,
            margin: 0,
            padding: '1rem',
            display: 'grid',
            placeItems: 'center',
            textAlign: 'center',
            color: '#fff',
            textShadow: '0 1px 3px rgba(0,0,0,.6)',
          }}
        >
          {AVISO}
        </p>
      )}
    </div>
  );
}
