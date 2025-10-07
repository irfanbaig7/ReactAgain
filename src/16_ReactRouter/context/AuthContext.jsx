import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = () => setIsLoggedIn(true)
    const logOut = () => setIsLoggedIn(false)


  return (
    <div>
        <AuthContext.Provider value={{isLoggedIn, login, logOut}}>
            {children}
        </AuthContext.Provider>




    </div>
  )
}

export default AuthProvider


// custom hook for easier use
export function useAuth() {
    return useContext(AuthContext)
}