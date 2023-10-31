import React from 'react'
import './Locspot.css'
import { Link } from 'react-router-dom';
function Transport1() {
  return (
    <div className="App">
      <h5>Transport
      </h5>
      <p>
      We are having the best and effective transport service for tourist customers which are conveniencing, safe and Secure, comfortness.<br></br>
      Our vehicles are well-maintained, and we offering a range of options to accommodate different group sizes and preferences.<br></br>  
      The quality of service ensures a clear communication and a sense of security for tourists.<br></br> 
      Information about local attractions, cultural nuances, and safety tips can be shared during the journey to enhance the tourists' understanding and appreciation of the destination.<br></br> 
      Punctuality and reliability are paramount, as tourists often have tight schedules.<br></br>
      Integrating technology for real-time tracking and communication further elevates the service, providing transparency and ease of access.</p>
     <h6>Happy Journey...</h6><br></br><br></br>
     <img src="https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/three-buses?qlt=82&wid=1024&ts=1660283760294&dpr=off&fit=constrain" alt="image"/>
     <br></br><br></br><br></br><Link to="/Hotel1"><button>Next</button></Link>        <Link to="/Food1"><button>Previous</button></Link>
      <br></br>
      <br></br>
    </div>
       
  );
}

export default Transport1;
