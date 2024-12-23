import React, { useEffect } from "react"
import "@fortawesome/fontawesome-free/css/all.min.css"

export default function Modal({ isOpen, onClose, message, icon, acceptText, declineText, handleAccept, handleDecline, disableCloseOutsideClick = false }) {
  // Handle overlay click to close modal, respecting the disableCloseOutsideClick prop
  const handleOverlayClick = e => {
    if (!disableCloseOutsideClick && onClose) {
      onClose()
    }
  }

  // Listen for the "Escape" key to close modal
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [onClose])

  // Handle touchstart for better mobile support
  useEffect(() => {
    const handleTouchStart = e => {
      if (!disableCloseOutsideClick && onClose) {
        onClose()
      }
    }

    if (!disableCloseOutsideClick) {
      document.addEventListener("touchstart", handleTouchStart)
    }

    return () => {
      if (!disableCloseOutsideClick) {
        document.removeEventListener("touchstart", handleTouchStart)
      }
    }
  }, [onClose, disableCloseOutsideClick])

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'
      onClick={handleOverlayClick} // Close modal if clicking outside
    >
      <div
        className='bg-white rounded-md p-6 w-5/6 sm:w-1/2 max-w-96'
        onClick={e => e.stopPropagation()} // Prevent closing the modal when clicked inside
      >
        <div className='flex items-center justify-center mb-4'>
          <i className={`fa-3x ${icon} bg-button-icon-gradient bg-clip-text text-transparent`}></i>{" "}
        </div>
        <p className='text-center text-gray-700'>{message}</p>

        {/* Conditionally render buttons if the texts are provided */}
        {(acceptText || declineText) && (
          <div className='flex justify-center space-x-4 mt-4'>
            {acceptText && (
              <button className='bg-gray-800 hover:bg-gray-600 hover:scale-105 transition-transform duration-300 text-white px-8 py-2 rounded' onClick={handleAccept}>
                {acceptText}
              </button>
            )}
            {declineText && (
              <button className='bg-gray-800 hover:bg-gray-600 hover:scale-105 transition-transform duration-300 text-white px-4 py-2 rounded' onClick={handleDecline}>
                {declineText}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
