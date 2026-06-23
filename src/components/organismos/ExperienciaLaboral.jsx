import '../../styles/ExperienciaLaboral.css';
import { EXPERIENCIA_LABORAL } from '../../store';
import Card from '../moleculas/Card.jsx';


const ExperienciaLaboral = () => (
  <section className="experience-container">
    <h2>EXPERIENCIA PROFESIONAL</h2>
    {
      EXPERIENCIA_LABORAL.map(({ key, ...experiencia }) => <Card key={key} {...experiencia} />)
    }
  </section>
);

export default ExperienciaLaboral;
