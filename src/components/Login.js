// src/components/Login.js
import React, { useState } from 'react';
import './Login.css'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        setError(null); // Reset error state on successful login
        onLogin();
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Username or Password incorrect');
    }
  };

  return (
    // <div>
    //   <h2>Login</h2>
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    //   <label>
    //     Username:
    //     <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
    //   </label>
    //   <br />
    //   <label>
    //     Password:
    //     <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //   </label>
    //   <br />
    //   <button onClick={handleLogin}>Login</button>
    // </div>
    <div className='lo'>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label for="">Username</label>
            </div>
            <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <label for="">Password</label>
            </div>
            <button onClick={handleLogin}>Log in</button>
            <div class="register">
                <p>Don't have a account <a href="/register">Register</a></p>
            </div>
      </div>
  );
};

export default Login;
