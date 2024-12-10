"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head"
import { useConsent, ConsentProvider } from "../app/ConsentContext";
import "./globals.css";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";

export default function RootLayout({ children }) {
  return (
    <ConsentProvider>
      <MainContent>{children}</MainContent>
    </ConsentProvider>
  );
}

const MainContent = ({ children }) => {
  const { consentGiven, setConsentGiven } = useConsent();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContentBlurred, setIsContentBlurred] = useState(false);

  // Handle Cookie Modal
  useEffect(() => {
    try {
      const userConsent = localStorage.getItem("cookieConsent")

      if (userConsent === "true") {
        setConsentGiven(true)
        setIsModalOpen(false)
        setIsContentBlurred(false)
      } else if (userConsent === "false") {
        setConsentGiven(false)
        setIsModalOpen(false)
        setIsContentBlurred(false)
      } else {
        // For first-time users or if `userConsent` is `null`
        setIsModalOpen(true)
        setIsContentBlurred(true)
      }
    } catch (error) {
      console.error("Error handling localStorage:", error)
      setIsModalOpen(true) // Fail-safe: Show modal if there's an issue
      setIsContentBlurred(true)
    }
  }, [setConsentGiven])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setConsentGiven(true);
    setIsModalOpen(false);
    setIsContentBlurred(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setConsentGiven(false);
    setIsModalOpen(false);
    setIsContentBlurred(false);
  };

  return (
    <html lang='en'>
      <Head>
        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        {/* Social Media Preview */}
        <meta property='og:title' content='SISTAHH – Ladies Popchor Hamburg' />
        <meta property='og:description' content='Wir sind SISTAHH, ein Popchor aus Hamburg, bekannt für unseren mitreißenden Sound und die facettenreichen Arrangements unserer Chorleiterin Anne Niemann. Mit einer einzigartigen Mischung aus Soul, Pop und Jazz begeistern wir unser Publikum immer wieder aufs Neue.' />
        <meta property='og:image' content='/og-image.jpg' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://sistahh.de' />
      </Head>
      <body>
        <Modal isOpen={isModalOpen} disableCloseOutsideClick={true} message='Wir nutzen nur notwendige Technologien auf dieser Website. Für YouTube setzen wir einen zusätzlichen Cookie. Einverstanden?' icon='fas fa-cookie-bite' acceptText='Logisch' declineText='Ohne Videos' handleAccept={handleAccept} handleDecline={handleDecline} />
        <div className={`${isContentBlurred ? "backdrop-blur-lg" : ""}`}>
          <div className='relative bg-custom-pattern bg-cover bg-center min-h-screen'>
            <div className='absolute inset-0 bg-black bg-opacity-80 backdrop-blur-lg'></div>
            <div className='relative z-10 min-h-[100dvh] grid grid-rows-[auto_1fr_auto] text-white'>
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </div>
        <SocialIcons />
      </body>
    </html>
  )
};