import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav
        style={{
            display: "flex",
            gap: "1rem",
            padding: "1rem",
            background: "#f3f3f3",
        }}
    >
        <Link to="/">home</Link>

        {/* NavLinks Active styling */}
        <NavLink to="/about" style={({isActive}) => ({
            color: isActive ? "blue" : "black",
            fontWeight: isActive ? "bold" : "normal"
        })} >about</NavLink>

        <NavLink to="/users" style={({isActive}) => ({
            color: isActive ? "blue" : "black",
            fontWeight: isActive ? "bold" : "normal"
        })} >Users</NavLink>

        <NavLink to="/settings" style={({isActive}) => ({
            color: isActive ? "blue" : "black",
            fontWeight: isActive ? "bold" : "normal"
        })} >Settings</NavLink>

        <NavLink to="/users/filter" style={({isActive}) => ({
            color: isActive ? "blue" : "black",
            fontWeight: isActive ? "bold" : "normal"
        })} >Filter</NavLink>
  
    </nav>
  )
}

export default Navbar