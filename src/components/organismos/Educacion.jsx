import '../../styles/Educacion.css';
import { EDUCACION } from '../../store/static_data';
import Card from '../moleculas/Card.jsx';


const Educacion = () => (
  <section className="education-container">
    <h2>EDUCACIÓN</h2>
    {
      EDUCACION.map(educacion => <Card key={educacion.key} {...educacion} />)
    }
  </section>
);

export default Educacion;