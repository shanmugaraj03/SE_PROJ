import React, { useState } from 'react'
import './Newuser.css';
import img from './TNTourlog.jpeg'
import { auth } from '../firebase';
import { Link, Navigate } from 'react-router-dom';

const NewUser = () =>  {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmrpassword] = useState('');
   
  const handleReg = async (e)=>{
    e.preventDefault();

    try{
      await auth.createUserWithEmailAndPassword(email,password);
      alert("Successfully created go to login page");
      Navigate("/Login1")
    }
    catch(error){
      console.log(error);
      alert("Please enter mailid and password");
    }
      
    };
  return (
    <div className="Reg">
      <br></br>
      <br></br>
      <img src={img}  alt=""></img>
      <br></br>
      <br></br>
      <p3>
        <u>CREATE LOGIN</u>
      </p3>
      <form onSubmit={handleReg}>
    <div className="NewUse">
      <br></br>
      <h1>Email ID</h1>
      <input type="email-id" placeholder="" value={email}onChange={(e)=>setemail(e.target.value)}/>
      <br></br>
      <h1>Password</h1>
      <input type="password"placeholder="" value={password}onChange={(e)=>setpassword(e.target.value)}/>
      <br></br>
      <h1>Confirm Password</h1>
      <input type="retype-password"placeholder=""value={confirmpassword}onChange={(e)=>setconfirmrpassword(e.target.value)}/>
      <br></br>
      <br></br>
      <button>Register</button>
      <br></br>
      <Link to="/Login1"><button>Back</button></Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
    </form>
    </div>
  );
}

export default NewUser;
