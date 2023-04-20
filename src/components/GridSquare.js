import React from 'react'

function GridSquare(props) {
  const gridSquare = props
  
  return (
    <div 
      key={gridSquare.id} 
      className='grid'
      onClick={() => console.log(gridSquare.item.id)}
      >
        {gridSquare.id}
      </div>
  )
}

export default GridSquare