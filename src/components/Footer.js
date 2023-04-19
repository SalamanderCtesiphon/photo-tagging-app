import React from 'react'

function Footer() {
    const date = new Date().getFullYear();

  return (
    <div>
      <div className='footer'>
       <h5>
      <a href="https://github.com/SalamanderCtesiphon/" >Seamus Quixiote </a>
        &#169;  
      <a href="https://www.theodinproject.com/" > The Odin Project </a>  
      <span>{date}</span> 
      </h5>
    </div>
    </div>
  )
}

export default Footer