import React from 'react'

function GridSquare(props) {
  const gridSquare = props
  const id = gridSquare.id
  
  return (
    <div 
      key={gridSquare.id} 
      id={gridSquare.id} 
      className='grid'
      onClick={() => console.log(gridSquare.item.id)}
      >
        {gridSquare.id}
      </div>
  )
}

export default GridSquare