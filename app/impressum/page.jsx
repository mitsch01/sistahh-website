"use client"

import React, { useEffect, useState } from "react"

async function getImpressum() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/impressum?populate=*`)
  const data = await res.json()

  // Log the data structure for clarity
  console.log(JSON.stringify(data, null, 2))

  // Destructure fields directly from `data.data`
  const { anneNameEmail, anneAdresse, fotografName, fotografLink, webdevName, webdevLink } = data.data

  // Extract the link URLs and texts
  const fotografLinkData = fotografLink?.[0]?.children?.find(child => child.type === "link") || null
  const webdevLinkData = webdevLink?.[0]?.children?.find(child => child.type === "link") || null

  return {
    anneNameEmail,
    anneAdresse,
    fotografName,
    webdevName,
    fotografLink: fotografLinkData?.url || null,
    fotografText: fotografLinkData?.children?.[0]?.text || null,
    webdevLink: webdevLinkData?.url || null,
    webdevText: webdevLinkData?.children?.[0]?.text || null
  }
}

export default function Impressum() {
  const [impressumContent, setImpressumContent] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  console.log("impressumContent:", impressumContent)

  useEffect(() => {
    const fetchImpressum = async () => {
      try {
        const data = await getImpressum()
        setImpressumContent(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    // Only fetch data after the initial render
    setTimeout(() => {
      fetchImpressum()
    }, 100) // Slight delay to improve perceived load time
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  const { anneNameEmail, anneAdresse, fotografName, fotografLink, webdevName, webdevLink } = impressumContent

  return (
    <div className='relative z-10 flex flex-col items-center justify-center h-full m-auto max-w-[860px] text-center px-4 text-sm sm:text-base'>
      <div className='py-8'>
        <h1 className='text-4xl mb-8 font-bold'>Impressum</h1>
        <div className='leading-loose'>
          <p>{anneNameEmail}</p>
          <p>{anneAdresse}</p>
          <p>
            Bildnachweis:{" "}
            {fotografLink && (
              <a href={fotografLink} className='hover:underline' target='_blank' rel='noopener noreferrer'>
                {fotografName}
              </a>
            )}
          </p>
          <p>
            Web Development:{" "}
            {webdevLink && (
              <a href={webdevLink} className='hover:underline' target='_blank' rel='noopener noreferrer'>
                {webdevName}
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
