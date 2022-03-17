import React, { useState } from 'react'

const App = () => {

  const [show, setShow] = useState(false)

  const toggleOnClick=()=>{
    const toggle=document.getElementById('toggle')
    toggle.classList.toggle('active')
    setShow(!show)
  }

  return (
    <>
      <div className='wrapper'>
      <div className="holder">
        <div className="candle">
          <div className={`${show&&'blinking-glow'}`}></div>
          <div className={`thread`}></div>
          <div className={`${show&&'glow'} `}></div>
          <div className={`${show&&'flame'}`}></div>
        </div>
      </div>
      <div id="toggle" >
        <p onClick={toggleOnClick} className={`indicator`}></p>
    </div> 
      </div>
    </>
  )
}

export default App