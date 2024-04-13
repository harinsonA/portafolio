import '../styles/Habilidades.css';
import { FaSass, FaBootstrap, FaPython, FaGithub, FaBitbucket, FaNode } from "react-icons/fa";
import {
  SiJavascript, SiReact, SiDjango, SiMysql, SiPostman,
  SiDocker, SiHtml5, SiCss3, SiPug, SiVisualstudio, SiJirasoftware,
  SiTypescript, SiLinux, SiNextdotjs, SiRedux
} from "react-icons/si";

const Habilidades = () => (
  <section className="card skills-container">
    <ul>
      <li><SiHtml5 size={'50px'} color='#e34f26' /></li>
      <li><SiCss3 size={'50px'} color='#2D53E5' /></li>
      <li><FaSass size={'50px'} color='#CF649A' /></li>
      <li><FaBootstrap size={'50px'} color='#7952B3' /></li>
      <li><FaBitbucket size={'50px'} color='#2684FF' /></li>
      <li><FaPython size={'50px'} color='#4584b6' /></li>
      <li><SiJavascript size={'50px'} color='#EFD81D' /></li>
      <li className='animacion-rotar'><SiReact size={'50px'} color='#149ECA' /></li>
      <li><SiDjango size={'50px'} color='#092e20' /></li>
      <li><SiMysql size={'50px'} color='#00758f' /></li>
      <li><SiPostman size={'50px'} color='#ef5b25' /></li>
      <li><FaGithub size={'50px'} color='#333' /></li>
      <li><SiJirasoftware size={'50px'} color='#1D7AFC' /></li>
      <li><SiRedux size={'50px'} color='#764ABC' /></li>
      <li><SiDocker size={'50px'} color='#0db7ed' /></li>
      <li><SiTypescript size={'50px'} color='#3178C6' /></li>
      <li><SiPug size={'50px'} color='#A86454' /></li>
      <li><FaNode size={'50px'} color='#215732' /></li>
      <li><SiNextdotjs size={'50px'} color='#000000' /></li>
      <li><SiVisualstudio size={'50px'} color='#21A5F0' /></li>
      <li><SiLinux size={'50px'} color='#000000' /></li>
    </ul>
  </section>
);

export default Habilidades