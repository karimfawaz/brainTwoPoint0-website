import React from 'react';
import Image from 'next/image';

export default function Header() {

    return (
        <section className="flex flex-col items-center justify-center bg-[var(--dark-grey)] py-16 ">
            <Image height={750} width={900} src="/B2.0-textlogo.png" className="md:p-0 px-4" alt="Brain 2.0 Logo" />
            <p className="text-[var(--light)] mt-4 text-sm text-center md:text-3xl">DRIVEN BY VALUES, POWERED BY INTELLECT</p>
        </section>


    );
}
