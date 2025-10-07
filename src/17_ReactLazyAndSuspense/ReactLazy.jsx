import React, { lazy, Suspense } from 'react'
import {  Link, Route, BrowserRouter as Router , Routes } from 'react-router-dom'

// Lazy imports
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Contact = lazy(() => import("./pages/Contact"))






const ReactLazy = () => {
  
  return (

    <Router>

      <nav style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
          <Link to="/" >Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/contact" >Contact</Link>
      </nav>



      <Suspense fallback={<h3>Loading page...</h3>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Suspense>
    </Router>
    
  )
}

export default ReactLazy