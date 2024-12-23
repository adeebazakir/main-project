import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, user, ...rest }) => {
    // Check if user is authenticated
    const isAuthenticated = !!user;

    return (
        <Route
            {...rest}
            element={isAuthenticated ? element : <Navigate to="/login" replace />}
        />
    );
};

export default ProtectedRoute;
