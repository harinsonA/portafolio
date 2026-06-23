import '../styles/Aside.css';
import harinsonArellanFoto from '../images/Harinson.png';
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Habilidades from './Habilidades';
import Redes from './Redes';
import { PERFIL, RESUMEN } from '../store';


const Aside = () => (
  <section className="curriculum-aside">
    <section className='card'>
      <div className='header'>
        <div className='image'>
          <img src={harinsonArellanFoto} alt="Foto de Harinson" />
        </div>
        <div className='title'>
          <h1>{PERFIL.nombre}</h1>
          <p>{PERFIL.titulo}</p>
        </div>
      </div>
      <div className='body'>
        <div className='contact-info'>
          <ul>
            <li>
              <MdLocationOn  size='1.8rem' color='#0083B0' />
              <span>{PERFIL.ubicacion}</span>
            </li>
            <li>
              <MdOutlineEmail size='1.7rem' color='#C5221F' />
              <span>{PERFIL.email}</span>
            </li>
            <li>
              <FaPhoneAlt size='1.5rem' />
              <span>{PERFIL.telefono}</span>
            </li>
          </ul>
        </div>
        <Redes />
        <div className='resumen'>
          <p>{RESUMEN}</p>
        </div>
      </div>
    </section>
    <Habilidades />
  </section>
);

export default Aside;