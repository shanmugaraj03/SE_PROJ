import React, { useState } from 'react'
import './Payment.css'
import { Link } from 'react-router-dom';
function Payement() 
{
  const [Name, setName] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [paymenttype, setpaymenttype] = useState('');
  const handlesubmit = (e)=>{
    e.preventDefault();
    if(Name === "" || mobilenumber === "" || paymenttype === "" ){
      alert("Please fill the details");
    }
    else
    {
      alert("Processed Successfully");
    }

  }
  return (
    <div className="pay">
              <h2><i>PAYMENT</i></h2>
              <br></br>
              <br></br>           
             <input type="text" placeholder="Your Name"value={Name}onChange={(e)=>setName(e.target.value)}/>
             <br></br>              
             <br></br>           
             <input type="text" placeholder="Mobile No."value={mobilenumber}onChange={(e)=>setmobilenumber(e.target.value)} /><br></br><br></br>
              <p>TotalAmount :5760</p>         
             <select name="payment" id="payment-id" value={paymenttype}onChange={(e)=>setpaymenttype(e.target.value)}>
             <option value="">
              Payment Type
              </option>
              <option value="app">Gpay/Phonepe/Paytm</option>
              <option value="card">Debit/credit cards</option>
              <option value="Inbank">InternetBanking</option>
              <option value="offline">Spot Payments</option>
              </select>
              <br></br>
              <br></br>
              <button onClick={handlesubmit}>
              Ok</button>      <Link to="/Home"><button>Back</button></Link>
              </div>
    );
}

export default Payement;



