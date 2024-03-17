import React from 'react'
import Image from 'next/image'
export default function Footer() {
    return (
        <footer className="flex flex-col space-y-4 bg-[var(--dark-grey)] py-6 p-4 ">

            <div className="flex space-x-4">
                <a href="https://www.instagram.com/braintwopoint0/" target="_blank"><Image height={150} width={150} src="/insta.svg" alt="Instagram Icon" className="h-8 w-8" /></a>
                <a href="https://www.linkedin.com/company/98897834" target="_blank"><Image height={150} width={150} src="/linkedin.svg" alt="LinkedIn Icon" className="h-8 w-8" /></a>
            </div>
            <p className="text-[var(--light)]">Copyright © 2024<span className="font-bold"> BRAIN<span className="inter-font font-light">2.0</span></span> LTD.</p>
        </footer>
    )
}
