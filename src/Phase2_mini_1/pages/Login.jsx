import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';

const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate()

  const handleLogin = () => {
    login();
    navigate("/dashboard")
  }

  return (
    <div className='text-center'>
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </div>
  )
}

export default Login