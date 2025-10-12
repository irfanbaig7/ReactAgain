import React, { useState } from 'react'
// import { useTaskContext } from '../context/TaskContext';

const Notest = () =>  {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  const addNote = () => {
    if (!text.trim()) return;
    setNotes([...notes, text]);
    setText("");
  };

  // const {notes, addNote, deleteNotes,} = useTaskContext()

  // const handleAdd = () => {
  //       const newNotes = {id: Date.now(), title: "New Notes " + (notes.length + 1)}
  //       addNote(newNotes)
  //   }

  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold mb-4">Notes</h2>
      <div className="flex justify-center gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a note..."
          className="border px-3 py-2 rounded w-64"
        />
        <button
          onClick={addNote}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul className="max-w-sm mx-auto text-left">
        {notes.map((note, index) => (
          <li key={index} className="border-b py-2">
            {note}
            {/* <button
              onClick={() => deleteNotes(note.id)}
              className="text-red-500 font-semibold"
            >
              Delete
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notest