import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[90%] lg:w-[85%] bg-white/80 backdrop-blur-lg shadow-lg rounded-full z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Trip Planner Logo" className="h-10 md:h-10" />
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
          <Link to="/" smooth={true} className="hover:text-blue-600 transition">Home</Link>
          <Link to="/planner" smooth={true} className="hover:text-blue-600 transition">Planner</Link>
          <Link to="/destinations" className="hover:text-blue-600 transition">Destinations</Link>
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">Login</Link>
        </div>

        {/* Mobile Menu Icon (for later if needed) */}
        <button className="md:hidden text-3xl  rounded-lg hover:bg-gray-100">
          ☰
        </button>
      </div>
    </nav>
  )
}

export default Navbar