import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/Authcontext'

const ProtectedRoute = ({ children }) => {

  const { isAuthencticated } = useAuth()  

  if (!isAuthencticated) {
    return <Navigate to="/login" replace/>
  }

  return children
}

export default ProtectedRoute