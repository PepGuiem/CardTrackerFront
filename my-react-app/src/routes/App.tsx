import { useState } from 'react'
import '../scss/App.scss'

const PokeButton: React.FC = () => {
  const [caught, setCaught] = useState(false)
  const [animating, setAnimating] = useState(false)

  const handleClick = () => {
    setAnimating(true)
    setTimeout(() => {
      setCaught(!caught)
      setAnimating(false)
    }, 600)
  }

  return (
    <button
      className={`poke-toggle ${caught ? 'caught' : 'catch'}`}
      onClick={handleClick}
      disabled={animating}
    >
      <img
        src="/imatges/quickBall.png"
        alt="Pokéball"
        className={`poke-icon ${animating ? 'animating' : ''} ${caught ? 'right' : 'left'}`}
      />
      <span>{caught ? 'Caught' : 'Catch it'}</span>
    </button>
  )
}

function App() {
  return (
    <>
      <div className='tittle-container'>
        <img src="/imatges/pikachu.png" alt="" className='tittle-img-pikachu'/>
        <div className='tittle-text'>
          <h1>CardTracker</h1>
          <h2>Pokemon</h2>
        </div>
        <img src="/imatges/snorlax.png" alt="" className='tittle-img-snorlax'/>
      </div>

      <div className='tracking-plans-main-container'>
        <p className='tracking-container-tittle'>Tracking plans</p>
        <div className='tracking-plans-container'>

          <div className='tracking-plan-card'>
            <img src="/imatges/pokeball.png" alt="" className='pokeball'/>
            <h1 className='tracking-plan-text'>Free</h1>
            <p className='tracking-plan-paragraf'>Limited 3 tracks</p>
            <PokeButton />
          </div>

          <div className='tracking-plan-card'>
            <img src="/imatges/superball.png" alt="" className='superball'/>
            <h1 className='tracking-plan-text'>Basic</h1>
            <p className='tracking-plan-paragraf'>Limited 15 tracks</p>
            <p className='tracking-plan-paragraf'>1'99€ / month</p>
            <PokeButton />
          </div>

          <div className='tracking-plan-card'>
            <img src="/imatges/ultraball.png" alt="" className='ultraball'/>
            <h1 className='tracking-plan-text'>Premium</h1>
            <p className='tracking-plan-paragraf'>Limited 100 tracks</p>
            <p className='tracking-plan-paragraf'>9'99€ / month</p>
            <PokeButton />
          </div>

          <div className='tracking-plan-card'>
            <img src="/imatges/masterball.png" alt="" className='ultraball'/>
            <h1 className='tracking-plan-text'>Ultra premium</h1>
            <p className='tracking-plan-paragraf'>Unlimited tracks</p>
            <p className='tracking-plan-paragraf'>14'99€ / month</p>
            <PokeButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
