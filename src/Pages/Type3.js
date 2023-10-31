import React from 'react'
import './Type.css'
import { Link } from 'react-router-dom';
function Type3(){
    return(
        <div className="Type">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to ="/Paymen3"><button>UPI Transaction </button></Link>
            <br></br>
            <br></br>
            <Link to ="/Card3"><button> Card Transaction </button></Link>
        </div>
    )
}

export default Type3;