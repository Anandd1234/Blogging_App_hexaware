import React from "react";
import {useState} from "react";
import './DeletePost.css';
function DeletePost(){
    const [UserName,setUserName]=useState('');
    const [DateToday,setDateToday]=useState(new Date());
    const[Title,setTitle]=useState('');
    const[Subject,setSubject]=useState('');
    const[Body,setBody]=useState('');
   const handelusername=(event)=>{
        setUserName(event.target.value);
    };

    const handeltitle=(event)=>{
        setTitle(event.target.value);
    };
    const handlesubmit = async (event) => {
        event.preventDefault();
        
        try {
          const response = await fetch('https://localhost:7010/api/Blog/DeleteData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({UserName,DateToday,Title,Subject,Body}),
          });
    
          if (response.ok) {
            alert('we have  successfully delete data');
            // You may want to reset the form fields or do other actions upon successful insertion
           setUserName('');
           setTitle('');
           
          } else {
            // Handle error response
            alert('Failed to delete data');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred');
        };
      };

    return(
        <>
        <div className="container-fluid" id="aa5">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-5 col-sm-12">
          
        <form  className="" onSubmit={handlesubmit} id="aa8">
        <h2 id="aa7">Delete My Data</h2><br/>
          <label><b>UserName:</b></label><br/>
        <input type="text" placeholder="enter your username" value={UserName} onChange={handelusername} className="form-control-lg"  id="aa4" required/><br/>
        <br/>
        <label><b>Title:</b></label><br/>
        <input type="text" placeholder="enter the title correctly" value={Title} onChange={handeltitle} className="form-control-lg" id="aa4" required/><br/>
<br></br>
        <button type="submit" id="aa6">Delete post</button>
        </form>
        </div>
        <div className="col-lg-3" id="aa9">

        </div>
        </div>
        </div>
        </>
    );

};
export default DeletePost;