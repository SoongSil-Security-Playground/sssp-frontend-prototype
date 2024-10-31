import React, { useState, } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/mainPage';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import UsersPage from '../pages/usersPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
    console.log("Login status changed:", !isLoggedIn);  
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage isLoggedIn={isLoggedIn} toggleLogin={toggleLogin}/>} />
        <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} toggleLogin={toggleLogin}/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
