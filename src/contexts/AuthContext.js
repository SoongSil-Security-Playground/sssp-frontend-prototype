import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(true);

    const toggleLogin = () => setIsLoggedIn(prev => !prev);

    const toggleAdmin = () => setIsAdmin(prev => !prev);

    return (
        <AuthContext.Provider value={{ isLoggedIn, toggleLogin, isAdmin, toggleAdmin }}>
            {children}
        </AuthContext.Provider>
    );
};