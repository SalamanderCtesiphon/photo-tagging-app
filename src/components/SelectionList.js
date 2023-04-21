import React from 'react'
import canidates from '../data/PossibilitiesArray'


function SelectionList() {
  return (
    <div className='drop-down'>
      { canidates.map((canidate) => {
        return (
          <div className='image-card' key={canidate.id}>
            <img src={canidate.image} alt={`${canidate.title}`}></img>
            <p>{canidate.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SelectionList