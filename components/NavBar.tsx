"use client"


import Link from "next/link";
import { usePathname } from "next/navigation"




const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'availability',
        path: '/availability',
    },
    {
        name: 'Gallery',
        path: '/gallery',
    },
    {
        name: 'About Us',
        path: '/about-us',
    },
    
]



function NavBar() {
    const pathname = usePathname();
  return (
   <nav className="flex gap-8 text-xl">{
    links.map((link, index) => {
        return (
            <Link 
            key={index} 
            href={link.path}
            className={`${link.path === pathname && 'text-green-400'} capitalize font-medium hover:text-green-400 ease-in duration-500`}
            >{link.name}</Link>
        )
  
    })
   }</nav>
  )
}

export default NavBar