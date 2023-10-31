import React, { useState } from 'react'
import './Bill.css'
import { Link } from 'react-router-dom';
function Bill2() 
{
  return (
    <div className="Bill">
        <h1>InVoice</h1><br></br>
        <h2>TamilNadu Tourism Private Limited...</h2>
        <br></br>
        <br></br>
        <p>Amount : 8500<br></br>              
              GST+CGST(28%) : 2380<br></br>               
            -------------------<br></br>
             TotalAmount : 10880<br></br>
             -------------------<br></br>
             Have A Safe Journey!!<br></br>
             With TNT PVT.LTD...<br></br>
             Thank You!!!</p>
            <img src="https://static.vecteezy.com/system/resources/previews/025/670/592/non_2x/colorful-global-tn-travel-logo-icon-minimalist-air-tn-logo-letter-design-vector.jpg" alt="img" ></img>
            <br></br>
            <br></br>
            <Link to="/Home1"><button>Ok</button></Link>
    </div>
    );
}

export default Bill2;



  