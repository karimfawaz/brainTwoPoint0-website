import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="sticky pt-10 top-0 bg-[var(--dark-grey)] z-[1000]">
      <div className='flex max-w-[110rem] justify-between m-auto px-6 min-[1800px]:px-0 pb-6 items-center no-scrollbar overflow-scroll'>
        <div className='flex flex-col justify-center'>

          <Link href="/">
            <Image height={30} width={150} src="/B2.0-textlogo.png" alt="Brain 2.0 Logo" />
          </Link>

          <div className='flex space-x-4 mt-5 text-xs md:text-base text-[var(--light)]'>

            <Link href="/about">
              <p className="font-bold cursor-pointer hover:text-white hover:underline hover:underline-offset-4">ABOUT<span className="inter-font font-light">US</span></p>
            </Link>

            <Link href="/freelance">
              <p className="font-bold cursor-pointer hover:text-white hover:underline hover:underline-offset-4">FREELANCE<span className="inter-font font-light">2.0</span></p>
            </Link>

            <Link href="/content">
              <p className="font-bold cursor-pointer hover:text-white hover:underline hover:underline-offset-4">CONTENT<span className="inter-font font-light">2.0</span></p>
            </Link>

            <Link href="/playback">
              <p className="font-bold cursor-pointer hover:text-white hover:underline hover:underline-offset-4">PLAYBACK</p>
            </Link>

          </div>
        </div>
        <button className="bg-[var(--light)] text-[var(--black)] px-10 font-bold h-12 hidden md:block hover:bg-[var(--teal)]"><Link href="/contact">REACH OUT</Link></button>
      </div>
    </nav>
  )
}