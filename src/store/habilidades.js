import { FaPython, FaSass, FaGithub } from 'react-icons/fa';
import {
  SiDjango, SiPostgresql, SiRedis, SiCelery, SiDocker, SiPostman,
  SiGit, SiJirasoftware, SiJavascript, SiTypescript, SiReact,
  SiHtml5, SiCss, SiLinux,
} from 'react-icons/si';

const HABILIDADES = [
  { key: 'python', label: 'Python', Icon: FaPython, color: '#4584b6' },
  { key: 'django', label: 'Django', Icon: SiDjango, color: '#092e20' },
  { key: 'postgresql', label: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  { key: 'redis', label: 'Redis', Icon: SiRedis, color: '#DC382D' },
  { key: 'celery', label: 'Celery', Icon: SiCelery, color: '#37814A' },
  { key: 'docker', label: 'Docker', Icon: SiDocker, color: '#0db7ed' },
  { key: 'postman', label: 'Postman', Icon: SiPostman, color: '#ef5b25' },
  { key: 'git', label: 'Git', Icon: SiGit, color: '#F05032' },
  { key: 'github', label: 'GitHub', Icon: FaGithub, color: '#333' },
  { key: 'jira', label: 'Jira', Icon: SiJirasoftware, color: '#1D7AFC' },
  { key: 'javascript', label: 'JavaScript', Icon: SiJavascript, color: '#EFD81D' },
  { key: 'typescript', label: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { key: 'react', label: 'React', Icon: SiReact, color: '#149ECA', className: 'animacion-rotar' },
  { key: 'sass', label: 'Sass', Icon: FaSass, color: '#CF649A' },
  { key: 'html5', label: 'HTML5', Icon: SiHtml5, color: '#e34f26' },
  { key: 'css', label: 'CSS3', Icon: SiCss, color: '#2D53E5' },
  { key: 'linux', label: 'Linux', Icon: SiLinux, color: '#000000' },
];

export { HABILIDADES };
