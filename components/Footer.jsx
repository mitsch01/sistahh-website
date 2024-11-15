export default function Footer() {
  return (
    <footer>
      <div className='mx-auto max-w-4xl text-center text-sm mt-20 mb-16'>
        <nav className='footer-menu-container mb-4'>
          <ul className='footer-menu flex justify-center'>
            <li>
              <a className='m-4 hover:underline' href='/datenschutz'>
                Datenschutz
              </a>
            </li>
            <li>
              <a className='m-4 hover:underline' href='/impressum'>
                Impressum
              </a>
            </li>
          </ul>
        </nav>
        <p>&copy; {new Date().getFullYear()} Anne Niemann</p>
      </div>
    </footer>
  )
}
