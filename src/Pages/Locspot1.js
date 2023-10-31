import React from 'react'
import './Locspot.css'
import { Link } from 'react-router-dom';
function LocSpot1() {
  return (
    <div className="App">
      <h5>LocationSpoting
      </h5>
      <p>
      Location spotting service for tourist customers is to provide enhancing your exploration of a destination  and places. <br></br>  
      The service involves identifying and recommending key points of interest, ensuring that tourists can make the most of the visit.<br></br>
      Safety is paramount established guidelines for taking photos,videos,droneshots etc... which can be in safety manner<br></br>
      The Locations are often updated by the guide where you are and the surroundings can be vsisted with the help of guide.<br></br>
    </p>
     <h6>Have A Good Vibe...</h6><br></br><br></br>
     <img src="https://static.vecteezy.com/system/resources/previews/002/558/111/non_2x/flat-style-design-of-web-banner-template-for-website-or-infographics-mobile-navigation-gps-system-destination-location-find-the-right-way-illustration-vector.jpg" alt="image"/>
     <br></br><br></br><br></br><Link to="/CampFire1"><button>Next</button></Link>        <Link to="/Trekking1"><button>Previous</button></Link>
      <br></br>
      <br></br>
    </div>
       
  );
}

export default LocSpot1;
