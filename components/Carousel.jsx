import { useState } from "react"
import Image from "next/image"
import FullScreenModal from "./Gallery"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa" // Import FontAwesome icons

export default function Carousel() {
  // Array of images
  const images = ["/images/Sistahh_Prinzenbar_1.avif", "/images/Sistahh_Prinzenbar_2.avif", "/images/Sistahh_Prinzenbar_3.avif", "/images/Sistahh_Prinzenbar_4.avif", "/images/Sistahh_Prinzenbar_5.avif", "/images/Sistahh_Prinzenbar_6.avif", "/images/Sistahh_Prinzenbar_7.avif", "/images/Sistahh_Prinzenbar_8.avif", "/images/Sistahh_Prinzenbar_9.avif", "/images/Sistahh_Prinzenbar_10.avif", "/images/Sistahh_Prinzenbar_11.avif", "/images/Sistahh_Prinzenbar_12.avif"]

  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false) // Modal state

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // Go to the next slide
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === images.length - 1 ? 0 : prev + 1))
  }

  // Go to a specific slide based on dot click
  const goToSlide = index => {
    setCurrentSlide(index)
  }

  // Open Modal
  const openModal = index => {
    setCurrentSlide(index)
    setIsModalOpen(true)
  }

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className='relative w-full cursor-pointer m-auto sm:px-8'>
      {/* Carousel images */}
      <div className='relative sm:h-[500px] h-96'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            onClick={() => openModal(index)} // Open modal when image is clicked
          >
            <Image src={image} alt={`Slide ${index + 1}`} fill className='object-cover' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
          </div>
        ))}
      </div>

      {/* Custom Previous Button */}
      <button type='button' className='absolute top-0 left-0 sm:left-8 z-5 flex items-center justify-center h-full px-4 cursor-pointer group' onClick={prevSlide}>
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50'>
          <FaChevronLeft className='text-white' />
          <span className='sr-only'>Previous</span>
        </span>
      </button>

      {/* Custom Next Button */}
      <button type='button' className='absolute top-0 right-0 sm:right-8 z-5 flex items-center justify-center h-full px-4 cursor-pointer group' onClick={nextSlide}>
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50'>
          <FaChevronRight className='text-white' />
          <span className='sr-only'>Next</span>
        </span>
      </button>

      {/* Navigation Dots */}
      <div className='absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-5'>
        {images.map((_, index) => (
          <button key={index} className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white"}`} onClick={() => goToSlide(index)}></button>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <FullScreenModal isOpen={isModalOpen} currentSlide={currentSlide} images={images} onClose={closeModal} onPrev={prevSlide} onNext={nextSlide} onGoToSlide={goToSlide} />
    </section>
  )
}
