import Escena from '../cine/Escena';
import Reveal from '../cine/Reveal';
import { PERFIL, REDES } from '../../store';

function Contacto() {
  return (
    <Escena tone="paper" idx="08 — Contacto" num="08" className="contacto">
      <Reveal as="p" className="eyebrow">Hablemos</Reveal>
      <Reveal as="h2" className="titulo" delay={0.1}>
        Construyamos<br />algo sólido.
      </Reveal>
      <Reveal as="a" className="mail" delay={0.2} href={`mailto:${PERFIL.email}`}>
        {PERFIL.email}
      </Reveal>
      <Reveal className="socials" delay={0.3}>
        {REDES.map((red) => (
          <a key={red.key} href={red.url} target="_blank" rel="noopener noreferrer">
            {red.label}
          </a>
        ))}
      </Reveal>
    </Escena>
  );
}

export default Contacto;
