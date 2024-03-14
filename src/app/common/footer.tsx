import React from 'react'
import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="flex justify-between items-center bg-[var(--dark-grey)] py-6 p-4 ">
            <p className="text-[var(--light)] md:text-sm text-xs">Copyright © 2024<span className="font-bold"> BRAIN<span className="inter-font font-light">2.0</span></span> LTD.</p>
            <div className="flex space-x-4">
                <a href="https://www.instagram.com/braintwopoint0/" target="_blank"><Image height={150} width={150} src="/insta.svg" alt="Instagram Icon" className="md:w-9 md:h-9 h-6 w-6" /></a>
                <a href="https://www.linkedin.com/company/98897834" target="_blank"><Image height={150} width={150} src="/linkedin.svg" alt="LinkedIn Icon" className="md:w-9 md:h-9 h-6 w-6" /></a>
            </div>
        </footer>
    )
}
