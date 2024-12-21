import Image from 'next/image';
import React from 'react'

interface GallerySlideProps {
  images: string[]; // Array of image URLs
}

function GallerySlide( { images }: GallerySlideProps ) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-9">
      {images.slice(0, 4).map((src, index) => (
        <div
          key={src}
          className="relative w-full h-[300px] overflow-hidden"
        >
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default GallerySlide
