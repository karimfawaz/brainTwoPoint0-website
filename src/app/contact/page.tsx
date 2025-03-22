"use client"
import React from 'react'
import Form from './form'
import useTypewriter from 'react-typewriter-hook';
import localFont from 'next/font/local';

export default function ContactPage() {

    const typewrittenText = useTypewriter("LET US KNOW");
    return (
        <div className="flex flex-col items-center bg-[var(--dark-grey)] md:px-40 px-6 py-8 md:py-24 container mx-auto">
            <div className="text-center mb-14">
                <h1 className="text-[var(--light)] text-4xl md:text-7xl md:h-20 h-10 font-semibold">{typewrittenText}</h1>
                <div className="flex mt-6 justify-center">
                    <div className="w-32 h-1  bg-[var(--light)] inline-flex"></div>
                </div>
            </div>
            <Form />

        </div>
    )
}
