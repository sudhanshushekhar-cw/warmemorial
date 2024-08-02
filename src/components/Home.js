import {Bricks} from './Bricks'
import {Menu} from './Menu'

export const Home = () => {
  const events = [
    'event1',
    'event2',
    'event3',
  ]
  return (
    <div className='grid-container'>
      <Menu></Menu>
      <main>
        <header>
          <h2>Kargil</h2>
          <ul className='events'>
            {
              events.map(event => {
                return <li className='event' key={event}>{event}</li>
              })
            }
          </ul>
        </header>
        <Bricks></Bricks>
      </main>
    </div>
  )
}
