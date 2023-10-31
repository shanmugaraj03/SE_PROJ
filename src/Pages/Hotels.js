import React from 'react'
import './Locspot.css'
import { Link } from 'react-router-dom';
function Hotel() {
  return (
    <div className="App">
      <h5>Hotels
      </h5>
      <p>
      There are more 20+ of Our TamilNadu Tourism Hotels/Resorts available all over TamilNadu.<br></br>  
      We  are having the hotels with comfortable environment and  providing a exceptional service to tourist customers.<br></br>
      Free Wi-Fi services, in-room conveniences, and recreational facilities are provided to the tourist.<br></br>  
      Effective communication channels, including multilingual staff  are provided for helping tourists navigate both the hotel and the surrounding area.<br></br> 
      Information about local attractions, cultural nuances, and safety tips can be shared during the journey to enhance the tourists' understanding and appreciation of the destination.<br></br> 
      Specialized services such as tour assistance, transportation arrangements, and concierge services add value, making the hotel a reliable hub for travelers seeking convenience and comfort during their stay<br></br>
    </p>
     <h6>Stay Safe and Stay Happy...</h6><br></br><br></br>
     <p>Hotels</p>
     <img src="https://cdn0.weddingwire.in/vendor/9648/3_2/960/jpg/facade-shot-1_15_39648-161701226287479.jpeg" alt="image"/>
     <p>Resorts</p>
     <img src="https://curlytales.com/wp-content/uploads/2021/03/Untitled-2021-03-19T141333.708.jpg" alt="image"/>
     <br></br><br></br><br></br><Link to="/Trekking"><button>Next</button></Link>        <Link to="/Transport"><button>Previous</button></Link>
      <br></br>
      <br></br>
    </div>
       
  );
}

export default Hotel;
