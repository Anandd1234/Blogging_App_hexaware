import React from "react";
import {useState} from "react";
import "./Blog.css";
import { useNavigate } from "react-router-dom";
function Blog(){
  const navigate=useNavigate();
  const [UserName,setUserName]=useState('');
  const [DateToday_Find,setDateToday]=useState(new Date());
  const[Title,setTitle]=useState('');
  const[Subject,setSubject]=useState('');
  const[Body,setBody]=useState('');
  const handelsetUserName=(event)=>{
    setUserName(event.target.value);
  }
  var DateToday=DateToday_Find.toISOString();
  const handelsetTitle=(event)=>{
    setTitle(event.target.value);
  }
  const handelsetSubject=(event)=>{
    setSubject(event.target.value);
  }
  const handelsetBody=(event)=>{
    setBody(event.target.value);
  }
  {/*----------------------------------------------------------------------------------------------------------*/}
  const handlesubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('https://localhost:7019/api/Blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({UserName,DateToday,Title,Subject,Body}),
      });

      if (response.ok) {
        alert('Your Blog Posted  successfully');
        navigate('/fetch');
        // You may want to reset the form fields or do other actions upon successful insertion
       setUserName('');
       setTitle('');
       setSubject('')
       setBody('');
      } else {
        // Handle error response
        alert('Failed to insert data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    };
  };
const BlogPost=()=>{
navigate('/blog');
};
const EditBlog=()=>{
  navigate('/edit');
};
const HandleLogout = () => {
  // Clear session logic (e.g., removing tokens, clearing state)
  // Redirect to the login page
  navigate('/');
};
            
  {/*----------------------------------------------------------------------------------------------------------*/}
 
    return(
        <>
              <div id="n1">
<nav className="navbar navbar-expand-lg bg-body-tertiary " >
  <div className="container-fluid" >
    <a className="navbar-brand" href="#">Blogging.com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="" onClick={BlogPost} >Post Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" onClick={EditBlog}>Update Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="">Contact me</a>
        </li>    
      </ul>      
    </div>
    <select name="" id="b2"  onChange={HandleLogout}>
    <option value="Log out" selected>Hello Anand</option>  
    <option value="Log out">Log out</option>
 
</select>
    
  </div>
</nav>
</div>
    
{/* nav bar ends there  */}
{/** starting of creating a blog */}
<div className="">
    <div className="container-fluid">
   <div className="row">
    <div className="col-lg-8 col-sm-12">
    <form className="form-control"  id="w1" onSubmit={handlesubmit}>
    <label>UserName:</label><br/>
    <input type="text" className="form-control-lg" placeholder="UserName" id="c1" value={UserName} onChange={handelsetUserName} required></input>
    <br/><br/>
    <label>Title:</label><br/>
    <input type="text" className="form-control-lg" placeholder="Title" id="c1" value={Title} onChange={handelsetTitle} required></input>
    <br/><br/>
    <label>Subject:</label><br/>
    <input type="text" placeholder="Enter the subject of blog" className="form-control-lg" id="c2" value={Subject} onChange={handelsetSubject} required></input><br/><br/>
    <label>Body:</label><br/>
    <textarea rows="8" cols="60" placeholder="start your blog" className="form-control" id="c3" value={Body} onChange={handelsetBody} required/><br/><br/><br/>
    <button type="submit" id="c4"><h4>Post me</h4></button>
</form>
</div>
<div className="col-4">
<div id="w2" className="d-flex justify-content-center align-items-center   d-none d-sm-block"></div>
</div>
</div>
</div>
</div>

{/** End of creating a blog */}
{/* body of the reading*/}
{/*
   <div className="container-fluid">
    <div className="row">
        <div className="col-g-4 col-sm-4"></div>
        <div className="col-lg-4 col-sm-5 " id="b3">
            <h1 className="float-left">haii sir</h1>
            <p>jhghhghgnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnhjgbbvbnbvbnbnvbvbvbvbnnnnnnghfcvgfdxfanand</p>
            <p>jghcdzfghjkljhgfgghjkjhgfdgdsfghjkknbvnbcxxcxvb,,bnvcxvg</p>
        </div>
        <div className="col-lg-4 col-sm-2">
            <h1 className="float-left"></h1>
        </div>
      </div>
    </div>
    */}
{/** end of reading of box */}
        </>
    );
};
export default Blog;