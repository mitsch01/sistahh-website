"use client"

import React, { useEffect, useState } from "react"

async function getVideos() {
  const res = await fetch("http://localhost:1337/api/videos?sort[0]=position:asc")
  const data = await res.json()

  if (!data || !data.data) return []

  return data.data.map(item => {
    return {
      id: item.id,
      link: `${item.videoLink}?rel=0&modestbranding=1`
    }
  })
}

export default function Videos() {
  const [videoContent, setVideoContent] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos()
        setVideoContent(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchVideos()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <section id='videos' className='group overflow-hidden m-8 pb-20'>
      {videoContent.map(video => (
        <div key={video.id} className="sm:mb-8">
          <iframe src={video.link} title={video.title} className='transition duration-500 w-full h-56 sm:h-64 hover:scale-105' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
        </div>
      ))}
    </section>
  )
}
