import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setError(null); // Reset error state on successful registration
        onRegister(data.token);
        // Redirect to login page after successful registration
        navigate('/login');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
      setError('Username already exists');
    }
  };

  return (
    // <div>
    //   <h2>Register</h2>
    //   <label>
    //     Username:
    //     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
    //   </label>
    //   <br />
    //   <label>
    //     Password:
    //     <input
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //       required
    //     />
    //   </label>
    //   <br />
    //   <button onClick={handleRegister}>Register</button>
    // </div>

    <div className='lo'>
    <h1>Register</h1>
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
    <button onClick={handleRegister}>Register</button>
    <div class="login">
        <p>Already have a account <a href="/login">Login</a></p>
    </div>
    </div>
  );
};

export default Register;
