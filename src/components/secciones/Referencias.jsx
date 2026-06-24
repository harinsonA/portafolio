import Escena from '../cine/Escena';
import Reveal from '../cine/Reveal';
import { REFERENCIAS } from '../../store';

function Referencias() {
  return (
    <Escena tone="char" idx="07 — Referencias" num="07">
      <Reveal as="p" className="eyebrow">Avalan mi trabajo</Reveal>
      <Reveal as="h2" className="titulo" delay={0.1}>Referencias</Reveal>
      <div className="refs">
        {REFERENCIAS.map((r, i) => (
          <Reveal className="ref" key={r.key} delay={i * 0.06}>
            <strong>
              {r.linkedin
                ? <a href={r.linkedin} target="_blank" rel="noopener noreferrer">{r.nombre}</a>
                : r.nombre}
            </strong>
            <span>{r.rol} · {r.empresa}</span>
          </Reveal>
        ))}
      </div>
    </Escena>
  );
}

export default Referencias;
