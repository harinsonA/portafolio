import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Provee scroll suave inercial (Lenis) y la "transición profunda" del efecto
 * telón: la escena saliente se hunde, atenúa y desenfoca hacia el fondo
 * mientras la siguiente sube por encima (sticky stacking).
 *
 * Respeta prefers-reduced-motion: sin smooth scroll ni transformaciones.
 */
function SmoothScroll({ children }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lenis;
    let rafId;

    if (!reduce) {
      lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    const scenes = Array.from(document.querySelectorAll('.escena'));
    const smoothstep = (x) => x * x * (3 - 2 * x);
    let frame = null;

    const update = () => {
      frame = null;
      const vh = window.innerHeight;
      scenes.forEach((scene, i) => {
        // Las escenas en flujo no se "hunden": scrollean normal y muestran todo.
        if (scene.classList.contains('escena--flow')) return;

        const rectTop = scene.getBoundingClientRect().top;

        // SALIDA: la siguiente la cubre; se hunde y se DESENFOCA.
        const next = scenes[i + 1];
        let cov = 0;
        if (next) {
          const top = next.getBoundingClientRect().top;
          cov = 1 - Math.min(Math.max(top / vh, 0), 1);
        }
        const e = smoothstep(cov);

        // El blur SOLO se aplica en la zona de transición visible (entrando por
        // abajo o saliendo mientras se cubre). Las escenas fuera de pantalla o
        // ya 100% cubiertas no llevan filtro: evita capas blureadas apiladas.
        let blur = 0;
        if (!reduce) {
          if (rectTop > 0 && rectTop < vh) {
            const enter = 1 - rectTop / vh;          // ENTRADA: enfoque
            blur = Math.max(blur, (1 - smoothstep(enter)) * 7);
          }
          if (e > 0 && e < 0.999) blur = Math.max(blur, e * 9); // SALIDA: desenfoque
        }
        const inner = scene.querySelector('.escena__inner');
        const veil = scene.querySelector('.escena__veil');
        scene.style.transform = reduce ? '' : `scale(${1 - 0.05 * e})`;
        if (inner) {
          inner.style.transform = reduce ? '' : `translateY(${-26 * e}px)`;
          inner.style.opacity = reduce ? '' : `${1 - 0.55 * e}`;
          inner.style.filter = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : '';
        }
        if (veil) veil.style.opacity = reduce ? '0' : `${0.6 * e}`;
      });
    };

    const onScroll = () => {
      if (frame == null) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      if (frame) cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return children;
}

export default SmoothScroll;
