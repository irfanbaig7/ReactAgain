import React from 'react'
import { Link } from 'react-router-dom'
import { useThem } from '../context/ThemeContext'
import { useAuth } from '../context/Authcontext'

const Navbar = () => {

  const { theme, toggleTheme } = useThem()
  const { isAuthencticated, logout } = useAuth()

  return (
    <nav className='bg-gray-800 text-white px-6 py-3 flex justify-between'>
      <h1 className='text-xl font-bold'>DevConnect</h1>
      <div className='space-x-4'>
        <Link to="/" className='hover:text-yellow-300'>Home</Link>
        <Link to="/projects" className='hover:text-yellow-300'>projects</Link>
        <Link to="/contact" className='hover:text-yellow-300'>Contact</Link>
        <Link to="/dashboard" className='hover:text-yellow-300'>DashBoard</Link>        
        
        {!isAuthencticated && (
          <Link to="/login" className='hover:text-yellow-300'>Login</Link>
        )}
      </div>
      <div className='space-x-2'>
        <button onClick={toggleTheme} className='bg-yellow-500 text-black px-3 py-1 rounded-md font-semibold'>
          {theme === "light" ? "Dark mode" : "light mode"}
        </button>

        {isAuthencticated && (
          <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded-md font-semibold">
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar