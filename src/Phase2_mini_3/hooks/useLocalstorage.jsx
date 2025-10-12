import React, { useEffect, useState } from 'react'

const useLocalstorage = (key, initialvalue) => {

  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialvalue;
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  
  return [value, setValue]
}

export default useLocalstorage