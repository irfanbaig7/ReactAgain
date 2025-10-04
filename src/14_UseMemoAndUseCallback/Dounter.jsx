import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

const Dounter = () => {

    const [count, setCount] = useState(0)
    const [text, setText] = useState("")


    const handleIncrement = useCallback(
      () => {
        setCount((p) => p + 1)
        // setCount(count + 1)
    },
      [],
    )
    


  return (
    <div style={{ padding: 20 }}>
      <h2>Parent Component</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleIncrement}>Increment Count</button>
      <p>Count: {count}</p>

      {/* Child Component */}
      <ChildComponent onClick={handleIncrement} />
    </div>
  )
}

export default Dounter