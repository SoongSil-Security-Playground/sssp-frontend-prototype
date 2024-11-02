import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => setIsLoggedIn(prev => !prev);

    return (
        <AuthContext.Provider value={{ isLoggedIn, toggleLogin }}>
            {children}
        </AuthContext.Provider>
    );
};