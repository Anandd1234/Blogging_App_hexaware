import React, { useState,useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Fetch from './Fetch';
function Login() {
  const Navigate=useNavigate();
{/**starts reactc code */}
  const backgroundColor = 'rgb(0, 191, 255)'; // Replace with your desired color value

  /*const appStyle = {
    minHeight: '90vh', // Set minimum height to cover the viewport
    backgroundColor: backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };*/

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://localhost:7019/api/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        
        alert("login success");
//        Navigate('/fetch');
        window.location.href = '/fetch'; 

        console.log('Login successful!');
      } else {
        window.location.href = '/';
        alert("soory failed login");
        
        setError('Invalid username or password');
      }
    } catch (error) {
      
      alert("error foundede");
      setError('Error during login');
      console.error('Error during login:', error.message);
      
    }
  };

  return (
    
    <div   className="d-flex justify-content-center align-items-center " id="t1">
      
      <form onSubmit={handleLogin} id="aa1">
      <h2 id="l1">User Login</h2><br/>
      <label>Username:</label>
        <input
          type="email"
          placeholder="Username or email"
          value={username}
          className="form-control form-control-lg"
          onChange={(e) => setUsername(e.target.value)}
        required/>
        <br/>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="form-control form-control-lg"
          onChange={(e) => setPassword(e.target.value)}
       required />
        <br/><br/>
        <button type="submit" id="l2">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
