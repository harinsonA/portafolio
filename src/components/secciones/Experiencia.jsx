import Escena from '../cine/Escena';
import Reveal from '../cine/Reveal';
import { EXPERIENCIA_LABORAL } from '../../store';
import santiago from '../../images/santiago_v2.png';

function Experiencia() {
  return (
    <Escena tone="char" idx="03 — Experiencia" num="03" flow bgImage={santiago}>
      <Reveal as="p" className="eyebrow">Trayectoria</Reveal>
      <Reveal as="h2" className="titulo" delay={0.1}>Experiencia</Reveal>
      <div className="timeline">
        {EXPERIENCIA_LABORAL.map((exp, i) => (
          <Reveal className="item" key={exp.key} delay={i * 0.08}>
            <div className="item__time">{exp.time.replace(/,$/, '')}<br />{exp.location}</div>
            <div>
              <div className="item__org">
                {exp.mainLink
                  ? <a href={exp.mainLink} target="_blank" rel="noopener noreferrer">{exp.mainTitle}</a>
                  : exp.mainTitle}
              </div>
              <div className="item__role">{exp.secondTitle}</div>
              {exp.description.list && (
                <ul>
                  {exp.description.list.map((li, k) => <li key={k}>{li}</li>)}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Escena>
  );
}

export default Experiencia;
