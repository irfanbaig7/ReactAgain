import React, { useCallback, useState } from 'react'
import Todos from './Todos'

export const UseCallbackExample = () => {

    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    // Memoized function
    const addTodo = useCallback(() => {
        setTodos((p) => [...p, "New Todo"])
    }, [])

    return (
        <div>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}
