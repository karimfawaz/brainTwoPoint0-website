import React from 'react'

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-screen flex p-4 md:p-8 justify-between items-center">
      <img src="/B2.0-icon.svg" alt="Brain 2.0 Icon" className="md:w-20 md:h-20 h-10 w-10" />
      <div className="flex md:w-44 w-1/3 justify-evenly">
        <a href="https://www.instagram.com/braintwopoint0/"><img src="/insta.svg" alt="Instagram Icon" className="md:w-16 md:h-16 h-8 w-8" /></a>
        <a href="https://www.linkedin.com/company/98897834"><img src="/linkedin.svg" alt="LinkedIn Icon" className="md:w-16 md:h-16 h-8 w-8" /></a>
      </div>
    </nav>
  )
}
