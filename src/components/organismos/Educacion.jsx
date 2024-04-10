import '../../styles/Educacion.css';
import { EDUCACION } from '../../storage/static_data';
import Card from '../moleculas/Card.jsx';


const Educacion = () => (
  <section className="education-container">
    <h2>EDUCACIÓN</h2>
    {
      EDUCACION.map(educacion => <Card {...educacion} />)
    }
  </section>
);

export default Educacion;