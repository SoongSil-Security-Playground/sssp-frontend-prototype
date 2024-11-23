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
import PrivateRoute from '../routes/PrivateRoute';
import ChallengesSettingPage from '../pages/ChallengesSettingPage';
import UsersSettingPage from '../pages/UsersSettingPage';
import NotificationsSettingPage from '../pages/NotificationsSettingPage';

import UserForm from './UserForm';

function App() {
  return (
    <AuthProvider>
      <Router>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <UsersPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/scoreboard"
              element={
                <PrivateRoute>
                  <ScoreboardPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/notifications"
              element={
                <PrivateRoute>
                  <NotificationsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/challenges"
              element={
                <PrivateRoute>
                  <ChallengesPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/mypage"
              element={
                <PrivateRoute>
                  <MypagePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/mypage/change-password"
              element={
                <PrivateRoute>
                  <ChangePasswordPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/challenges"
              element={
                <PrivateRoute>
                  <ChallengesSettingPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <PrivateRoute>
                  <UsersSettingPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/notifications"
              element={
                <PrivateRoute>
                  <NotificationsSettingPage />
                </PrivateRoute>
              }
            />
            <Route path="/edit-user/:userId" element={<UserForm />} />
          </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;
