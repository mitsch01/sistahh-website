import React, { useEffect, useState } from "react"

async function getAnne() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/anne`)
  const data = await res.json()

  if (!data || !data.data) return []
  return data.data.text.map(paragraph => {
    return paragraph.children.map(child => child.text).join("")
  })
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
    fetchAnne()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <section id='anne' className='-mt-8 sm:pt-12 mb-16 mx-10'>
      <h1 className='text-4xl mb-12 font-bold text-center bg-heading-gradient bg-clip-text text-transparent'>Unsere Oberschwester</h1>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='left-column overflow-hidden'>
          <img src='/images/Anne_Prinzenbar.avif' alt='Anne' className='image w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-3' />
        </div>
        <div className='right-column'>
          {anneContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
