import React from 'react'
import Tasks from './pages/Tasks'
import Focus from './pages/Focus'
import Notest from './pages/Notest'
import { NavLink, Route, Routes } from 'react-router-dom'

const Phase2 = () => {
  return (

    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold">FocusFlow</h1>
        <div className="space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Tasks</NavLink>
          <NavLink to="/notes" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Notes</NavLink>
          <NavLink to="/focus" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Focus</NavLink>
        </div>
      </nav>

      {/* Routes */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/notes" element={<Notest />} />
          <Route path="/focus" element={<Focus />} />
        </Routes>
      </div>
    </div>
  )
}

export default Phase2