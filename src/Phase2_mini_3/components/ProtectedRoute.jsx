import React from 'react'
import { useAppContext } from '../context/AppContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

  const { isLoggedIn } = useAppContext()

  return isLoggedIn ? children : <Navigate to="/login" />
}

export default ProtectedRoute