import React from 'react'
import './components.css'

const Header = (props) => {
  return(
    <div className='header_container'> 
      <h1>{props.title}</h1>
    </div>
   )

 }

export default Header