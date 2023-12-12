import React from "react";
import "./First.css";
import { useNavigate } from "react-router-dom";
function First(){
  const Navigate=useNavigate();
  const Finded=()=>{
  Navigate('/register');
     
  };
  const SignIn=()=>{
    Navigate('/signin');
  };

return(
   <>
  
  {/*<div class="d-flex justify-content-end" >
  <div class="btn-group">
    <button class="btn" id="b4" onClick={SignIn} >Login</button>
    <button class="btn" id="b4">Getting Started</button>
  </div>
</div>*/}

   <div class="container-fluid" id="s1">
    <div class="row">
    <div class="d-flex justify-content-end" >
  <div class="btn-group">
    <button class="btn" id="b4" onClick={SignIn} ><b>Login</b></button>
    <button class="btn" id="b4"><b>Getting Started</b></button>
  </div>
</div>
    <div className="a1">
    <h1 className="a2">Create a Blog and Share</h1>
    <h1 className="a2">your voice in minutes</h1>
    
    
    
    <p className="a3"><b>Blogging.com makes it easy for you to start your own</b></p>
    <p className="a3"><b>post.</b></p>
    
    <p className="a4"><b>signup for free to start shareing your ideas</b></p>
    <button type="submit" className="b1"  onClick={Finded}>Start your blog </button>
   

   </div>
    </div>
   
   </div>

   </>
    );
};
export default First;