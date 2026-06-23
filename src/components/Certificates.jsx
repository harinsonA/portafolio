import '../styles/Certificates.css';
import { FaLink } from 'react-icons/fa';
import { CERTIFICADOS } from '../store';

function Certificates() {
  return (
    <section className="certificates-container">
      <h2>CERTIFICADOS</h2>
      <div className="card">
        <ul>
          {
            CERTIFICADOS.map(({ label, url }) => (
              <li key={label}>
                {
                  url
                    ? (
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {label}
                        <FaLink className="ml-1" size=".7em" color="#66cc99" />
                      </a>
                    )
                    : label
                }
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default Certificates;
