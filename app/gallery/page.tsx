import GalleryLayout from '@/components/GalleryLayout'
import MainGallery from '@/components/MainGallery'
import MobileNav from '@/components/MobileNav'
import NavBar from '@/components/NavBar'
import React from 'react'

function GalleryPage() {

    
  return (
    <div>
      <div className="relative">
      <div className='flex justify-between items-center p-4 bg-transparent absolute w-full z-10 text-white'>
      <div className="text-2xl font-bold text-green-400">Easy Keys</div>
      <div className="hidden lg:flex items-center gap-8">
        <NavBar />
      </div>

      <div className="lg:hidden">
        <MobileNav />
      </div>
      </div>


      <GalleryLayout />
      </div>
      

      <MainGallery />
    </div>
  )
}

export default GalleryPage
