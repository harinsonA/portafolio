import Escena from '../cine/Escena';
import Reveal from '../cine/Reveal';
import { PERFIL } from '../../store';
import foto from '../../images/Harinson_v2.png';

// "Harinson José Arellan Itanare" -> nombre / apellido (dos líneas del hero)
const palabras = PERFIL.nombre.split(' ');
const primerNombre = palabras[0];
const apellido = palabras[2] || palabras[1] || '';

function Hero() {
  return (
    <Escena id="inicio" tone="black" idx="01 — Inicio">
      <div className="hero">
        <div>
          <Reveal as="h1" className="hero__name">
            {primerNombre}<br />{apellido}
          </Reveal>
          <Reveal className="hero__role" delay={0.1}>{PERFIL.titulo}</Reveal>
          <Reveal className="hero__meta" delay={0.2}>
            <span>{PERFIL.ubicacion}</span>
            <span>5+ años</span>
            <span>SaaS · Nómina</span>
          </Reveal>
        </div>
        <Reveal className="hero__photo" delay={0.1}>
          <img src={foto} alt={PERFIL.nombre} />
        </Reveal>
      </div>
    </Escena>
  );
}

export default Hero;
