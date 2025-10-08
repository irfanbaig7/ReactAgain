import { createContext, useContext, } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isAuthencticated, setIsAuthencticated] = useLocalStorage("isAuthencticated", false)
    const login = () => setIsAuthencticated(true)
    const logout = () => setIsAuthencticated(false)

    return (
        <AuthContext.Provider value={{ isAuthencticated, login, logout }} >
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)



