import React, { useContext } from 'react'
import { UserContext } from './UserProvider'

const Home = () => {

    const { user, setUser } = useContext(UserContext)

    console.log("Home re rendered");
    

  return (
    <div>
        <h2>Welcome, user {user.name}</h2>
        <button onClick={() => setUser({...user, name: "baig"})} >Change name</button>
    </div>
  )
}

export default Home