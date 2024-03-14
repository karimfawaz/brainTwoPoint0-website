"use client"
import React from 'react'

import useTypewriter from 'react-typewriter-hook';

export default function Freelance() {
    const typewrittenText = useTypewriter("WORKING ON IT...");
    return (
        <div className="flex flex-col justify-center items-center bg-[var(--dark-grey)] md:px-40 px-6 min-h-screen -mt-32 md:-mt-32 -mb-20">
            <h1 className="text-[var(--light)] text-3xl md:text-6xl md:mb-20 mb-6 font-semibold">{typewrittenText}</h1>


        </div>
    )
}
