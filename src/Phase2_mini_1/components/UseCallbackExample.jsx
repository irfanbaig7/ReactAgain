import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallbackExample = () => {

    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState(false)


    // Normal function = recreated on every render
    // const handleClick = () => {
    //     console.log("Clicked", count);
    // }


    // Usecallback version - recreated only when 'count' changes
    const handleClick = useCallback(() => {
        console.log("Clicked", count);
    }, [count])



    const themeStyles = {
        backgroundColor: theme ? "#333" : "#fff",
        color: theme ? "#fff" : "#000",
        padding: "20px",
        textAlign: "center",
        borderRadius: "8px",
        transition: "0.3s",
    };


    return (
        <div style={themeStyles}>
            <h2>⚙️ useCallback Example</h2>
            <p>Count: {count}</p>
            <button
                onClick={() => setCount((prev) => prev + 1)}
                className="bg-blue-500 text-white px-3 py-1 rounded m-2"
            >
                Increment
            </button>
            <button
                onClick={() => setTheme((prev) => !prev)}
                className="bg-yellow-500 text-black px-3 py-1 rounded"
            >
                Toggle Theme
            </button>

            <Child onClick={handleClick} />
        </div>
    )
}

export default UseCallbackExample