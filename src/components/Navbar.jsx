import React from 'react'
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <section className='fixed top-3 left-3 right-3 h-15 md:left-10 md:right-10 sm:top-4 lg:left-20 lg:right-20  rounded-3xl bg-white/80 shadow-lg z-50 '>
        <div className='px-5 py-2 flex items-center justify-between'>
            <div className="logo">
             <img src="/images/logo.png" alt="" className='w-30' />
            </div>
            <div className="hidden sm:flex menu items-center gap-10 text-lg" >
                <div>Home</div>
                <div>Holiday Packages</div>
                <div>About </div>
                <div>Contact Us</div>
            </div>
            <div className="login flex items-center gap-3  sm:text-lg">
                 <div className='px-3 py-2 bg-[#0249AE] text-white flex items-center gap-3 rounded-4xl cursor-pointer'>SignUp    <FaUserCircle className='text-2xl '/></div>
               
            </div>
        </div>
    </section>
  )
}

export default Navbar