import React from 'react'
import './Ser.css'
import { Link } from 'react-router-dom';
function Food1() {
  return (
    <div className="App">
      <h5>Food</h5>
      <p>
     Food provided for tourist customers involves a thoughtful approach that embraces diversity and local experiences.<br></br>
     The menu has been featuring both local specialties and international dishes to cater to the varied preferences of tourists Persons.<br></br>  
     Clear labeling of food items for both  Veg and Non-Veg Dishes, so that you can make informed choices.<br></br> 
     Beyond just food, the dining experience can be enhanced by incorporating local traditions, music etc...<br></br> 
     You can Order Indian Varities of Food as well as Chinese Varities or What type you prefer it will be served</p>
     <h6>Have Good and Delicious Experience...</h6><br></br><br></br>
     <p>Chinese Food</p>
     <img src="https://imagedelivery.net/WLUarKbmUXuuhDC7PG5_Qw/articles/e0fce505bf82dbd706a2beb815fe9343.jpg/public" alt="image"/>
     <br></br><br></br>
     <p>Indian Food</p>
     <img src="https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F3070%2Ftrend20210218124824.jpg" alt="image"/>
     <br></br><br></br><br></br><Link to="/Transport1"><button>Next</button></Link>            
      <br></br><br></br><Link to="/Home1"><button1>BackToHome</button1></Link> 
      <br></br>
      <br></br>
    </div>
       
  );
}

export default Food1;
