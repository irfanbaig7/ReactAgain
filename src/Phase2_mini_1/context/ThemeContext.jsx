import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

// create context for theme
const ThemeContext = createContext()


// create provider component
export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useLocalStorage("theme", "light")

  // toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>

  )

}


// custom hook for easier access
// eslint-disable-next-line react-refresh/only-export-components
export const useThem = () => useContext(ThemeContext);

