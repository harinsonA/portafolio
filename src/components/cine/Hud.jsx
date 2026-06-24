import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

/** Cabecera fija + barra de progreso vertical con el índice de escena activo. */
function Hud() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const [label, setLabel] = useState('01 — Inicio');

  useEffect(() => {
    const scenes = Array.from(document.querySelectorAll('.escena'));
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      // Varias escenas sticky comparten top:0 al apilarse; la activa es la
      // última (la que queda visualmente encima), así que la última gana.
      let active = null;
      for (const s of scenes) {
        const r = s.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid && s.dataset.idx) active = s.dataset.idx;
      }
      if (active) setLabel(active);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className="hud">
        <span className="hud__name">H · A</span>
        <span className="hud__idx">{label}</span>
      </header>
      <div className="progress">
        <motion.div className="progress__bar" style={{ scaleY }} />
      </div>
    </>
  );
}

export default Hud;
