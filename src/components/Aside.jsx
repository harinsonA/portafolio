import '../styles/Aside.css';
import harinsonArellanFoto from '../images/foto-harinson.png'
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoLogoLinkedin } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";


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
              <IoLocationOutline  size='1.8rem' />
              <span>Santiago de Chile, Chile</span>
            </li>
            <li>
              <MdOutlineEmail size='1.7rem' />
              <span>harrinson.arellan@correo.com</span>
            </li>
            <li>
              <FaPhoneAlt size='1.5rem' />
              <span>+56 9 9999 9999</span>
            </li>
            <li>
              <IoLogoLinkedin size='1.7rem' />
              <span>harinsonarellanitanare</span>
            </li>
          </ul>
        </div>
        <div className='resumen'>
          <p>
            ¡Hola! Me llamo Harinson Arellan, soy Ingeniero de Sistemas con más de 3 años de experiencia desarrollando aplicaciones web como FullStack ocupando HTML, CSS, SASS, Bootstrap, Python, JavaScript, ReactJS, Django, REST APIs, SQL. Poseo sólidos conocimientos en Responsive Web Design, habilidades destacadas en resolución de problemas, depuración y optimización de código. Siempre motivado a seguir creciendo y a expandir mis conocimientos.
          </p>
        </div>
      </div>
    </section>
    <section className='card'>
      <h2>Habilidades</h2>
    </section>
  </section>
);

export default Aside;