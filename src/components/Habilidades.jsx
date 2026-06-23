import '../styles/Habilidades.css';
import { HABILIDADES } from '../store';

const Habilidades = () => (
  <section className="card skills-container">
    <ul>
      {
        HABILIDADES.map(({ key, label, Icon, color, className }) => (
          <li key={key} className={className} title={label}>
            <Icon size={'50px'} color={color} />
          </li>
        ))
      }
    </ul>
  </section>
);

export default Habilidades;
