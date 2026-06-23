import '../styles/Redes.css';
import { REDES } from '../store';


const Redes = () => (
  <section className="networks-container">
    <ul>
      {
        REDES.map(({ key, label, url, Icon, color }) => (
          <li key={key}>
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon size={'20px'} color={color} />
            </a>
          </li>
        ))
      }
    </ul>
  </section>
);

export default Redes;
