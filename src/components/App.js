import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import NavigationBar from './NavigationBar';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import UsersPage from '../pages/UsersPage';
import ScoreboardPage from '../pages/ScoreboardPage';
import NotificationsPage from '../pages/NotificationsPage';
import ChallengesPage from '../pages/ChallengesPage';
import MypagePage from '../pages/MypagePage';
import ChangePasswordPage from '../pages/ChangePasswordPage';

function App() {
  return (
    <AuthProvider>
      <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/scoreboard" element={<ScoreboardPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/mypage" element={<MypagePage />} />
            <Route path="/mypage/change-password" element={<ChangePasswordPage />} />
          </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;
