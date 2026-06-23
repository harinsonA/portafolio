import '../../styles/Referencias.css';
import { FaLinkedin } from 'react-icons/fa6';
import { REFERENCIAS } from '../../store';


const Referencias = () => (
  <section className="references-container">
    <h2>REFERENCIAS</h2>
    <div className="card">
      <ul>
        {
          REFERENCIAS.map(({ key, nombre, rol, empresa, linkedin }) => (
            <li key={key}>
              <div className="reference-name-row">
                <span className="reference-name">{nombre}</span>
                {
                  linkedin
                    ? (
                      <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${nombre}`}>
                        <FaLinkedin size={'1.4rem'} color="#FFF" />
                      </a>
                    )
                    : null
                }
              </div>
              <span className="reference-role">{rol} · {empresa}</span>
            </li>
          ))
        }
      </ul>
    </div>
  </section>
);

export default Referencias;
