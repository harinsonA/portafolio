import '../../styles/Proyectos.css';
import { PROYECTOS } from '../../store';
import Card from '../moleculas/Card.jsx';


const Proyectos = () => (
  <section className="projects-container">
    <h2>PROYECTOS</h2>
    {
      PROYECTOS.map(({ key, ...proyecto }) => <Card key={key} {...proyecto} />)
    }
  </section>
);

export default Proyectos;
