import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import { useThem } from './context/ThemeContext'
import ProtectedRoute from './routes/ProtectedRoute'


// Lazy load pages
const Home = lazy(() => import("./pages/Home"))
const Projects = lazy(() => import("./pages/Projects"))
const Contact = lazy(() => import("./pages/Contact"))
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Login = lazy(() => import("./pages/Login"))



const Aap = () => {

  const { theme } = useThem();

  return (
    <div className={theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"}>
        <Navbar />
        <main className='flex-grow p-6 min-h-screen'>
          <Suspense fallback={<div className='text-center'>Loading...</div>}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
                <Route path='/login' element={<Login />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
    </div>
  )
}

export default Aap