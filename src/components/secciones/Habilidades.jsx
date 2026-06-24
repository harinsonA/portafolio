import Escena from '../cine/Escena';
import Reveal from '../cine/Reveal';
import { HABILIDADES } from '../../store';

function Habilidades() {
  // Duplicamos la lista para un marquee continuo sin saltos.
  const loop = [...HABILIDADES, ...HABILIDADES];

  return (
    <Escena tone="black" idx="05 — Habilidades" num="05">
      <Reveal as="p" className="eyebrow">Stack</Reveal>
      <Reveal as="h2" className="titulo" delay={0.1}>Habilidades</Reveal>
      <Reveal className="marquee" delay={0.2}>
        <div className="marquee__track">
          {loop.map(({ key, label, Icon }, i) => (
            <span className="marquee__item" key={`${key}-${i}`}>
              {Icon && <Icon />}{label}
            </span>
          ))}
        </div>
      </Reveal>
    </Escena>
  );
}

export default Habilidades;
