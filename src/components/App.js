import React, { useState, } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/mainPage';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import UsersPage from '../pages/usersPage';
import ScoreboardPage from '../pages/scoreboardPage';
import NotificationsPage from '../pages/notificationsPage';
import ChallengesPage from '../pages/challengesPage';
import MypagePage from '../pages/mypagePage';
import ChangePasswordPage from '../pages/changePasswordPage';

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
        <Route path="/scoreboard" element={<ScoreboardPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/mypage" element={<MypagePage />} />
        <Route path="/mypage/change-password" element={<ChangePasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
