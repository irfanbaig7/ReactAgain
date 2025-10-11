import React, { createContext, useContext, useState } from 'react'

// create context
const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [notes, setNotes] = useState([]);

    // Task function
    const addTask = (task) => setTasks((prev) => [...prev, task])
    const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id))

    // Note function
    const addNote = (note) => setTasks((prev) => [...prev, note])
    const deleteNotes = (id) => setNotes((prev) => prev.filter((n) => n.id !== id))

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, notes, addNote, deleteNotes, }}>
            {children}
        </TaskContext.Provider>
    )
}



// Custom Hook
export const useTaskContext = () => useContext(TaskContext)