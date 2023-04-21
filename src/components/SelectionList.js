import React from 'react'
import canidates from '../data/PossibilitiesArray'


function SelectionList() {

  function showDropDown() {
    const drop = document.getElementById('drop')
    drop.style.visibility = 'hidden'
  }
  return (
    <div className='drop-down' id='drop'> 
      { canidates.map((canidate) => {
        return (
          <div className='image-card' key={canidate.id} onClick={() => showDropDown()}>
            <img src={canidate.image} alt={`${canidate.title}`}></img>
            <p>{canidate.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SelectionList