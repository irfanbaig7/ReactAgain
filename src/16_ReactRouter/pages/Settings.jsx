import React from 'react'
import { useNavigate } from 'react-router-dom'


const Settings = () => {

    const navigate = useNavigate()

  return (
    <div style={{padding: "1rem"}}>
        <h1>Settings PAGE</h1>
        <button onClick={() => navigate(-1)}>Go back 🔙</button>
    </div>
  )
}

export default Settings