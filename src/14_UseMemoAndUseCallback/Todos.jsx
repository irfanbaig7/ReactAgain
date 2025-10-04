import React, { memo } from 'react'

const Todos = memo(({todos, addTodo}) => {

  console.log("Todos rendered");
  

  return (
    <div>
        <h3>My Todos</h3>
        {todos.map((item, idx) => (
            <p key={idx}>{item}</p>
        ))}
        <button onClick={addTodo}>AddTodo</button>
    </div>
  )
}

)

export default Todos