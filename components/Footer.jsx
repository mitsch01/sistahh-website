export default function Footer() {
  return (
    <footer>
      <div className='mx-auto max-w-4xl text-center py-6 text-sm'>
        <nav className='footer-menu-container mb-4'>
          <ul className='footer-menu flex justify-center'>
            <li>
              <a className='m-4 hover:underline' href='https://sistahh.de/datenschutz/'>
                Datenschutz
              </a>
            </li>
            <li>
              <a className='m-4 hover:underline' href='https://sistahh.de/impressum/'>
                Impressum
              </a>
            </li>
            <li>
              <a className='m-4 hover:underline' href='https://sistahh.de/?taxonomy=nav_menu&term=cookies'>
                Cookies
              </a>
            </li>
          </ul>
        </nav>
        <p>&copy; {new Date().getFullYear()} Anne Niemann</p>
      </div>
    </footer>
  )
}
