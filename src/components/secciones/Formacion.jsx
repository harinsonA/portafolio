import Escena from '../cine/Escena';
import Reveal from '../cine/Reveal';
import { EDUCACION, CERTIFICADOS } from '../../store';

function Formacion() {
  return (
    <Escena tone="ink" idx="06 — Formación" num="06" flow>
      <Reveal as="p" className="eyebrow">Formación</Reveal>
      <Reveal as="h2" className="titulo" delay={0.1}>Educación &amp; Certificados</Reveal>

      <div className="timeline">
        {EDUCACION.map((ed, i) => (
          <Reveal className="item" key={ed.key} delay={i * 0.08}>
            <div className="item__time">{ed.time}<br />{ed.location}</div>
            <div>
              <div className="item__org">{ed.mainTitle}</div>
              <div className="item__role">
                {ed.secondLink
                  ? <a href={ed.secondLink} target="_blank" rel="noopener noreferrer">{ed.secondTitle}</a>
                  : ed.secondTitle}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="cards" style={{ marginTop: '2.5rem' }}>
        {CERTIFICADOS.map((c, i) => (
          <Reveal as="a" className="card card--cert" key={c.label} delay={i * 0.06}
            href={c.url} target="_blank" rel="noopener noreferrer">
            {c.label}
          </Reveal>
        ))}
      </div>
    </Escena>
  );
}

export default Formacion;
