import React from 'react'
import { useTaskContext } from '../context/TaskContext'

const Tasks = () => {

    const { tasks, addTask, deleteTask }  = useTaskContext();

    const handleAdd = () => {
        const newTask = {id: Date.now(), title: "New task " + (tasks.length + 1)}
        addTask(newTask)
    }


  return (
    <div className='text-center mt-10'>
      <h2 className="text-2xl font-bold mb-3">📝 Tasks Page</h2>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Add Task
      </button>

      <ul className="mt-4 space-y-2 max-w-sm mx-auto text-left">
        {tasks.map((task) => (
          <li key={task.id} className="bg-white p-2 rounded shadow flex justify-between">
            {task.title}
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 font-semibold"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks