import '../styles/Curriculum.css';
import ExperienciaLaboral from './organismos/ExperienciaLaboral';
import Educacion from './organismos/Educacion';
import Certificates from './Certificates';

const Curriculum = () => (
  <section className="curriculum-container">
    <Educacion />
    <ExperienciaLaboral />
    <Certificates />
  </section>
);

export default Curriculum;
