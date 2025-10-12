import React, { lazy, Suspense } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Tasks = lazy(() => import("./pages/Tasks"));
const Notes = lazy(() => import("./pages/Notest"));
const About = lazy(() => import("./pages/About"));


const Phase2 = () => {
  return (

    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />
      {/* Routes */}
      <main className='flex-grow'>
        <Suspense fallback={<p className="text-center text-lg mt-6">Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default Phase2