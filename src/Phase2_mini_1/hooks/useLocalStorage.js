import { useEffect, useState } from "react"

export const useLocalStorage = (key, initialValue) => {

    // initial state set karo
    const [value, setValue] = useState(() => {
        const storedvalue = localStorage.getItem(key)
        return storedvalue ? JSON.parse(storedvalue) : initialValue;
    })


    // jab bhi value change ho, localstorage update karo
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] 
}
