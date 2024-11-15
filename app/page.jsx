"use client"

import Image from "next/image"
import Concerts from "../components/Concerts"
import About from "../components/About"
import Anne from "../components/Anne"
import Carousel from "../components/Carousel"

export default function Page({ consentGiven }) {
  return (
    <div>
      {/* Hero Image */}
      <section className='flex justify-center items-center h-screen p-0 overflow-hidden'>
        <img src='/images/Sistah-Gruppenfoto_Prinzenbar.jpg' alt='SISTAHH Gruppenfoto Prinzenbar' className='w-full h-full object-cover' />
      </section>
      {/* Background Image for Content */}
      <div className='relative bg-cover bg-center bg-custom-pattern'>
        {/* Overlay for transparency and blur */}
        <div className='absolute inset-0 bg-black bg-opacity-90 backdrop-blur-lg'></div>

        {/* Content Wrapper */}
        <div className='relative z-5 m-auto max-w-[860px]'>
          {/* Concerts */}
          <Concerts />

          {/* Image Carousel */}
          <Carousel />

          {/* About */}
          <div className='flex justify-center'>
            <About />
          </div>

          {/* Videos */}
          {/* {consentGiven && ( */}
          <section id='videos' className='group overflow-hidden m-8'>
            <div className='mb-8 sm:mb-16'>
              <iframe src='https://www.youtube-nocookie.com/embed/pP-Y2C7-EeI?rel=0&modestbranding=1' title='SISTAHH - Ladies Pop Choir | About us' className='transition duration-500 w-full h-64 hover:scale-105' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
            </div>
            <div className='mb-8 sm:mb-16'>
              <iframe src='https://www.youtube-nocookie.com/embed/gItKI5AHrEM?rel=0&modestbranding=1' title='SISTAHH - "Evergreen" von Yebba' className='transition duration-500 w-full h-64 hover:scale-105' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
            </div>
            <div>
              <iframe src='https://www.youtube-nocookie.com/embed/WEj2r9XHNd8?rel=0&modestbranding=1' title='SISTAHH - "Brave" von Sara Bareilles' className='transition duration-500 w-full h-64 hover:scale-105' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
            </div>
          </section>
          {/* )} */}

          {/* Anne */}
          <Anne />
        </div>
      </div>
    </div>
  )
}
