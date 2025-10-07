import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const handlNavigate = () => {
        navigate("/about")
    }

  return (
    <div style={{ padding: "1rem" }}>
        <h1>Home Page</h1>      
        <p>Click the button below</p>
        <button onClick={handlNavigate}>
            Go to about
        </button>
    </div>
  )
}

export default Home