"use client"

import Image from "next/image"
import Concerts from "../components/Concerts"
import About from "../components/About"
import Anne from "../components/Anne"

export default function Page() {
  return (
    <div>
      {/* Hero Image */}
      <section className='flex justify-center items-center h-screen p-0 overflow-hidden'>
        <img src='https://sistahh.de/wp-content/uploads/2022/11/Kopie-von-1-alle-treppe_3011-1-scaled-e1730808099985.jpg' alt='Group on stairs' className='w-full h-full object-cover priority' />
      </section>

      <div className='m-auto max-w-[860px] p-12'>
        {/* Concerts */}
        <Concerts />

        {/* Image Carousel */}
        <section>
          <div className='flex overflow-hidden'>
            <img src='https://sistahh.de/wp-content/uploads/2022/11/5-Sistah_Prinzenbar_2020_680-Kopie-1-1536x1011.jpg' alt='Sistahh_Prinzenbar' />
            <img src='https://sistahh.de/wp-content/uploads/2022/11/image-1536x864.jpeg' alt='Sistahh_Prinzenbar' />
            <img src='https://sistahh.de/wp-content/uploads/2022/11/image2-1536x864.jpeg' alt='Sistahh_Prinzenbar' />
          </div>
        </section>

        {/* About */}
        <About />

        {/* Videos */}
        <section id='videos' className='group overflow-hidden'>
          <div className='mb-8'>
            <iframe src='https://www.youtube.com/embed/pP-Y2C7-EeI' title='SISTAHH - Ladies Pop Choir | About us' className='transition duration-500 w-full h-72 hover:scale-105' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          </div>
          <div className='mb-8'>
            <iframe src='https://www.youtube.com/embed/gItKI5AHrEM' title='SISTAHH - "Evergreen" von Yebba' className='transition duration-500 w-full h-72 hover:scale-105' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          </div>
          <div>
            <iframe src='https://www.youtube.com/embed/WEj2r9XHNd8' title='SISTAHH - "Brave" von Sara Bareilles"' className='transition duration-500 w-full h-72 hover:scale-105' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          </div>
        </section>

        <Anne />
      </div>
    </div>
  )
}
