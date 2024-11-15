"use client"

import { useState, useEffect } from "react"
import "./globals.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Modal from "../components/Modal"
import SocialIcons from "../components/SocialIcons"

export default function RootLayout({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(true) // Modal open on initial load
  const [isContentBlurred, setIsContentBlurred] = useState(true) // Blur content until consent is given
  const [consentGiven, setConsentGiven] = useState(false)

  // Check if the user has already interacted with the cookie consent modal
  useEffect(() => {
    const userConsent = localStorage.getItem("cookieConsent")
    if (userConsent === "true") {
      setConsentGiven(true)
      setIsContentBlurred(false) // Remove blur after consent is given
    } else if (userConsent === "false") {
      setConsentGiven(false)
      setIsContentBlurred(false) // No blur for declined consent
    }
  }, [])

  // Handle modal close and user consent
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setConsentGiven(true)
    setIsModalOpen(false)
    setIsContentBlurred(false) // Remove blur once consent is given
  }

  // Handle cookie decline
  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false")
    setConsentGiven(false)
    setIsModalOpen(false)
    setIsContentBlurred(false) // Remove blur even if consent is declined
  }

  return (
    <>
      <html lang='en'>
        <body>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)} // Close modal when clicked outside or Escape key is pressed
            message='Wir nutzen YouTube auf unserer Seite und setzen einen Cookie – einverstanden?'
            icon='fas fa-cookie-bite' // Icon class
            acceptText='Logisch!' // Button text for accepting cookies
            declineText='Ohne Videos.' // Button text for declining cookies
            handleAccept={handleAccept} // Pass handleAccept function
            handleDecline={handleDecline} // Pass handleDecline function
          />

          {/* Main content, blurred while modal is open */}
          <div className={`${isContentBlurred ? "backdrop-blur-lg" : ""}`}>
            <div className='relative bg-custom-pattern bg-cover bg-center min-h-screen'>
              {/* Background Blur and Overlay */}
              <div className='absolute inset-0 bg-black bg-opacity-90 backdrop-blur-lg'></div>
              <div className='relative z-10 min-h-[100dvh] grid grid-rows-[auto_1fr_auto] text-white'>
                <Header scrolled={scrolled} rotation={rotation} />
                {/* Pass consentGiven as a prop to the children */}
                <main>{children}</main>
                <Footer />
              </div>
            </div>
          </div>
          <SocialIcons />
        </body>
      </html>
    </>
  )
}
