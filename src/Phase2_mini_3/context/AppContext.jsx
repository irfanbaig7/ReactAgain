import React, { createContext, useContext, useState } from 'react'

// creating context
const AppContext = createContext()

export const AppProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [theme, setTheme] = useState("light")


  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"))

  const login = () => setIsLoggedIn(true)
  const logout = () => setIsLoggedIn(false)

  return (
    <AppContext.Provider value={{ isLoggedIn, theme, login, logout, toggleTheme}}>
      {children}
    </AppContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext)