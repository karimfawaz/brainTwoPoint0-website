import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-b2-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center gap-6">
          <div>
            <Image
              height={24}
              width={120}
              src="/B2.0-textlogo.png"
              alt="Brain 2.0 Logo"
              className="opacity-70"
            />
            <p className="text-b2-muted text-sm mt-2 hidden sm:block">
              Driven by Values, Powered by Intellect
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/braintwopoint0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                height={28}
                width={28}
                src="/insta.svg"
                alt="Instagram"
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/98897834"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                height={28}
                width={28}
                src="/linkedin.svg"
                alt="LinkedIn"
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
