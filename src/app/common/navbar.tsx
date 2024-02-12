import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed w-screen h-10 md:h-20 flex p-2 md:p-6 justify-center items-center bg-blend-multiply opacity-90 bg-[var(--dark-grey)] z-[1000] space-x-4">
      <Image height={150} width={150} src="/B2.0-icon.svg" alt="Brain 2.0 Icon" className="md:w-11 md:h-11 h-8 w-8" />
      <p className="font-bold text-[var(--software)] hidden md:block">SOFTWARE<span className="inter-font font-light">2.0</span></p>
      <p className="font-bold text-[var(--freelance)] hidden md:block">FREELANCE<span className="inter-font font-light">2.0</span></p>

    </nav>
  )
}
