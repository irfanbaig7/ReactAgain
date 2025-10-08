import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isAuthencticated, setIsAuthencticated] = useState(
        JSON.parse(localStorage.getItem("isAuthencticated")) || false
    )
    const login = () => setIsAuthencticated(true)
    const logout = () => setIsAuthencticated(false)

    // Presiste to localStorage
    useEffect(() => {
      localStorage.setItem("isAuthencticated", JSON.stringify(isAuthencticated))
    }, [isAuthencticated])
    
    return (
        <AuthContext.Provider value={{ isAuthencticated, login, logout }} >
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)



