import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('adminAuth'); // Check if admin is authenticated

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />; // Redirect to login page if not authenticated
  }

  return children; // If authenticated, render the protected route
};

export default PrivateRoute;
