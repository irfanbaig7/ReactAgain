import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-xl font-bold text-white mb-4 sm:mb-0">
          FocusFlow
        </h2>
        <div className="flex space-x-6 mb-4 sm:mb-0">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} FocusFlow. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer