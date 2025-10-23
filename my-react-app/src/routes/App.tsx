import '../scss/App.scss'


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
      <p>Tracking plans</p>
      <div className='tracking-plans-container'>

      </div>
    </div>  
    </>
  )
}

export default App
