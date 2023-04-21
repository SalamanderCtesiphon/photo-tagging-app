import React from 'react'
import babyWizard from '../images/babyWizard.png'
import ghostInAJar from '../images/ghostInAJar.png'
import pennsylvester from '../images/pennsylvester.png'

function SelectionList() {
  return (
    <div className='drop-down'>
      <div className='image-card'>
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
      </div>
    </div>
  )
}

export default SelectionList