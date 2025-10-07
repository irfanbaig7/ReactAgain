import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Users = () => {

    const users = [
        {id: 1, name: "irfan baig"},
        {id: 2, name: "Riya Sharma"},
        {id: 3, name: "Arjun patel"},
    ]

    const location = useLocation();

  return (
    <div style={{ padding: "1rem" }}>
        <h1>Users</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>

        <nav style={{marginBottom: "1rem"}}>        
            <Link to="profile" style={{ marginRight: "10px" }}>
                Profile
            </Link>
            <Link to="settingstab">settingsTab</Link>
        </nav>

        <p>
            <strong>Current Path:</strong> {location.pathname}
        </p>
        <p>
            <strong>Search Params:</strong> {location.search || "none"}
        </p>

        <nav style={{marginBottom: "1rem"}}>
            <Link to="profile" style={{ marginRight: "10px" }}>
                Profile            
            </Link>
            <Link to="settings">Settings</Link>
        </nav>
        
        <Outlet />

    </div>
  )
}

export default Users
