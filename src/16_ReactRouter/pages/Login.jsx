import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const { login } = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        login();
        navigate("/settings")
    }



  return (
    <div>
        <h2>Login page</h2>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login