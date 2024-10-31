import React, { useState, } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/mainPage';
import LoginPage from '../pages/loginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => {
      console.log("Previous login state:", prev, "New login state:", !prev);
      return !prev;
    });
  };
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage isLoggedIn={isLoggedIn} toggleLogin={toggleLogin}/>} />
        <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} toggleLogin={toggleLogin}/>} />
      </Routes>
    </Router>
  );
}

export default App;
