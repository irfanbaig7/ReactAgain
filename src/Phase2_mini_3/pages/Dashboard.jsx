import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import useLocalstorage from '../hooks/useLocalstorage'

const Dashboard = () => {

  const [notes, setNotes] = useLocalstorage("notes", [])
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus(); // first render pr hi ye active ho jayega 
  }, [])

  const addNote = useCallback(() => {
    const text = inputRef.current.value.trim()
    if (text) {
      setNotes((prev) => [...prev, text])
      inputRef.current.value = "";
    }
  }, [])

  const noteCount = useMemo(() => notes.length, [notes])

  // for enter button that are help to add notes without click add button
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      addNote()
    }
  }

  // for delete note
  const deleteNote = useCallback((index) => {
    setNotes((prev) => prev.filter((_, i ) => i !== index))
  }, [setNotes])

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold mb-4">My Notes</h2>
      <div className="mb-6">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter note..."
          className="border px-3 py-2 rounded mr-2"
          onKeyDown={handleInputKeyDown}
        />
        <button
          onClick={addNote}
          className="px-4 py-2 rounded bg-green-600"
        >
          Add
        </button>
      </div>

      <p className="mb-4">Total Notes: {noteCount}</p>

      <ul className="space-y-2">
        {notes.map((note, i) => (
          <li key={i} className="flex justify-around items-center border p-2 rounded bg-gray-100">
            {note}
            <button onClick={() => deleteNote(i)} className="text-red-600 font-bold">
                delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard