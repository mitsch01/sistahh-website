"use client"

import { useState, useEffect } from "react"
import "./globals.css"
import Footer from "../components/Footer"
import NavLink from "../components/NavLink"
import Image from "next/image"


export default function RootLayout({ children }) {
const [scrolled, setScrolled] = useState(false)
const [rotation, setRotation] = useState(0)

useEffect(() => {
  let lastScrollY = 0
  let timeoutId

  const handleScroll = () => {
    if (window.scrollY > 50 && !scrolled) {
      setScrolled(true) 
    } else if (window.scrollY <= 50 && scrolled) {
      setScrolled(false) 
    }

    if (window.scrollY > 50) {
      setRotation(window.scrollY / 50)
    }

    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      setScrolled(window.scrollY > 50)
    }, 100)
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
    clearTimeout(timeoutId)
  }
}, [scrolled])



  return (
    <html lang='en'>
      <body>
        <div className='bg-black min-h-[100dvh] grid grid-rows-[auto_1fr_auto] text-white'>
          <header className='sticky top-0 z-50 bg-black bg-opacity-30 backdrop-blur-lg text-lg'>
            <div className='max-w-4xl flex items-center justify-between mx-auto px-12 relative'>
              {/* Left-side menu */}
              <div className='flex space-x-7'>
                <NavLink text='Home' path='/' />
                <NavLink text='Concerts' path='/#concerts' />
              </div>

              {/* Centered logo */}
              <div className='flex justify-center flex-1'>
                {/* First logo (static) */}
                {!scrolled && <Image src='/images/Sistahh_Stern_All_gelb.png' alt='SISTAHH Logo' width={200} height={200} />}

                {/* Second logo (rotating) when scrolled */}
                {scrolled && (
                  <Image
                    src='/images/Sistahh_Stern_gelb.png'
                    alt='SISTAHH Logo'
                    width={100}
                    height={100}
                    style={{
                      transform: `rotate(${rotation}deg)`, 
                      transition: "transform 0.1s ease-out" 
                    }}
                  />
                )}
              </div>

              {/* Right-side menu */}
              <div className='flex space-x-7'>
                <NavLink text='About' path='/#about' />
                <NavLink text='Contact' path='/contact' />
              </div>

              {/* Bottom gradient effect */}
              {!scrolled && <div className='absolute -bottom-16 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent'></div>}
            </div>
          </header>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
