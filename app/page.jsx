"use client"

import Image from "next/image"
import { useConsent } from "../app/ConsentContext"
import Concerts from "../components/Concerts"
import Carousel from "../components/Carousel"
import About from "../components/About"
import Videos from "../components/Videos"
import Anne from "../components/Anne"
import Contact from "../components/Contact"

export default function Page() {
  const { consentGiven } = useConsent()

  return (
    <div>
      {/* Hero Section */}
      <section className='relative w-full h-screen overflow-hidden'>
        <Image src='/images/Sistahh-Gruppenfoto_Prinzenbar.avif' alt='SISTAHH Gruppenfoto Prinzenbar' fill style={{ objectFit: "cover" }} priority />
      </section>

      {/* Main Content */}
      <section id='home' className='relative z-5 m-auto max-w-[860px]'>
        <Concerts />
        <Carousel />
        <About />
        {consentGiven && <Videos />}
        <Anne />
        <Contact />
      </section>
    </div>
  )
}
