import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Footer from './components/Footer'
import { useThem } from './context/ThemeContext'
import ProtectedRoute from './routes/ProtectedRoute'


const Aap = () => {

  const { theme } = useThem();

  return (
    <div className={theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}>
        <Navbar />
        <main className='flex-grow p-6 min-h-screen'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </main>
        <Footer />
    </div>
  )
}

export default Aap