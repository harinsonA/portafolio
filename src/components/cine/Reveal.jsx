import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1];

/**
 * Revela su contenido al entrar en viewport (fade + slide-up), una sola vez.
 * `as` permite elegir la etiqueta (h1, p, div, a, li...). `delay` escalona.
 */
function Reveal({ as = 'div', delay = 0, y = 28, className, children, ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
