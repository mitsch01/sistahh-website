import { useEffect, useState } from "react"
import Link from "next/link"
import NavLink from "../components/NavLink"
import Image from "next/image"
import "@fortawesome/fontawesome-free/css/all.min.css"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <header className='sticky top-0 z-20 bg-black backdrop-blur-lg text-2xl text-white'>
      <div className={`absolute left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent transition-all duration-300 ${scrolled ? "-bottom-12" : "-bottom-16"}`}></div>
      <div className='lg:max-w-[796px] md:px-12 lg:px-0 flex items-center justify-between mx-auto relative'>
        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-7 text-[0.9em]'>
          <NavLink text='Home' path='/' />
          <NavLink text='Concerts' path='/#concerts' />
        </div>

        {/* Logo */}
        <div className='flex justify-center flex-1'>
          {!scrolled && (
            <Link href='/'>
              <Image src='/images/Sistahh_Stern_All_gelb.png' alt='SISTAHH Logo' width={200} height={200} className='cursor-pointer priority w-40 md:w-52' />
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

        <div className='hidden md:flex space-x-7 text-[0.9em]'>
          {/* bg-nav-gradient-right bg-clip-text text-transparent */}
          <NavLink
            id='about'
            text='About'
            path='/#about'
            onClick={e => {
              e.preventDefault()
              console.log("About link clicked!")
              scrollToSection() // Call scrollToSection here
            }}
          />
          <NavLink text='Contact' path='/contact' />
        </div>

        {/* Burger Menu for Mobile */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='absolute right-5 top-5 text-2xl focus:outline-none hover:bg-heading-gradient hover:bg-clip-text hover:text-transparent hover:scale-105 transition-transform duration-300'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
      </div>

      {/* Modal Menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-30 bg-black flex flex-col items-center justify-center text-center h-screen'>
          <button onClick={toggleMenu} className='absolute top-5 right-5 text-3xl focus:outline-none hover:bg-heading-gradient hover:bg-clip-text hover:text-transparent hover:scale-105 transition-transform duration-300'>
            <i className='fas fa-times'></i>
          </button>
          <nav className='flex flex-col space-y-5 text-2xl'>
            <Link href='/' onClick={toggleMenu} className='hover:underline'>
              HOME
            </Link>
            <Link href='/#concerts' onClick={toggleMenu} className='hover:underline'>
              CONCERT
            </Link>
            <Link href='/#about' onClick={toggleMenu} className='hover:underline'>
              ABOUT
            </Link>
            <Link href='/contact' onClick={toggleMenu} className='hover:underline'>
              CONTACT
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
