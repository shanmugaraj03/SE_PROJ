import React from 'react'
import './Locspot.css'
import { Link } from 'react-router-dom';
function CampFire1() {
  return (
    <div className="App">
      <h5>Campping
      </h5>
      <p>
      Camp Fire will be provided for all the tourist customers in all the tourist places <br></br>  
      Forest Camping involves identifying and recommending instructions, ensuring safety in forest the tourists can make the most of the visit along with guide.<br></br>
      Safety is paramount established guidelines for taking photos,videos,droneshots etc... inside forest handled in a safety manner with atmost care <br></br>
      The Locations are often updated by the guide where you are and the surroundings can be vsisted with the help of guide.<br></br>
    </p>
     <h6>Stay Calm and Feel Good...</h6><br></br><br></br>
     <img src="https://tetonsports.com/cdn/shop/articles/Campfire-Safety-4-of-4-scaled.jpg?v=1687284054" alt="image"/>
     <br></br><br></br><br></br><Link to="/LocSpot1"><button>Previous</button></Link><br></br><br></br>  
     <Link to="/Home1"><button1>BackToHome</button1></Link>
      <br></br>
      <br></br>
    </div>
       
  );
}

export default CampFire1;
