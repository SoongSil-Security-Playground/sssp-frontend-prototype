import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AdminRoute = ({ children }) => {
    const { isLoggedIn, isAdmin } = useAuth();

    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }

    if (!isAdmin) {
        console.log("admin only")
        return <Navigate to="/" />;
    }

    return children;
};

export default AdminRoute;