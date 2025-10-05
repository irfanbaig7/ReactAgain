import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

  console.log("Theme context renderd");
  

    // step 1 - initalize theme from localstorage or default to "light"
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light"
    })

    // step 2 - save theme in localstorage whenever it change
    useEffect(() => {
      localStorage.setItem("theme", theme)
      document.body.classname = theme; // apply class to body
    }, [theme])


    // step 3 - Toggle Theme function
    const handleToggle = () => {
        setTheme((p) => (p === "light" ? "dark" : "light"));
    }
    
  return (
    <ThemeContext.Provider value={{theme, handleToggle}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider