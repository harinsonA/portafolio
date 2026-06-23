import '../styles/Curriculum.css';
import ExperienciaLaboral from './organismos/ExperienciaLaboral';
import Proyectos from './organismos/Proyectos';
import Educacion from './organismos/Educacion';
import Referencias from './organismos/Referencias';
import Certificates from './Certificates';

const Curriculum = () => (
  <section className="curriculum-container">
    <Educacion />
    <ExperienciaLaboral />
    <Proyectos />
    <Certificates />
    <Referencias />
  </section>
);

export default Curriculum;
