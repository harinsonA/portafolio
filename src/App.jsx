import SmoothScroll from './components/cine/SmoothScroll';
import IntroFocus from './components/cine/IntroFocus';
import Hud from './components/cine/Hud';
import Hero from './components/secciones/Hero';
import Perfil from './components/secciones/Perfil';
import Experiencia from './components/secciones/Experiencia';
import Proyectos from './components/secciones/Proyectos';
import Habilidades from './components/secciones/Habilidades';
import Formacion from './components/secciones/Formacion';
import Referencias from './components/secciones/Referencias';
import Contacto from './components/secciones/Contacto';

function App() {
  return (
    <SmoothScroll>
      <div className="grain" aria-hidden="true" />
      <IntroFocus />
      <Hud />
      <main>
        <Hero />
        <Perfil />
        <Experiencia />
        <Proyectos />
        <Habilidades />
        <Formacion />
        <Referencias />
        <Contacto />
      </main>
    </SmoothScroll>
  );
}

export default App;
