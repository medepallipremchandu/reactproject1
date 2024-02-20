import React, { useEffect, useState } from 'react';
import "./Login.css"

const Private = () => {
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('token') !== null);
  const [logoutSuccess, setLogoutSuccess] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setLogoutSuccess(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/private', {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        });

        if (response.ok) {
          // Handle successful data fetching if needed
        } else {
          console.error('Access denied');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ch"><br/><br/><br/><br/>
      <center>{logoutSuccess && <p>Logout successful!</p>}
      <br />
      <button  onClick={handleLogout}>Logout</button></center>
    </div>
  );
};

export default Private;
