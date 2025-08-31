import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import './App.css'
import HeroSection from './components/HeroSection'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App