"use client"
import React from 'react'
import Form from './form'
import useTypewriter from 'react-typewriter-hook';

export default function ContactPage() {
    const typewrittenText = useTypewriter("LET US KNOW");
    return (
        <div className="flex flex-col justify-center items-center bg-[var(--dark-grey)] md:px-40 px-6 min-h-screen -mt-16 md:-mt-32 -mb-20">
            <h1 className="text-[var(--light)] text-3xl md:text-6xl md:mb-20 mb-6 font-semibold">{typewrittenText}</h1>
            <Form />

        </div>
    )
}
