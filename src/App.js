import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Public from './components/Public';
import Private from './components/Private';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import Porto from './components/Portfolio';
import Skill from './components/skills';
import High from './components/Highlights';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') !== null);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   setLoggedIn(false);
  // };

  const handleRegister = (token) => {
    localStorage.setItem('token', token);
    setLoggedIn(true);
  };

  return (
    <>
    <Public />
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />          
          <Route
            path="/private"
            element={<Private />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/skills"
            element={<Skill />}
          />
          <Route
            path="/Portfolio"
            element={<Porto />}
          />
          <Route
            path="/Highlights"
            element={<High />}
          />
          <Route
            path="/login"
            element={loggedIn ? <Navigate to="/Home" /> : <Login onLogin={handleLogin} />}
          />
          <Route
            path="/Private"
            element={loggedIn ? <Private/> : <Navigate to="/login" />}
          />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
        </Routes>
        {/* <button onClick={handleLogout}>Logout</button> */}
      </div>
    </Router>
    </>
  );
};

export default App;
