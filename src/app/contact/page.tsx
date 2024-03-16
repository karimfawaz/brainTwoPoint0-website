"use client"
import React from 'react'
import Form from './form'
import useTypewriter from 'react-typewriter-hook';
import localFont from 'next/font/local';

export default function ContactPage() {

    const typewrittenText = useTypewriter("LET US KNOW");
    return (
        <div className="flex flex-col items-center bg-[var(--dark-grey)] md:px-40 px-6 py-8 md:py-24">
            <div className="text-center mb-14">
                <h1 className="text-[var(--light)] text-4xl md:text-7xl mb-6 md:mb-12 font-semibold">{typewrittenText}</h1>
                <p className="text-lg min-[2000px]:text-3xl md:text-2xl leading-relaxed md:w-3/4 min-[2000px]:w-1/2 mx-auto text-[var(--light)]">Interested in solving problems with <span className="font-bold">BRAIN<span className="font-thin">2.0</span></span>? Any questions regarding our <span className='font-thin'>DI<span className='font-bold'>VISIONS</span></span>? Any feedback you would like to share? Simply reach out by filling in this form and we will get back to you as soon as possible.</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-32 h-1  bg-[var(--light)] inline-flex"></div>
                </div>
            </div>
            <Form />

        </div>
    )
}
