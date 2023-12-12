import React, { useState } from "react";
import "./Edit.css";
import { useNavigate } from "react-router-dom";
function Edit(){
  const Navigate=useNavigate();
  const BlogPost=()=>{
    Navigate('/Blog')
  };
  const EditBlog=()=>{
    Navigate('/edit');

  };
  const findlogout=()=>{
    Navigate('/')
  };
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
        const response = await fetch('https://localhost:7019/api/Blog/Update_Blog', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({UserName,DateToday,Title,Subject,Body}),
        });
  
        if (response.ok) {
          alert('we have  successfully updated your data');
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
    return(
        <>
        
        {/* nav bar started from there  */}
        <div id="n1">
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
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
    <select name="" id="b2" onChange={findlogout}>
    <option value="Log out" selected>Hello Anand</option>  
    <option value="Log out">Log out</option>
 
</select>
    
  </div>
</nav>
</div><br/><br/>
<h4 id="aa10">Edit my Blog</h4>
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
  
  
    {/*
    const[UserName,setusername]=useState('');
    const [DateToday_Find,setDateToday]=useState(new Date());
    const[Title,settitle]=useState('');
    const[Subject,setsubject]=useState('');
    const[Body,setbody]=useState('');
    const handelsetusername=(event)=>{
        setusername(event.target.value);
    };
    var DateToday=DateToday_Find.toISOString();
    const handelsettitle=(event)=>{
        settitle(event.target.vaue);
    };
    const handelsetSubject=(event)=>{
        setsubject(event.target.value);
    };
    const handelbody=(event)=>{
        setbody(event.target.value);
    };
       const handlesubmit = async (event) => {
        event.preventDefault();
        
        try {
          const response = await fetch('https://localhost:7010/api/Blog/Update_Blog', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({UserName,DateToday,Title,Subject,Body}),
          });
    
          if (response.ok) {
            alert('Data inserted successfully');
            setusername('');
            settitle('');
            setsubject('');
            setbody('');
            // You may want to reset the form fields or do other actions upon successful insertion
          
          } else {
            // Handle error response
            alert('Failed to insert data');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred');
        };
      };
    return(
        <>
 
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 d-none d-sm-block"></div>
                    <div className="col-lg-7 col-sm-12">
                        <h2 id="e1">Update My Blogs</h2>
                    <br/><br/>
            <form className="form-control"  onSubmit={handlesubmit}>
                    <label>UserName:</label><br/>
                    <input type="text" className="form-control" value={UserName} placeholder="username is necessary for updating" onChange={handelsetusername} required/><br/>
                    <label>Title:</label><br/>
                    <input type="text" className="form-control" value={Title} placeholder="title is necessary for updating" onChange={handelsettitle} required/><br/>
                    <label>Subject</label><br/>
                    <input type="text" className="form-control" value={Subject} onChange={handelsetSubject} required/><br/>
                    <label>Body</label><br/>
                    <textarea className="form-control" id="e3" value={Body} onChange={handelbody} required/><br/>
                    <button type="submit" id="e2">Update me</button>
           </form>
                    </div>
                    <div className="col-lg-2 d-none d-sm-block"></div>

                </div>
            </div>
           
        </>
    );
};*/}
export default Edit;