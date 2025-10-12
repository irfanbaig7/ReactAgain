import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => { 
    const { isloggedIn } = useAppContext();
    return isloggedIn ? children : <Navigate to="/login" />
}

export default ProtectedRoute