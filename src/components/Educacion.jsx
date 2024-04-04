import '../styles/Educacion.css'


const Educacion = () => (
  <section className="education-container">
    <h2>EDUCACIÓN</h2>
    <section className='card'>
      <section className='certificate'>
        <div className='title'>
          <span>FullStack</span>
        </div>
        <div className='time'>
          <span>2020 Santiago de Chile, Chile</span>
        </div>
      </section>
      <section className='academy'>
        <div className='academy-name'>
          4GeeksAcademy
        </div>
        <div className='info'>
          <ul>
            <li>chile@4GeeksAcademy.com</li>
            <li>+56 9 2006 5786</li>
          </ul>
        </div>
      </section>
    </section>
    <section className='card'>
      <section className='certificate'>
        <div className='title'>
          <span>Ingeniería de Sistemas</span>
        </div>
        <div className='time'>
          <span>2015 – 2019 Barcelona, Venezuela</span>
        </div>
      </section>
      <section className='academy'>
        <div className='academy-name'>
          Universidad Gran Mariscal de Ayacucho
        </div>
        <div className='info'>
          <ul>
            <li>+58 412 510 01 38</li>
          </ul>
        </div>
      </section>
    </section>
  </section>
);

export default Educacion;