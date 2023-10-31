import React from 'react'
import './Locspot.css'
import { Link } from 'react-router-dom';
function Trekking1() {
  return (
    <div className="App">
      <h5>Trekking
      </h5>
      <p>
      We are Offering trekking experiences for tourist customers providing an adventurous and immersive journey through nature's landscapes<br></br>  
      The Trekking service begins with knowledgeable guides who can not only navigate the trails but also share insights about the local flora, fauna, and cultural significance of the region<br></br>
      Safety is paramount, with well-maintained equipment and adherence to established trekking guidelines<br></br>
      The informations will be provided about the trekking, including duration, terrain challenges, and required fitness levels, ensures that tourists can make informed choices based on their preferences and capabilities.<br></br>
    </p>
     <h6>Be Safe And Enjoy the Moment...</h6><br></br><br></br>
     <img src="https://www.connectingtraveller.com/travel-blog/wp-content/uploads/2022/05/TREKKING_destination_in_HIMACHAL_CONNECTINGTRAVELLER.jpg" alt="image"/>
     <br></br><br></br><br></br><Link to="/LocSpot1"><button>Next</button></Link>        <Link to="/Hotel1"><button>Previous</button></Link>
      <br></br>
      <br></br>
    </div>
       
  );
}

export default Trekking1;
