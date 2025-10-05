import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Navvbar = () => {

    console.log("navbar renderd");
    

    const {theme, handleToggle} = useContext(ThemeContext)

  return (
    <div
      className={`p-6 rounded-xl text-center transition-all duration-500 
      ${theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}`}
    >
      <h1 className="text-2xl font-bold mb-4">🌗 Theme Context Example</h1>
      <p>Current Theme: {theme.toUpperCase()}</p>

      <button
        onClick={handleToggle}
        className="mt-4 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        Toggle Theme
      </button>
    </div>
  )
}

export default Navvbar