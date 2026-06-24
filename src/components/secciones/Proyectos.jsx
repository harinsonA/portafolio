import Escena from '../cine/Escena';
import Reveal from '../cine/Reveal';
import { PROYECTOS } from '../../store';

function Proyectos() {
  return (
    <Escena tone="paper" idx="04 — Proyectos" num="04">
      <Reveal as="p" className="eyebrow">Trabajo propio</Reveal>
      <Reveal as="h2" className="titulo" delay={0.1}>Proyectos</Reveal>
      <div className="cards">
        {PROYECTOS.map((p, i) => (
          <Reveal as="a" className="card" key={p.key} delay={0.1 + i * 0.08}
            href={p.mainLink} target="_blank" rel="noopener noreferrer">
            <h4>{p.mainTitle}</h4>
            {p.description.list && <p>{p.description.list.join(' ')}</p>}
            {p.mainLink && <div className="arrow">Ver proyecto →</div>}
          </Reveal>
        ))}
      </div>
    </Escena>
  );
}

export default Proyectos;
