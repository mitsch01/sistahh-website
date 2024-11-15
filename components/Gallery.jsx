import React, { useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function Gallery({ isOpen, currentSlide, images, onClose, onPrev, onNext, onGoToSlide }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsImageLoaded(false)
    }
  }, [isOpen])

  const handleKeyPress = event => {
    if (event.key === "ArrowLeft") {
      onPrev()
    } else if (event.key === "ArrowRight") {
      onNext()
    }
    if (event.key === "Escape") {
      onClose()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [currentSlide])

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md flex justify-center items-center z-50' onClick={onClose}>
      <div className='relative w-full h-full max-w-[90%] max-h-[90vh]' onClick={e => e.stopPropagation()}>
        <div className='relative w-full h-full flex items-center justify-center cursor-pointer' onClick={() => onGoToSlide(currentSlide)}>
          <div className='relative w-full h-full flex items-center justify-center'>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Slide ${index + 1}`} className={`absolute max-w-full max-h-full transition-opacity duration-1000 rounded-md ${index === currentSlide ? "opacity-100" : "opacity-0"}`} onLoad={handleImageLoad} style={{ visibility: isImageLoaded ? "visible" : "hidden" }} />
            ))}
          </div>

          <button
            type='button'
            className='absolute top-1/2 left-0 z-50 transform -translate-y-1/2 flex items-center justify-center h-full px-4 cursor-pointer group'
            onClick={e => {
              e.stopPropagation()
              onPrev()
            }}>
            <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50'>
              <FaChevronLeft className='text-white' />
              <span className='sr-only'>Previous</span>
            </span>
          </button>

          <button
            type='button'
            className='absolute top-1/2 right-0 z-50 transform -translate-y-1/2 flex items-center justify-center h-full px-4 cursor-pointer group'
            onClick={e => {
              e.stopPropagation()
              onNext()
            }}>
            <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50'>
              <FaChevronRight className='text-white' />
              <span className='sr-only'>Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}