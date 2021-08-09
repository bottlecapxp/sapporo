import React from 'react'
import { useHistory } from "react-router-dom"
import './components.css'

const Age = (props) => {
  let history = useHistory()

  return(
    <div className='age_container'> 
        <p>are you over 19 years of age?</p>
        <button onClick={() => {history.push('/prizing')}}><span>yes</span> let me in</button>
        <button onClick={() => {history.push('')}}><span>no</span> take me home</button>
    </div>
   )

 }

export default Age