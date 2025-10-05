import React, { createContext, useState } from 'react'

// createContext

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState({ name: "irfan", age: 21 })

    console.log("creation an provider component rendered");
    

  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider