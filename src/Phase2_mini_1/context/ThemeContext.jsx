import { createContext, useContext, useEffect, useState } from 'react'

// create context for theme
const ThemeContext = createContext()


// create provider component
export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  // toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>

  )

}


// custom hook for easier access
// eslint-disable-next-line react-refresh/only-export-components
export const useThem = () => useContext(ThemeContext);

