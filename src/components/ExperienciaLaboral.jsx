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
              <span>Junio 2021 - Presente</span>
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
        <section className='card'>
          <section className='company'>
            <div className='company-name'>
              <span>Manager Software S.A.</span>
            </div>
            <div className='time'>
              <span>Abril 2021 - Junio 2021</span>
            </div>
          </section>
          <section className='range'>
            <div className='title'>
              Desarrollador FullStack
            </div>
            <div className='description'>
              <ul>
                <li>Realizar corrección de errores y mejoras de código existente.</li>
                <li>Implementar pequeñas funcionalidades en el frontend para agregar nuevas características y mejorar la experiencia del usuario.</li>
                <li>Trabajar en estrecha colaboración con el equipo de diseño</li>
                <li>Crear y ejecutar pruebas unitarias y de integración.</li>
                <li>Adaptar pantallas y diseños existentes a pantallas responsive.</li>
                <li>Metodología ágil Scrum.</li>
              </ul>
            </div>
          </section>
        </section>
        <section className='card'>
          <section className='company'>
            <div className='company-name'>
              <span>Patagonia-IT S.A.</span>
            </div>
            <div className='time'>
              <span>Agosto 2020 - Marzo 2021</span>
            </div>
          </section>
          <section className='range'>
            <div className='title'>
              Desarrollador FullStack Junior
            </div>
            <div className='description'>
              <ul>
                <li>Realizar pruebas automatizadas utilizando Puppeteer + Cucumber.</li>
                <li>Participar en proyectos de desarrollo de software de forma colaborativa.</li>
                <li>Adaptar pantallas y diseños existentes a pantallas responsive.</li>
                <li>Participar en capacitaciones en varios servicios de AWS como DynamoDB, EC2, Lambda, API Gateway, SQS y CloudFormation</li>
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