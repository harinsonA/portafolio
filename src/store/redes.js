import { SiInstagram } from 'react-icons/si';
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';

const REDES = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/harinsonarellanitanare/',
    Icon: FaLinkedin,
    color: '#004182',
  },
  {
    key: 'github',
    label: 'GitHub',
    url: 'https://github.com/harinsonA',
    Icon: FaGithub,
    color: '#333',
  },
  {
    key: 'twitter',
    label: 'X',
    url: 'https://twitter.com/ArellanItanare',
    Icon: FaXTwitter,
    color: '#000',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/harinson_arellan/',
    Icon: SiInstagram,
    color: '#fd1d1d',
  },
];

export { REDES };
