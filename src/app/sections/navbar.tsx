'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

const navLinks = [
  { label: 'About', anchor: 'about' },
  { label: 'Enterprise', anchor: 'enterprise' },
  { label: 'Gotcha', anchor: 'gotcha' },
  { label: 'PLAYBACK', anchor: 'playback' },
  { label: 'Content', anchor: 'content' },
  { label: 'CoPilot', anchor: 'freelance' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hrefFor = (anchor: string) => (onHome ? `#${anchor}` : `/#${anchor}`)
  const contactHref = onHome ? '#contact' : '/#contact'
  const logoHref = onHome ? '#hero' : '/'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-b2-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={logoHref} aria-label="BRAIN 2.0 home">
          <Image
            height={28}
            width={140}
            src="/B2.0-textlogo.png"
            alt="Brain 2.0 Logo"
            className="opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.anchor}
              href={hrefFor(link.anchor)}
              className="text-sm tracking-widest uppercase text-b2-light/60 hover:text-b2-teal transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link href={contactHref}>
            <Button
              variant="outline"
              className="border-b2-teal/30 text-b2-teal hover:bg-b2-teal hover:text-b2-black tracking-widest uppercase text-xs px-6 pt-[0.6rem] pb-[0.4rem] transition-all duration-300"
            >
              Reach Out
            </Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-b2-light hover:bg-white/5 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="!bg-b2-black border-white/5 w-64 px-6 pt-16">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.anchor}
                  href={hrefFor(link.anchor)}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-widest uppercase text-b2-light/60 hover:text-b2-teal transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link href={contactHref} onClick={() => setOpen(false)} className="mt-2">
                <Button className="w-full bg-b2-teal text-b2-black hover:bg-b2-teal/80 tracking-widest uppercase text-xs">
                  Reach Out
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
