import React from "react";
import {useState} from "react";
import './Register.css';
import { useNavigate } from "react-router-dom";

function Register(){
const navigate=useNavigate();
const GoToLogin=()=>{
  navigate('/anand');
};

  const backgroundColor = 'rgb(0, 191, 255)'; // Replace with your desired color value
 
  const appStyle = {
    minHeight: '100vh', // Set minimum height to cover the viewport
    backgroundColor: backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };


    const[FirstName,setfname]=useState('');
    const[LastName,setlname]=useState('');
    const[MobileNumber,setMobile]=useState('');
    const[Email,setemail]=useState('');
    const[Password,setpassword]=useState('');
    const[CPassword,setcpassword]=useState('');
    const handelfname=(event)=>{
        setfname(event.target.value);
       };
    const handelname=(event)=>{
        setlname(event.target.value);
       };
       const handelmobile=(event)=>{
        setMobile(event.target.value);
       };
       const handelemail=(event)=>{
        setemail(event.target.value);
       };
       const handelpassword=(event)=>{
        setpassword(event.target.value);
       };
       const handelcpassword=(event)=>{
        setcpassword(event.target.value);
       };
       const handlesubmit = async (event) => {
        event.preventDefault();
        
        try {
          const response = await fetch('https://localhost:7019/api/User', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({FirstName,LastName,MobileNumber,Email,Password,CPassword}),
          });
    
          if (response.ok) {
            alert('You signup successfully');
            // You may want to reset the form fields or do other actions upon successful insertion
            setfname('');
            setlname('');
            setMobile('');
            setemail('');
            setpassword('');
            setcpassword('');
            navigate('/signin');
          } else {
            // Handle error response
            alert('please check your password and confirm password again...');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred');
        };
      };
    
return(
    <>
    <div className="" id="r4">
    <div  id="r1" className="d-flex justify-content-center align-items-center ">
     
    <form className="" id="r5" onSubmit={handlesubmit}  >
    <h1 id="r2">Sign Up</h1>
    <h6 id="r3">It's free and only takes a minute</h6>
        <label id="q1"><b>First Name:</b></label>
        <br/>
        <input type="text" className="form-control form-control-lg"  value={FirstName} onChange={handelfname} required/>
        <br/>
        <label id="q1"><b>Last Name:</b></label>
        <br/>
        <input type="text" className="form-control form-control-lg" value={LastName} onChange={handelname} required/>
        <br/>
        <label id="q1"><b>Mobile Number:</b></label>
        <br/>
        <input type="text" className="form-control form-control-lg" value={MobileNumber} onChange={handelmobile} required/>
        <br/>
        <label id="q1"><b>Email:</b></label>
        <br/>
        <input type="email" className="form-control form-control-lg" value={Email} onChange={handelemail} required/>
        <br/>
        <label id="q1"><b>Password:</b></label>
        <br/>
        <input type="password" className="form-control form-control-lg" value={Password} onChange={handelpassword} required/>
        <br/>
        <label id="q1"><b>CPassword:</b></label>
        <br/>
        <input type="password" className="form-control form-control-lg" value={CPassword} onChange={handelcpassword} required/>
        <br/>
        <button type="submit" id="r6"><h4>Register me</h4></button>
        <br/><br/><br/>
    </form>
   
    </div>
    </div>
 
    </>
);
};
export default Register;