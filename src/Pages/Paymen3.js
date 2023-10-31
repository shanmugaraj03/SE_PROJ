import React from 'react'
import './Payrs.css';
import img from './Qr6.jpeg'
import { Link } from 'react-router-dom';
function Paymen3 (){

  return (
    <div className="Payment1">
      <br></br>
      <img src={img}  alt=""></img>
      <br></br>
      <br></br>
      <Link to="/Bill3"><btn>Printbill</btn></Link>
    </div>
  );
}

export default Paymen3;
