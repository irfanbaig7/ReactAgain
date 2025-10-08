import React, { useEffect, useRef } from 'react'

const AutoFocusInput = () => {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus(); // first render pr hi ye active ho jayega 
    }, [])


  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-3">🎯 Auto Focus Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        className="border border-gray-400 p-2 rounded-md"
      />
    </div>
  )
}

export default AutoFocusInput