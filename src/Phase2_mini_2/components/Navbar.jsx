import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between">
            <h1 className="text-xl font-bold">FocusFlow</h1>
            <div className="space-x-4">
                <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Home</NavLink>
                <NavLink to="/tasks" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Tasks</NavLink>
                <NavLink to="/notes" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Notes</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "font-bold underline" : ""}>About</NavLink>
                <NavLink to="/focus" className={({ isActive }) => isActive ? "font-bold underline" : ""}>Focus</NavLink>
            </div>
        </nav>
    )
}

export default Navbar