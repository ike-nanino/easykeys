import React from 'react'
import Image from 'next/image'

function MainGallery() {
  const images = [
    '/assets/images/gallery1.jpg',
    '/assets/images/gallery2.jpg',
    '/assets/images/gallery3.jpg',
    '/assets/images/gallery4.jpg',
    '/assets/images/gallery5.jpg',
    '/assets/images/gallery6.jpg',
    '/assets/images/gallery7.jpg',
    '/assets/images/gallery8.jpg',
    // Add more images as needed
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainGallery
