import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white text-center py-3 mt-auto' >
      <p>@ {new Date().getFullYear()} DevConnect. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer