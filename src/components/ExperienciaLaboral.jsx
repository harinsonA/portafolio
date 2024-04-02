import '../styles/ExperienciaLaboral.css'
import React from "react";


class ExperienciaLaboral extends React.Component {
  render() {
    return (
      <section className="experience-container">
        <h2>EXPERIENCIA PROFESIONAL</h2>
        <section className='card'>
          <section className='company'>
            <div className='company-name'>
              <span>Rexmas S.A.</span>
            </div>
            <div className='time'>
              <span>Junio 2024 - Presente</span>
            </div>
          </section>
          <section className='range'>
            <div className='title'>
              Desarrollador BackEnd Junior
            </div>
            <div className='description'>
              <ul>
                <li>Implementar nuevas vistas y funcionalidades.</li>
                <li>Realizar corrección de errores y solucionar problemas técnicos.</li>
                <li>Refactorizar y optimizar el código existente para mejorar su rendimiento y mantenibilidad.</li>
                <li>Desarrollar y documentar APIs para aplicaciones externas.</li>
                <li>Crear y ejecutar pruebas unitarias y de integración.</li>
                <li>Adaptar pantallas y diseños existentes a pantallas responsive.</li>
                <li>Metodología ágil Scrum.</li>
              </ul>
            </div>
          </section>
        </section>
      </section>
    )
  }
}

export default ExperienciaLaboral;