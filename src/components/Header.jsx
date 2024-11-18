import React from "react";
import Dropdown from "./Dropdown";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import logo from "../assets/logo.png";
import '../styles/Header.css';

const Header = () => {
    const { isLoggedIn, toggleLogin, isAdmin } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        toggleLogin();
        navigate('/');
    };

    return (
        <nav className="header">
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
            </div>
            <div className="menu">
                <Link to="/users" className="menu-item">Users</Link>
                <Link to="/scoreboard" className="menu-item">Scoreboard</Link>
                <Link to="/challenges" className="menu-item">Challenges</Link>
                <Link to="/notifications" className="menu-item">Notifications</Link>
                {/* {(isLoggedIn && isAdmin) ? (
                    <>
                        <Dropdown/>
                    </>
                ): (<></>)
                } */}
                {isLoggedIn ? (
                    <>
                        <Dropdown/>
                    </>
                ) : (<></>)
                }
            </div>
            <div className="user-section">
                {isLoggedIn ? (
                    <>
                        <Link to="/mypage" className="mypage">My Page</Link>
                        <button className="logout-button" onClick={handleLogout}>logout →</button>
                    </>
                ) : (
                    <Link to="/login">
                        <button className="login-button">login →</button>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Header;
