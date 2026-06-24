import Escena from '../cine/Escena';
import Reveal from '../cine/Reveal';
import { RESUMEN } from '../../store';

function Perfil() {
  return (
    <Escena tone="ink" idx="02 — Perfil" num="02">
      <Reveal as="p" className="eyebrow">Perfil</Reveal>
      <Reveal as="h2" className="titulo" delay={0.1}>
        Soluciones simples a<br />problemas complejos.
      </Reveal>
      <Reveal as="p" className="lead" delay={0.2}>{RESUMEN}</Reveal>
    </Escena>
  );
}

export default Perfil;
