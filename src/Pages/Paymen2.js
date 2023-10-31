import React from 'react'
import './Payrs.css';
import img from './Qr4.jpeg'
import { Link } from 'react-router-dom';
function Paymen2 (){

  return (
    <div className="Payment1">
      <br></br>
      <img src={img}  alt=""></img>
      <br></br>
      <br></br>
      <Link to="/Bill2"><btn>Printbill</btn></Link>
    </div>
  );
}

export default Paymen2;
