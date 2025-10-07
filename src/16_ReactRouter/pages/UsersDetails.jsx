import React from 'react'
import { useParams } from 'react-router-dom'

const UsersDetails = () => {

    const { id } = useParams();   


  return (
    <div style={{ padding : "1rem" }}>
        <h2>Users details page</h2>
        <p>Users ID from URL: {id}</p>          
    </div>
  )
}

export default UsersDetails