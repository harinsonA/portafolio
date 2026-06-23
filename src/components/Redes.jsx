import '../styles/Redes.css';
import { SiInstagram } from "react-icons/si";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";


const Redes = () => (
  <section className="networks-container">
    <ul>
      <li>
        <a href="https://www.instagram.com/harinson_arellan/" target="_blank" rel="noopener noreferrer">
          <SiInstagram size={'20px'} color='#fd1d1d' />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/ArellanItanare" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={'20px'} color='#000' />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/harinsonarellanitanare/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={'20px'} color='#004182' />
        </a>
      </li>
    </ul>
  </section>
)

export default Redes;