import React, { useState } from 'react'
import './Payment.css'
import { Link, useNavigate } from 'react-router-dom';
const Pay6 = () => {
  const [Name, setName] = useState('');
  const [Date, setDate] = useState('');
  const navigate = useNavigate();
  const handlesubmit = (e)=>{
    e.preventDefault();
    if(Name === ""|| Date === "" ){
      alert("Please fill the details");
      
    }
    else
    {
      navigate("/Type3");
    }
};

  return (
    <form onSubmit={handlesubmit}>
    <div className="pay">
              <br></br><h2><i>PAYMENT</i></h2>
              <br></br>
              <img src="https://images.indianexpress.com/2022/07/bhim-upi-npci.jpg" alt="img" ></img>
              <img src="https://www.india.com/wp-content/uploads/2022/05/paytm_ipo.jpg" alt="img" ></img>
              <br></br>
              <br></br>           
             <input type="text" placeholder="Your Name"value={Name}onChange={(e)=>setName(e.target.value)}/><br></br><br></br>
             <input type="date" placeholder="" value={Date}onChange={(e)=>setDate(e.target.value)}/><br></br><br></br>  
              <p1>TotalAmount :16640</p1>
             <br></br>
             <br></br>               
             <button>Payment</button>        <Link to="/Cart"><button>Cart</button></Link> <Link to="/Home1"><button>Back</button></Link>    
              </div>
              </form>
    );
}

export default Pay6;



