import React, { useEffect, useState } from "react"

async function getConcerts() {
  const res = await fetch("http://localhost:1337/api/konzerttermine?populate=*")
  const data = await res.json()
  console.log(data)

  if (!data || !data.data || !data.data.Konzerttermine || data.data.Konzerttermine.length === 0) {
    return { upcoming: [], past: [] }
  }

  const today = new Date() // Current date for filtering

  // Split and sort concerts
  const upcoming = []
  const past = []

  data.data.Konzerttermine.forEach(concert => {
    const concertDate = new Date(concert.datum)
    const concertData = {
      id: concert.id,
      datum: concert.datum,
      time: concert.time,
      stadt: concert.stadt,
      location: concert.location,
      link: concert.ticketLink
    }

    if (concertDate >= today) {
      upcoming.push(concertData) // Add to upcoming if the date is today or later
    } else {
      past.push({ ...concertData, link: null }) // Add to past with ticket link removed
    }
  })

  return {
    upcoming: upcoming.sort((a, b) => new Date(a.datum) - new Date(b.datum)), // Sort ascending
    past: past.sort((a, b) => new Date(b.datum) - new Date(a.datum)) // Sort descending
  }
}

export default function Page() {
  const [upcomingConcerts, setUpcomingConcerts] = useState([])
  const [pastConcerts, setPastConcerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const { upcoming, past } = await getConcerts()
        setUpcomingConcerts(upcoming)
        setPastConcerts(past)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchConcerts()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <section id='concerts' className='pt-36'>
      {/* Upcoming Concerts Section */}
      <h1 className='text-4xl mb-12 font-bold text-center bg-heading-gradient bg-clip-text text-transparent'>Concerts</h1>
      <div className='mb-24 max-w-[860px] mx-auto text-left'>
        {upcomingConcerts.length > 0 ? (
          <div className='mb-4 p-4 border-b-[1px] border-white flex justify-between'>
            {upcomingConcerts.map(concert => (
              <React.Fragment key={concert.id}>
                {/* Column 1: Date & Time */}
                <div>
                  <p>
                    {/* Format the date */}
                    {new Date(concert.datum).toLocaleDateString("de-DE", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </p>
                  <p>
                    {/* Format the time */}
                    {concert.time
                      ? new Date(`1970-01-01T${concert.time}Z`).toLocaleTimeString("de-DE", {
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false
                        })
                      : "No Time"}{" "}
                    Uhr
                  </p>
                </div>

                {/* Column 2: City & Location */}
                <div>
                  <p>{concert.location}</p>
                  <p>{concert.stadt}</p>
                </div>

                {/* Column 3: Ticket Button */}
                <div className='flex items-center'>
                  {concert.link ? (
                    <button className='bg-white px-4 py-2 text-black rounded hover:bg-gray-200'>
                      <a href={concert.link} target='_blank' rel='noopener noreferrer'>
                        Tickets
                      </a>
                    </button>
                  ) : (
                    <p>Keine Tickets erhältlich.</p>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <p className='text-center'>Die nächsten Konzerte sind schon in Planung.</p>
        )}
      </div>

      {/* Past Concerts Section */}
      <h2 className='text-2xl mb-4 font-bold text-center text-[#363636]'>Past Dates</h2>
      <div className='mb-24 max-w-[860px] mx-auto text-left text-[#363636]'>
        {pastConcerts.length > 0 ? (
          pastConcerts.map(concert => (
            <div key={concert.id} className='flex justify-between items-center mb-4 p-2 border-b-[1px] border-[#363636] '>
              {/* Column 1: Date & Time */}
              <div className='flex-1'>
                <p>
                  {new Date(concert.datum).toLocaleDateString("de-DE", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </p>
              </div>

              {/* Column 2: City & Location */}
              <div className='flex-1 text-right'>
                <p>{concert.location}</p>
                <p>{concert.stadt}</p>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center'>Die nächsten Konzerte sind schon in Planung.</p>
        )}
      </div>
    </section>
  )
}
