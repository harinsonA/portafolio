import { FaLink } from "react-icons/fa";


const Card = ({ mainTitle, mainLink, time, location, secondTitle, secondLink, description}) => (
  <section className='card'>
    <section className='header'>
      <div className='title'>
        <span>{ mainTitle }</span>
        {
          mainLink ?
            <a className="ml-1" href={mainLink} target="_blank" rel="noreferrer">
              <FaLink size=".8em" color="#FFF" />
            </a>
          :
            <></>
        }
      </div>
      <div className='description'>
        <span>{ time } { location? location: ''}</span>
      </div>
    </section>
    <section className='body'>
      <div className='title'>
        <span>{ secondTitle }</span>
        {
          secondLink ?
            <a className="ml-1" href={secondLink} target="_blank" rel="noreferrer">
              <FaLink size=".8em" color="#FFF" />
            </a>
          :
            <></>
        }
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