import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from './About';

const Home = () => {
    const images = [
    "/images/image.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval); // cleanup
  }, []);
  return (
    <section className={` bg-center bg-cover w-[100vw] h-[100vh] px-2 md:px-10 lg:px-20 `}   style={{ backgroundImage: `url("/images/image2.png")` }} >
        <div><Navbar/></div>
        <div className='sm:pt-30 pt-25'><HeroSection/></div>
        <div> <About /> </div>
    </section>

  )
}

export default Home