"use client"


import {  motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { useEffect, useState } from "react";
import BookingForm from "./BookingForm";


function Carousel() {

  const images = ["/assets/images/slider1.jpg", "/assets/images/slider2.jpg", "/assets/images/slider3.jpg", "/assets/images/slider4.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    
    return () => clearInterval(timer);
}, [images.length]);
// Change image every 5 seconds


  return (
    <div className="relative w-full h-[360px] lg:h-[560px]  overflow-hidden">
      <AnimatePresence>
        {images.map((src, index) => (
          index === currentIndex && (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1,
                ease: "easeInOut"
            
            }}
              className="absolute w-full h-full"
            >
              <Image
                src={src}
                alt={`Carousel image ${index + 1}`}
                fill
                className="w-full h-full overflow-hidden object-cover"
                priority={true}
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-32 lg:bottom-72 flex justify-center">
        <h1 className="text-white text-2xl text-center font-medium tracking-wide lg:text-5xl lg:leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-wrap md:mx-4 md:leading-relaxed">WELCOME TO EASY KEYS GUEST HOUSE</h1>
      </div>

      <div className="absolute inset-x-0 bottom-10 flex justify-center">
        <BookingForm />
      </div>
    </div>
  )
}

export default Carousel
