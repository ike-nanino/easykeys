'use client'

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { CiMenuFries } from 'react-icons/ci'
import Link from "next/link";
import { useState } from "react";



const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'Our Gallery',
        path: '/gallery',
    },
    {
        name: 'About Us',
        path: '/about-us',
    },
    {
        name: 'Book',
        path: '/availability',
    },
    
]

function MobileNav() {

     const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleLinkClick = () => {
        setIsOpen(false);
      };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="flex justify-center items-center" asChild>
        <button
          className="flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CiMenuFries className="text-[32px] text-accent" />
        </button>
        </SheetTrigger>
        <SheetContent side='left' className='flex flex-col bg-green-600 border-none shadow-none'>
            <SheetTitle className="mt-24 mb-28 text-center text-2xl text-green-400">
            Easy Keys
          </SheetTitle>

            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link 
                        href={link.path}
                        key={index}
                        className={`${link.path === pathname && 'text-green-400'} text-xl text-accent capitalize hover:text-green-400 ease-in duration-500`}
                        onClick={handleLinkClick}
                        >
                        {link.name}
                        </Link>
                    )
                })}
            </nav>

        </SheetContent>
    </Sheet>
  )
}

export default MobileNav