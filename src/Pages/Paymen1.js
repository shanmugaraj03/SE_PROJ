import React from 'react'
import './Payrs.css';
import img from './Qr2.jpeg'
import { Link } from 'react-router-dom';
function Paymen1 (){

  return (
    <div className="Payment1">
      <br></br>
      <img src={img}  alt=""></img>
      <br></br>
      <br></br>
      <Link to="/Bill"><btn>Printbill</btn></Link>
    </div>
  );
}

export default Paymen1;
