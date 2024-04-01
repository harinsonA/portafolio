import '../styles/Curriculum.css'
import React from "react";
import ExperienciaLaboral from './ExperienciaLaboral';

class Curriculum extends React.Component {
  render() {
    return (
      <section className="curriculum-container">
        <ExperienciaLaboral />
      </section>        
    );
  }
}

export default Curriculum;