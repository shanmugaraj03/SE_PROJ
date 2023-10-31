import React, { useState } from 'react';
import'./Card.css'
import img from "./Cardsimg.jpeg"
import { useNavigate } from 'react-router-dom';
const Card2 = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCVC] = useState('');
  const navigate = useNavigate();
  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCVCChange = (e) => {
    setCVC(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(cardNumber === ""  || cardHolder  === "" || expiryDate === "" || cvc === ""){
        alert("Please fill the details");
        
      }
      else
      {
        navigate("/OTP2");
      }    
  };

  return (
    <div className="Mycard">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <div className ="Card"> 
     <img src={img} alt=""/>   
    <form onSubmit={handleSubmit}>
      <h1>
        Card Number:</h1>
        <input type="Cardnumber" placeholder=" " value={cardNumber} onChange={handleCardNumberChange} />
      <br></br>
      <h1>
        Card Holder:</h1>
        <input type="text" placeholder=" " value={cardHolder} onChange={handleCardHolderChange} />
      <br></br>
      <div className="Mon">
      <h1>
        Expiry: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CVC </h1>
        <input type="Month" placeholder="MM/YY" value={expiryDate} onChange={handleExpiryDateChange}  /><input type="text" value={cvc} onChange={handleCVCChange} />
      <br></br>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default Card2;
