import React from 'react'

function Header({makeDivs}) {
  return (
    <div className='header'>
      <button onClick={() => makeDivs()}>start</button>
      <h1>Wheres Baldo?</h1>
    </div>
  )
}

export default Header