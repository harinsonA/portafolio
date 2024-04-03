import '../styles/Curriculum.css'
import React from "react";
import ExperienciaLaboral from './ExperienciaLaboral';
import Educacion from './Educacion';

class Curriculum extends React.Component {
  render() {
    return (
      <section className="curriculum-container">
        <ExperienciaLaboral />
        <Educacion />
      </section>        
    );
  }
}

export default Curriculum;