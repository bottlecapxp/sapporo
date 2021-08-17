import React from "react";
import { useHistory } from "react-router-dom";
import "./Pages.css";
import Logo from "../images/sapporo-logo.png"

const Prizing1 = (props) => {
    let history = useHistory()
  
    return (
        <div className="prizing1_container">
            <div className="prizing-header_container">
                <img src={Logo} alt="Sapporo Logo" />
                <h1>PRIZING</h1>
            </div>
            <div className="tier-3_container">

            </div>
            <div className="tier-2_container">

            </div>
            <div className="tier-1_container">

            </div>
            <button onClick={() => {history.push('/prizing-2')}}>NEXT</button>
        </div>
    );
  };
  
  export default Prizing1;