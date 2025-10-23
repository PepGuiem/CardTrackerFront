import { useState } from 'react'
import '../scss/Header.scss'

function App() {
  return (
    <>
    <div className='header-container'>
        <div className="left-side-header">
            <div className='logo-header'>
                <img src="/imatges/quickBall.png" alt="" className='logo-header-img'/>
                <p className='cardTracker-logo'>Card Tracker</p>
                <p className='cardTracker-type-logo'>Pokemon</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default App