import '../styles/Aside.css';
import harinsonArellanFoto from '../images/foto-harinson.png';
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Habilidades from './Habilidades';
import Redes from './Redes';


const Aside = () => (
  <section className="curriculum-aside">
    <section className='card'>
      <div className='header'>
        <div className='image'>
          <img src={harinsonArellanFoto} alt="Foto de Harinson" />
        </div>
        <div className='title'>
          <h1>Harinson José Arellan Itanare</h1>
          <p>Ingeniero de Sistemas / Desarrollador FullStack</p>
        </div>
      </div>
      <div className='body'>
        <div className='contact-info'>
          <ul>
            <li>
              <MdLocationOn  size='1.8rem' color='#0083B0' />
              <span>Santiago de Chile, Chile</span>
            </li>
            <li>
              <MdOutlineEmail size='1.7rem' color='#C5221F' />
              <span>harrinson.arellan@gmail.com</span>
            </li>
            <li>
              <FaPhoneAlt size='1.5rem' />
              <span>+56 9 4941 6912</span>
            </li>
          </ul>
        </div>
        <Redes />
        <div className='resumen'>
          <p>
            ¡Hola! Me llamo Harinson Arellan, soy Ingeniero de Sistemas con más de 4 años de experiencia desarrollando aplicaciones web como FullStack ocupando HTML, CSS, SASS, Bootstrap, Python, JavaScript, React, Django, REST APIs, SQL, entre otras. Poseo sólidos conocimientos en Responsive Web Design, habilidades destacadas en resolución de problemas, depuración y optimización de código. Siempre motivado a seguir creciendo y a expandir mis conocimientos.
          </p>
        </div>
      </div>
    </section>
    <Habilidades />
  </section>
);

export default Aside;