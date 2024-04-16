import '../../styles/ExperienciaLaboral.css';
import { EXPERIENCIA_LABORAL } from '../../store/static_data.js';
import React from "react";
import Card from '../moleculas/Card.jsx';


class ExperienciaLaboral extends React.Component {
  render() {
    return (
      <section className="experience-container">
        <h2>EXPERIENCIA PROFESIONAL</h2>
        {
          EXPERIENCIA_LABORAL.map(experiencia => <Card {...experiencia} />)
        }
      </section>
    )
  }
}

export default ExperienciaLaboral;