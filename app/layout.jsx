"use client";

import React, { useState, useEffect } from "react";
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
    const userConsent = localStorage.getItem("cookieConsent");

    if (userConsent === "true") {
      setConsentGiven(true);
      setIsModalOpen(false);
      setIsContentBlurred(false);
    } else if (userConsent === "false") {
      setConsentGiven(false);
      setIsModalOpen(false);
      setIsContentBlurred(false);
    } else {
      setIsModalOpen(true); // Show modal for first-time users
      setIsContentBlurred(true);
    }
  }, [setConsentGiven]);

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