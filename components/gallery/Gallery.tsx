import React from 'react'
import GallerySlide from './GallerySlide'
import Link from 'next/link'

function Gallery() {

  const images = [
    '/assets/images/gallery1.jpg',
    '/assets/images/gallery2.jpg',
    '/assets/images/gallery3.jpg',
  ]


  return (
    <div className="">
      <div className="flex justify-between items-center mx-2 py-8">
        <h1 className="text-base font-bold lg:text-2xl ">Photo Gallery Of Our Hotel</h1>

        <Link
        href="/gallery"
        >
        <span className="bg-green-500 text-white hover:bg-green-700 py-3 px-2 rounded-lg">View Gallery</span>
        </Link>
      </div>

      <GallerySlide images={images}  />
    </div>
  )
}

export default Gallery
