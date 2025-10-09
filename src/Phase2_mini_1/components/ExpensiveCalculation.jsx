import React, { useMemo, useState } from 'react'

const ExpensiveCalculation = () => {

    const [count, setCount] = useState(0)
    const [dark, setDark] = useState(false)


    // heavy calculation
    const slowFunction = (num) => {
        console.log("heavy computation running...");
        for (let i = 0; i < 10000000000; i++) { }
        return num * 2
    }


    // without useMemo - re-runs every render
    // const double = slowFunction(count)


    // With useMemo - only runs whene count change
    const double = useMemo(() => slowFunction(count), [count])

    const themeStyles = {
        backgroundColor: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        transition: "0.3s",
    };

    return (
        <div style={themeStyles}>
            <h2>🧠 useMemo Example</h2>
            <p>Double: {double}</p>
            <button onClick={() => setCount((prev) => prev + 1)} className="bg-blue-500 text-white px-3 py-1 rounded m-2">
                Increment
            </button>
            <button onClick={() => setDark((prev) => !prev)} className="bg-yellow-500 text-black px-3 py-1 rounded">
                Toggle Theme
            </button>
        </div>
    )
}

export default ExpensiveCalculation