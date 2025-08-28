import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className={`px-4  h-auto sm:h-screen sm:px-[5%] bg-center bg-cover`}   style={{ backgroundImage: `url("/images/image2.png")` }}>
     <Navbar/>
     <div className='sm:pt-10'>
      <Outlet/>
     </div>
    </div>
  )
}

export default App