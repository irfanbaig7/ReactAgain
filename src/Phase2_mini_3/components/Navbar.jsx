import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {

  const { isLoggedIn, theme, logout, login, toggleTheme } = useAppContext()

  return (
    <nav
     className="p-4 flex justify-between items-center bg-gray-900 text-white px-6 py-3"
    >
      <h1 className='text-xl font-bold'>
        FocusFlow
      </h1>

      <div className="flex items-center space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        { isLoggedIn && <Link to="/dashboard">Dashboard</Link> }

        {/* theme button */}
        <button onClick={toggleTheme}>
            {theme === "light" ? "🌞" : "🌙"}
        </button>

        {/* logout Button */}
        {isLoggedIn ? (
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded text-white">
            LogOut
          </button>
        ) :(
          <Link to="/login" className='bg-blue-500 px-3 py-1 rounded text-white'>
            login
          </Link>
        )}
      </div>      
    </nav>
  )
}

export default Navbar