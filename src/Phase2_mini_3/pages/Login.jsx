import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { login } = useAppContext();
  const navigate = useNavigate()

  const handleLogin = () => {
    login()
    navigate("/dashboard")
  }

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <button
        onClick={handleLogin}
        className="bg-blue-500 px-4 py-2 text-white rounded"
      >
        Login Now
      </button>
    </div>
  )
}

export default Login