/**
 * Sección sticky del efecto telón. Se apila sobre la anterior al hacer scroll.
 * La lógica de profundidad (scale/blur/veil) la aplica SmoothScroll leyendo
 * las clases .escena / .escena__inner / .escena__veil.
 *
 * @param tone  black | ink | char | paper  (escala de grises)
 * @param idx   etiqueta para el HUD, ej. "03 — Experiencia"
 * @param num   número grande de fondo, ej. "03"
 * @param flow     true = sección en flujo normal (sin pin ni recorte) para
 *                 contenido denso que excede una pantalla. Default: false.
 * @param bgImage  URL de imagen de fondo desenfocada (opcional).
 */
function Escena({ id, tone = 'black', idx, num, flow = false, bgImage, className = '', children }) {
  return (
    <section
      className={`escena t-${tone} ${flow ? 'escena--flow' : ''} ${className}`}
      id={id}
      data-idx={idx}
    >
      {bgImage && <div className="escena__bg" style={{ backgroundImage: `url(${bgImage})` }} />}
      <span className="escena__rod" />
      {num && <span className="escena__num">{num}</span>}
      <div className="escena__inner">{children}</div>
      <span className="escena__veil" />
    </section>
  );
}

export default Escena;
