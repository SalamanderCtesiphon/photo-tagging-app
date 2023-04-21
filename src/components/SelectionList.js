import React from 'react'
import babyWizard from '../images/babyWizard.png'

function SelectionList() {
  return (
    <div className='drop-down'>
      <img src={babyWizard} alt='baby wizard'></img>
      <p>Baby Wizard</p>
    </div>
  )
}

export default SelectionList