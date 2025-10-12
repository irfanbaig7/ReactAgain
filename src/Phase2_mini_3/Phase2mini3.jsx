import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AppProvider, useAppContext } from './context/AppContext'
import { ErrorBoundary } from './components/ErrorBoundary'

// lazy load
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Login = lazy(() => import("./pages/Login"))
const Dashboard = lazy(() => import("./pages/Dashboard"))

const Phase2mini3 = () => {

  const { theme } = useAppContext()

  return (
    <div className={`flex flex-col min-h-screen text-center ${ theme === "light" ? "bg-gray-200" : "bg-gray-800 text-white" }`}>
          <Navbar />
          <main className='flex-grow mt-3'>
            <Suspense fallback={<div className='p-10 text-center'>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/dashboard' element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
            </Routes>
          </Suspense>
          </main>
        <Footer />
       

    </div>
  )
}

export default Phase2mini3