import React from 'react'

function GridSquare(props) {
  const gridSquare = props
  return (
    <div key={gridSquare.id} id={gridSquare.id} className='grid'></div>
  )
}

export default GridSquare