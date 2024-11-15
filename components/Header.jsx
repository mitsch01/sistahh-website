"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import NavLink from "../components/NavLink"
import Image from "next/image"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setIsScrolling(true)

      if (window.scrollY > lastScrollY) {
        setRotation(prevRotation => prevRotation + 1)
      } else if (window.scrollY < lastScrollY) {
        setRotation(prevRotation => prevRotation - 1)
      }

      setLastScrollY(window.scrollY)

      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false)
      }, 100)
    }

    let scrollTimeout
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [lastScrollY, isScrolling])

  useEffect(() => {
    let intervalId

    if (scrolled && isScrolling) {
      intervalId = setInterval(() => {}, 20)
    } else {
      clearInterval(intervalId)
    }

    return () => clearInterval(intervalId)
  }, [scrolled, isScrolling])

  return (
    <header className='sticky top-0 z-20 bg-black backdrop-blur-lg text-2xl'>
      <div className={`absolute left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent transition-all duration-300 ${scrolled ? "-bottom-12" : "-bottom-16"}`}></div>
      <div className='max-w-4xl flex items-center justify-between mx-auto px-12 relative'>
        <div className='flex space-x-7 bg-nav-gradient-left bg-clip-text text-transparent'>
          <NavLink text='Home' path='/' />
          <NavLink text='Concerts' path='/#concerts' />
        </div>
        <div className='flex justify-center flex-1'>
          {!scrolled && (
            <Link href='/'>
              <Image src='/images/Sistahh_Stern_All_gelb.png' alt='SISTAHH Logo' width={200} height={200} className='cursor-pointer' />
            </Link>
          )}
          {scrolled && (
            <Link href='/'>
              <Image
                src='/images/Sistahh_Stern_gelb.png'
                alt='SISTAHH Logo'
                width={100}
                height={100}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: "transform 0.1s ease-out"
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className='cursor-pointer'
              />
            </Link>
          )}
        </div>
        <div className='flex space-x-7 bg-nav-gradient-right bg-clip-text text-transparent'>
          <NavLink text='About' path='/#about' />
          <NavLink text='Contact' path='/contact' />
        </div>
      </div>
    </header>
  )
}

export default Header
