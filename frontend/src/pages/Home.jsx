import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection.jsx'
import Planner from '../components/Planner.jsx'
import Destinations from '../components/Destinations.jsx';
import Footer from '../components/Footer.jsx';

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
    <>
    <section>
    <HeroSection/>
    </section>
    
    <section className='pt-30 sm:pt-40'>
    <Planner />
    </section>

    <section>
    <Destinations />
    </section>

    <section>
    <Footer />
    </section>
    </>
  )
}

export default Home