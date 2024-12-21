import Image from 'next/image'
import React from 'react'

function BookLayout() {
  return (
    <div className="relative h-[460px] w-full">
      <Image
        src="/assets/images/slider1.jpg" 
        alt="Hotel exterior"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a room with us</h1>
        <p className="text-lg md:text-xl text-center max-w-2xl">
          Experience luxury and comfort at its finest. Our hotel combines elegant design, 
          exceptional service, and prime location to ensure your stay is nothing short of perfect.
        </p>
      </div>

      
    </div>
  )
}

export default BookLayout
