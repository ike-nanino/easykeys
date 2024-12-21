import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h3 className="text-gray-500 uppercase tracking-wider text-sm">
          Easy Keys Guest House
        </h3>

        <h1 className="text-4xl md:text-5xl font-light">
          Relax in our Guest House
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Experience ultimate comfort in our thoughtfully designed spaces. Our guest house 
          offers a peaceful retreat with modern amenities, luxurious bedding, and a 
          serene atmosphere. Whether you are here for business or leisure, our 
          tranquil environment ensures a rejuvenating stay away from the city's hustle.
        </p>

        <Link
          href='/about-us'
          className="inline-block px-8 py-3 bg-[#C4A484] text-white hover:bg-[#B08968] transition-colors rounded"
        >
          About Us
        </Link>
      </div>

      <div className="relative h-[400px] w-full">
        <Image 
          src='/assets/images/gallery1.jpg'
          alt='Relax in our guest house'
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default AboutUs
