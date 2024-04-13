import '../styles/Curriculum.css';
import React from "react";
import ExperienciaLaboral from './organismos/ExperienciaLaboral';
import Educacion from './organismos/Educacion';
import Certificates from './Certificates';

class Curriculum extends React.Component {
  render() {
    return (
      <section className="curriculum-container">
        <Educacion />
        <ExperienciaLaboral />
        <Certificates />
      </section>        
    );
  }
}

export default Curriculum;