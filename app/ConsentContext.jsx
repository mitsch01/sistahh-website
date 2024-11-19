import { createContext, useContext, useState } from "react"

const ConsentContext = createContext()

export const ConsentProvider = ({ children }) => {
  const [consentGiven, setConsentGiven] = useState(false)

  return <ConsentContext.Provider value={{ consentGiven, setConsentGiven }}>{children}</ConsentContext.Provider>
}

export const useConsent = () => {
  const context = useContext(ConsentContext)

  if (!context) {
    throw new Error("useConsent must be used within a ConsentProvider")
  }

  return context
}