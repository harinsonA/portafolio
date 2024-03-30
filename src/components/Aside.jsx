import '../styles/Aside.css';
import harinsonArellanFoto from '../images/foto_harinson.png'


const Aside = () => (
  <section className="curriculum-aside">
    <section className='card'>
      <div className='header'>
        <div className='image'>
          <img width="200" src={harinsonArellanFoto} alt="Foto de Harinson" />
        </div>
        <div className='title'>
          <h1>Harinson José Arellan Itanare</h1>
          <p>Ingeniero de Sistemas / Desarrollador FullStack</p>
        </div>
      </div>
      <div className='body'>
        <div className='contact-info'>
          <ul>
            <li>Santiago de Chile, Chile</li>
            <li>harrinson.arellan@correo.com</li>
            <li>+56 9 9999 9999</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className='resumen'>
          <p>
            ¡Hola! Me llamo Harinson Arellan, soy Ingeniero de Sistemas con más de 3 años de experiencia desarrollando aplicaciones web como Full Stack ocupando HTML, CSS, SASS, Bootstrap, Python, JavaScript, ReactJS, Django, REST APIs, SQL. Poseo sólidos conocimientos en Responsive Web Design, habilidades destacadas en resolución de problemas, depuración y optimización de código. Siempre motivado a seguir creciendo y a expandir mis conocimientos.
          </p>
        </div>
      </div>
    </section>
  </section>
);

export default Aside;