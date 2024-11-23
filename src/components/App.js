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
// admin page test
// import Header from '../components/Header';
// import ChallSettingPage from '../pages/ChallSettingPage';
// import UserSettingPage from '../pages/UserSettingPage';
// import NotiSettingPage from '../pages/NotiSettingPage';
// import UserForm from '../components/UserForm';
// import ChallengeForm from '../components/ChallengeForm';

function App() {
  return (
    <AuthProvider>
      <Router>
          <NavigationBar />
          {/* <Header/> for admin page test*/}
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
            {/* admin page test */}
            {/* <Route
              path="/challSettingPage"
              element={
                <PrivateRoute>
                  <ChallSettingPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/userSettingPage"
              element={
                <PrivateRoute>
                  <UserSettingPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/notiSettingPage"
              element={
                <PrivateRoute>
                  <NotiSettingPage />
                </PrivateRoute>
              }
            />
            <Route path="/edit-user/:userId" element={<UserForm />} />
            <Route path="/add-user" element={<UserForm/>} />
            <Route path="/edit-Challenge/:ChallengeId" element={<ChallengeForm />} />
            <Route path="/add-challenge" element={<ChallengeForm/>} /> */}

          </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;
