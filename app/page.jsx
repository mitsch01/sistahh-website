"use client"

import { useConsent } from "../app/ConsentContext"
import Concerts from "../components/Concerts"
import Carousel from "../components/Carousel"
import About from "../components/About"
import Videos from "../components/Videos"
import Anne from "../components/Anne"

export default function Page() {
  const { consentGiven } = useConsent()

  return (
    <div>
      <section className='flex justify-center items-center h-screen p-0 overflow-hidden'>
        <img src='/images/Sistah-Gruppenfoto_Prinzenbar.jpg' alt='SISTAHH Gruppenfoto Prinzenbar' className='w-full h-full object-cover priority' />
      </section>
      <div className='relative bg-cover bg-center bg-custom-pattern'>
        <div className='absolute inset-0 bg-black bg-opacity-90 backdrop-blur-lg'></div>
        <div className='relative z-5 m-auto max-w-[860px]'>
          <Concerts />
          <Carousel />
          <About />
          {consentGiven && <Videos />}
          <Anne />
        </div>
      </div>
    </div>
  )
}
