import React from 'react'
import canidates from '../data/PossibilitiesArray'


function SelectionList() {
  return (
    <div className='drop-down'>
      { canidates.map((canidate) => {
        return (
          <div className='image-card'>
            <img src={canidate.image} alt={`${canidate.title}`}></img>
            <p>{canidate.title}</p>
          </div>
        )
      })}
      {/* <div className='image-card'>
        <img src={babyWizard} alt='baby wizard'></img>
        <p>Baby Wizard</p>
      </div>
      <div className='image-card'>
        <img src={ghostInAJar} alt='ghost in a jar'></img>
        <p>Ghost in a Jar</p>
      </div>
      <div className='image-card'>
        <img src={pennsylvester} alt='pennsylvester'></img>
        <p>Pennsylvester</p>
      </div> */}
    </div>
  )
}

export default SelectionList