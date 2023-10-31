import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom';
function Cart() 
{
  return (
    <div className="cart">
        <h5>Your Booking</h5><br></br><br></br>
            <h9><b>For 2 Days</b></h9>
             <p>Amount : 4500<br></br>              
              GST+CGST(28%) : 1260<br></br>               
            -------------------<br></br>
             TotalAmount : 5760<br></br>
             -------------------<br></br>
             <Link to="/Pay2"><button>Ok</button></Link></p><br></br><br></br>
             <h9><b>For 4 Days</b></h9>
             <p>Amount : 8500<br></br>              
              GST+CGST(28%) : 2380<br></br>               
            -------------------<br></br>
             TotalAmount : 10880<br></br>
             -------------------<br></br>
             <Link to="/Pay4"><button>Ok</button></Link></p><br></br><br></br>
             <h9><b>For 6 Days</b></h9>
             <p>Amount : 13000<br></br>              
              GST+CGST(28%) : 3640<br></br>               
            -------------------<br></br>
             TotalAmount : 16640<br></br>
             -------------------<br></br>
               <Link to="/Pay6"><button>Ok</button></Link></p>
              </div>
    );
}

export default Cart;



  