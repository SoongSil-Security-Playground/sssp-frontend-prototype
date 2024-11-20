import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
        console.log(newToken)
        setIsLoggedIn(true);
        console.log('login')
    };

    const logout = async () => {
        try {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/logout`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${storedToken}`,
                        'Content-Type': 'application/json',
                    },
                });
            }
            console.log('/auth/logout fetched')
        } catch (error) {
            console.error('Error during logout API call:', error);
        } finally {
            localStorage.removeItem('token');
            setToken(null);
            setIsLoggedIn(false);
            console.log('logout');
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};