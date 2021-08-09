import React from 'react'
import './age.css'

const Age = (props) => {
  return(
    <div className='age_container'> 
        <p>are you over 19 years of age?</p>
        <button><span>yes</span> let me in</button>
        <button><span>no</span> take me home</button>
    </div>
   )

 }

export default Age