import React, { useEffect, useState } from "react"

async function getAbout() {
  const res = await fetch("http://localhost:1337/api/about")
  const data = await res.json()

  if (!data || !data.data) return []
  return data.data.text.map(paragraph => {
    return paragraph.children.map(child => child.text).join("")
  })
}

export default function About() {
  const [aboutContent, setAboutContent] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await getAbout()
        setAboutContent(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchAbout()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <section id='about' className='pt-36'>
      <h1 className='text-4xl mb-12 font-bold text-center bg-heading-gradient bg-clip-text text-transparent'>About</h1>
      <div className='mb-36 text-center px-6'>
        {aboutContent.map((paragraph, index) => (
          <p key={index} className='mt-4'>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}
