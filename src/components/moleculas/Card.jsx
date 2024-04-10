
const Card = ({ mainTitle, time, location, secondTitle, description}) => (
  <section className='card'>
    <section className='header'>
      <div className='title'>
        <span>{ mainTitle }</span>
      </div>
      <div className='description'>
        <span>{ time } { location? location: ''}</span>
      </div>
    </section>
    <section className='body'>
      <div className='title'>
        <span>{ secondTitle }</span>
      </div>
      <div className='description'>
        {
          description.text ? <span>{ description.text }</span> : <></>
        }
        {
          description.list ?
            <ul>
              {
                description.list.map((text, index) => <li key={index}>{ text }</li>)
              }
            </ul>
          :
            <></>

        }
      </div>
    </section>
  </section>
);

export default Card;