import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Users from './pages/users/Users'
import Settings from './pages/Settings'
import Notfound from './pages/Notfound'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import UsersDetails from './pages/UsersDetails'
import Profile from './pages/users/Profile'
import SettingsTab from './pages/users/SettingsTab'
import FilterUsers from './pages/users/FilterUsers'
import ProtectedRoute from './components/ProtectedRoute.JSX'
import Login from './pages/Login'

const Main = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/users" element={<Users />}>
        <Route path='profile' element={<Profile />}/>
        <Route path='settingstab' element={<SettingsTab />} />
      </ Route>
    
      
      <Route path="/users/:id" element={<UsersDetails />} />
      <Route path='/users/filter' element={<FilterUsers />}/>


      <Route element={<ProtectedRoute />}>
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path='/login' element={<Login />}/>


      <Route path="*" element={<Notfound />} />
    </Routes>
    </>
  )
}

export default Main