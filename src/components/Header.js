import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import Dropdown from "./Dropdown";

function Header() {
    const { isLoggedIn, toggleLogin } = useAuth();
    const [ hoveredLink, setHoveredLink ] = useState(null);
    const [ isHovered, setIsHovered ] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        toggleLogin();
        navigate('/');
    };

    const links = [
        { to: '/users', label: 'Users' },
        { to: '/scoreboard', label: 'Scoreboard' },
        { to: '/challenges', label: 'Challenges' },
        { to: '/notifications', label: 'Notifications' },
    ];

    return (
        <div style={mainContainerStyle}>
            <div style={logoContainerStyle}>
                <Link to="/">logo</Link>
            </div>
            <div style={menuContainerStyle}>
                {links.map(link => (
                    <Link 
                        key={link.to} 
                        to={link.to} 
                        style={linkStyle(hoveredLink === link.label)} 
                        onMouseEnter={() => setHoveredLink(link.label)}
                        onMouseLeave={() => setHoveredLink(null)}>
                        {link.label}
                    </Link>
                ))}
                <Dropdown />
            </div>
            <div style={loginoutContainerStyle}>
                {isLoggedIn ? (
                    <>
                        <Link to="/mypage" style={linkStyle(false)}>
                            <button 
                                style={buttonStyle(isHovered, false)} 
                                onMouseEnter={() => setIsHovered(true)} 
                                onMouseLeave={() => setIsHovered(false)}>
                                mypage
                            </button>
                        </Link>
                        <button 
                            style={buttonStyle(isHovered, true)} 
                            onClick={handleLogout} 
                            onMouseEnter={() => setIsHovered(true)} 
                            onMouseLeave={() => setIsHovered(false)}>
                            logout →
                        </button>
                    </>
                ) : (
                    <Link to="/login">
                        <button 
                            style={buttonStyle(isHovered, true)} 
                            onMouseEnter={() => setIsHovered(true)} 
                            onMouseLeave={() => setIsHovered(false)}>
                            login →
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;

const mainContainerStyle = {
    position: 'relative',
    top: 0,
    right: 0,
    left: 0,
    height: 'fit-content',
    zIndex: '1000',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContents: 'center',
    backgroundColor: '#f4f7f9',
    padding: '10px 20px',
};

const logoContainerStyle = {
    width: 'fit-content',
    height: 'auto',
    marginLeft: '40px',
};

const menuContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    flex: '1',
};

const linkStyle = (isHovered) => ({
    padding: '0px 16px',
    fontSize: '16px',
    border: 'none',
    backgroundColor: 'transparent',
    color: isHovered ? '#006e93' : 'black',
    cursor: 'pointer',
    textDecoration: 'none',
});

const loginoutContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginRight: '40px',
    backgroundColor: 'transparent',
};

const buttonStyle = (isHovered, isBackground) => ({
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    transition: 'backgroundColor 0.3s',
    color: isBackground ? 'white' : isHovered ? '#005f7f' : '#006e93',
    backgroundColor: isBackground ? (isHovered ? '#005f7f' : '#006e93') : 'transparent',
    borderRadius: '8px',
    fontSize: '16px',
});
