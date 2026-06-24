import { useEffect, useState } from 'react';
import { useReducedMotion } from 'motion/react';

/**
 * Intro tipo "enfoque de cámara": la página entra desenfocada (lente abierto)
 * y se afina hasta quedar nítida, con un leve oscurecido que se aclara.
 * Usa backdrop-filter sobre un overlay para no aplicar filtros a los
 * ancestros de las secciones sticky (lo que rompería el apilado).
 * Se desmonta al terminar.
 */
function IntroFocus() {
  const reduce = useReducedMotion();
  const [focused, setFocused] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (reduce) { setGone(true); return; }
    const t1 = setTimeout(() => setFocused(true), 60);
    const t2 = setTimeout(() => setGone(true), 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [reduce]);

  if (gone) return null;
  return <div className={`intro-focus${focused ? ' intro-focus--in' : ''}`} aria-hidden="true" />;
}

export default IntroFocus;
