import React, { useState } from 'react';
import './Login1.css';
import img from './TNTourlog.jpeg'
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const [email,  setEmail] = useState('');
  const [password,  setPassword] = useState('');
  const navigate = useNavigate();

  const handlelogin = async (e)=>{
    e.preventDefault();
    
    try{
      await auth.signInWithEmailAndPassword(email,password);
      console.log(email+" "+password);
      navigate("/Home1")  

    }
    catch(error){
      console.log(error);
      alert("UserNotExists");
    }
      
    };
  return (
    <div className="UpHead">
      <br></br>
      <br></br>
      <br></br>
      <img src={img}  alt=""></img>
      <br></br>
      <br></br>
      <p2>
        <u>SIGNIN/SIGNUP</u>
      </p2>
      <form onSubmit={handlelogin}>
      <div className="User">
      <br></br>
      <h1>Email ID</h1>
      <input type="email-id" placeholder="" value={email}onChange={(e)=>setEmail(e.target.value)}/>
      <br></br>
      <h1>Password</h1>
      <input type="password"placeholder="" value={password}onChange={(e)=>setPassword(e.target.value)}/>
      <br></br>
      <br></br>
      <button>SignIn</button>
      <br></br>
      <Link to="/New"><button>SignUp</button></Link>
    </div>
    </form>
    </div>     
  );
}

export default Login;
