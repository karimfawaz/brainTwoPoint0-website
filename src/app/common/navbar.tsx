import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-blend-multiply opacity-90 bg-[var(--dark-grey)] z-[1000]">
      <div className='flex items-center md:justify-between p-4 mx-auto max-w-7xl justify-center'>
        <a href="https://www.instagram.com/braintwopoint0/" target='_blank'>
          <Image height={150} width={150} src="/B2.0-icon.svg" alt="Brain 2.0 Icon" className="md:w-11 md:h-11 h-8 w-8" />
        </a>
        <div className='flex space-x-4 text-[var(--teal)]'>
          <p className="font-light text-[var(--light)] hidden md:block">THE<span className="inter-font font-bold">DIVISIONS:</span></p>
          <p className="font-bold hidden md:block">SOFTWARE<span className="inter-font font-light">2.0</span></p>
          <p className="font-bold hidden md:block">FREELANCE<span className="inter-font font-light">2.0</span></p>
          <p className="font-bold hidden md:block">CONTENT<span className="inter-font font-light">2.0</span></p>
        </div>
      </div>

    </nav>
  )
}