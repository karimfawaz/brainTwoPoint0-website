"use client"
import React, { useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Navbar from '../common/navbar';

export default function Header() {
    const nextSectionRef = useRef<HTMLDivElement | null>(null);

    const scrollToNextSection = () => {
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <section className="relative h-full w-full snap-center flex flex-col items-center justify-center">
                <Navbar />
                <img src="/B2.0-textlogo.png" className="md:w-1/2 w-4/5" alt="Logo" />
                <p className="text-[var(--light)] mt-4 text-sm md:text-5xl">DRIVEN BY VALUES, POWERED BY INTELLECT</p>
                <div className="absolute bottom-5 animate-bounce" onClick={scrollToNextSection}>
                    <FaChevronDown className="text-[var(--light)] text-3xl md:text-6xl" />
                </div>
            </section>
            <div ref={nextSectionRef}></div>

        </>
    );
}
