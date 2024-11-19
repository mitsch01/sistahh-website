"use client"

import { useState, useRef } from "react"
import emailjs from "emailjs-com"
import Modal from "./Modal"

export default function EmailForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [hiddenField, setHiddenField] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState("")
  const [modalIcon, setModalIcon] = useState("")

  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    if (hiddenField) {
      console.warn("Spam bot detected! Ignoring submission.")
      return
    }

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVER_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_USER_ID).then(
      result => {
        console.log(result.text)
        setModalMessage("Danke! Wir melden uns bei dir.")
        setModalIcon("fas fa-check-circle")
        setModalOpen(true)

        // Reset form fields
        setName("")
        setEmail("")
        setMessage("")
      },
      error => {
        console.log(error.text)
        setModalMessage("Oops! Das hat leider nicht geklappt.")
        setModalIcon("fas fa-times-circle")
        setModalOpen(true)
      }
    )
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className='space-y-4 text-black'>
        <input type='text' name='company' value={hiddenField} onChange={e => setHiddenField(e.target.value)} className='hidden' aria-hidden='true' />

        <div className='pb-4'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-400'>
            Name
          </label>
          <input type='text' id='name' name='from_name' value={name} onChange={e => setName(e.target.value)} required className='mt-1 block w-full p-2 border border-[#fff8b2]' />
        </div>

        <div className='pb-4'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-400'>
            E-Mail
          </label>
          <input type='email' id='email' name='from_email' value={email} onChange={e => setEmail(e.target.value)} required className='mt-1 block w-full p-2 border border-[#fff8b2]' />
        </div>

        <div className='pb-8'>
          <label htmlFor='message' className='block text-sm font-medium text-gray-400'>
            Nachricht
          </label>
          <textarea id='message' name='message' rows='4' value={message} onChange={e => setMessage(e.target.value)} required className='mt-1 block w-full p-2 border border-[#fff8b2]' />
        </div>

        <div className='flex justify-center'>
          <button type='submit' className='bg-white px-4 py-2 text-black rounded hover:bg-heading-gradient'>
            Absenden
          </button>
        </div>
      </form>

      {/* Modal Component */}
      <Modal isOpen={modalOpen} disableCloseOutsideClick={false} onClose={() => setModalOpen(false)} message={modalMessage} icon={modalIcon} />
    </>
  )
}
