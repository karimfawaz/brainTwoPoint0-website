import React from 'react'
import Image from 'next/image'
export default function Navbar() {
  return (
    <nav className="absolute top-0 w-screen flex p-2 md:p-6 justify-between items-center">
      <Image height={150} width={150} src="/B2.0-icon.svg" alt="Brain 2.0 Icon" className="md:w-20 md:h-20 h-10 w-10" />
      <div className="flex md:w-44 w-1/5 justify-between">
        <a href="https://www.instagram.com/braintwopoint0/"><Image height={150} width={150} src="/insta.svg" alt="Instagram Icon" className="md:w-16 md:h-16 h-8 w-8" /></a>
        <a href="https://www.linkedin.com/company/98897834"><Image height={150} width={150} src="/linkedin.svg" alt="LinkedIn Icon" className="md:w-16 md:h-16 h-8 w-8" /></a>
      </div>
    </nav>
  )
}
