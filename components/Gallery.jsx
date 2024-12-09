import React, { useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import "@fortawesome/fontawesome-free/css/all.min.css"

export default function Gallery({ isOpen, currentSlide, images, onClose, onPrev, onNext, onGoToSlide, icon }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  // Reset image load status when gallery opens
  useEffect(() => {
    if (isOpen) setIsImageLoaded(false)
  }, [isOpen])

  // Handle keypress for navigation and closing
  useEffect(() => {
    const handleKeyPress = event => {
      switch (event.key) {
        case "ArrowLeft":
          onPrev()
          break
        case "ArrowRight":
          onNext()
          break
        case "Escape":
          onClose()
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [onPrev, onNext, onClose])

  // Handle image loading
  const handleImageLoad = () => setIsImageLoaded(true)

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md flex justify-center items-center z-50'
      onClick={onClose} // Close modal when clicking outside
    >
      <div
        className='relative w-full h-full max-w-[90%] max-h-[90vh]'
        onClick={e => e.stopPropagation()} // Prevent clicks inside modal from closing it
      >
        {/* Close Button */}
        <button
          onClick={e => {
            e.stopPropagation() // Prevent parent click handler
            onClose() // Close the modal
          }}
          className='z-50 absolute top-5 right-5 text-3xl focus:outline-none hover:scale-110 transition-transform duration-300'
          aria-label='Close Gallery'>
          <i className='fas fa-times'></i>
        </button>

        {/* Image Viewer */}
        <div className='relative w-full h-full flex items-center justify-center'>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className={`absolute max-w-full max-h-full transition-opacity duration-1000 rounded-md ${index === currentSlide ? "opacity-100" : "opacity-0"}`} onLoad={handleImageLoad} />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          type='button'
          className='absolute top-1/2 left-0 z-45 transform -translate-y-1/2 flex items-center h-full px-4 cursor-pointer group'
          onClick={e => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label='Previous Slide'>
          <span className='inline-flex items-center p-[6px] w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50'>
            <FaChevronLeft className='text-white text-2xl' />
          </span>
        </button>

        <button
          type='button'
          className='absolute top-1/2 right-0 z-45 transform -translate-y-1/2 flex items-center h-full px-4 cursor-pointer group'
          onClick={e => {
            e.stopPropagation()
            onNext()
          }}
          aria-label='Next Slide'>
          <span className='inline-flex items-center p-[9px] w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50'>
            <FaChevronRight className='text-white text-2xl' />
          </span>
        </button>
      </div>
    </div>
  )
}
