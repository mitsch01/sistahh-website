import "@fortawesome/fontawesome-free/css/all.min.css"

export default function SocialIcons() {
  return (
    <div className='z-50 flex flex-col items-center gap-2 sm:gap-3 fixed right-4 bottom-8 lg:top-[43vh] text-2xl sm:text-3xl'>
      <a href='https://www.youtube.com/channel/UCBeoLwuD9m6imyYmj6elDGw'>
        <i className='fa-brands fa-youtube text-white hover:bg-heading-gradient hover:bg-clip-text hover:text-transparent'></i>
      </a>

      <a href='https://www.instagram.com/sista.hh/' target='blank' rel='noopener noreferrer'>
        <i className='fa-brands fa-instagram text-white hover:bg-heading-gradient hover:bg-clip-text hover:text-transparent'></i>
      </a>

      <a href='https://www.facebook.com/sistahh.ladiespopchoir'>
        <i className='fa-brands fa-facebook-f text-white hover:scale-2'></i>
      </a>
    </div>
  )
}
