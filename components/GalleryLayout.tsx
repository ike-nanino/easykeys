import Image from 'next/image'
import React from 'react'

function GalleryLayout() {
  return (
    <div className="relative h-[460px] w-full">
    <Image
      src="/assets/images/slider1.jpg" 
      alt="Hotel exterior"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/50" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
      <p className="text-lg md:text-xl text-center max-w-2xl">
       We have gathered spectacular pictures of our hotel and location to showcase pure beauty of nature and perfected style and design of our accomodations to inspire you
      </p>
    </div>
  </div>
  )
}

export default GalleryLayout
