import React, { useEffect, useState } from "react"
import Image from "next/image"

// Fetching data from the API
async function getAnne() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/anne`)
    const data = await res.json()

    if (!data || !data.data) return []
    return data.data.text.map(paragraph => paragraph.children.map(child => child.text).join(""))
  } catch (error) {
    console.error("Error fetching Anne data:", error)
    throw error
  }
}

export default function Anne() {
  const [anneContent, setAnneContent] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAnne = async () => {
      try {
        const data = await getAnne()
        setAnneContent(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    // Only fetch data after the initial render
    setTimeout(() => {
    fetchAnne()
    }, 100) // Slight delay to improve perceived load time
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <section id='anne' className='pt-12'>
      <h1 className='text-4xl mb-12 font-bold text-center bg-heading-gradient bg-clip-text text-transparent'>Unsere Oberschwester</h1>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Column: Image */}
        <div className='left-column overflow-hidden'>
          <Image src='/images/Anne_Prinzenbar.avif' alt='Anne' width={500} height={500} className='image w-full h-full object-cover mask-image-mask blur-edges transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-2' />
        </div>

        {/* Right Column: Text Content */}
        <div className='right-column'>
          {anneContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
