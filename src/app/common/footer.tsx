import React from 'react'
import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="flex justify-between items-center bg-[var(--dark-grey)] py-6 p-4 border-t-2 border-[var(--light)]">
            <p className="text-[var(--light)] md:text-lg text-xs">Copyright © 2024<span className="font-bold"> BRAIN<span className="inter-font font-light">2.0</span></span></p>
            <div className="flex space-x-4">
                <a href="https://www.instagram.com/braintwopoint0/"><Image height={150} width={150} src="/insta.svg" alt="Instagram Icon" className="md:w-12 md:h-12 h-6 w-6" /></a>
                <a href="https://www.linkedin.com/company/98897834"><Image height={150} width={150} src="/linkedin.svg" alt="LinkedIn Icon" className="md:w-12 md:h-12 h-6 w-6" /></a>
            </div>
        </footer>
    )
}
