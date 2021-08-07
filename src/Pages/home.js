import React from 'react'
import './Pages.css'
import Win from '../images/win.svg'

/**
* @author Decory Herbert
* @function Home
**/

const Home = (props) => {
  return(
    <div className='home_container'> 
      <img src={Win} width="200" alt="win a home music studio"/>
      <p>ARE YOU OVER 19 YEARS OF AGE?</p>
      <div className="buttons">
        <button>YES, LET ME IN</button>
        <button>NO, TAKE ME HOME</button>
      </div>
    </div>
   )

 }

export default Home