import React from 'react'
import Form from './form'

export default function Contact() {

    return (
        <section className="snap-center flex flex-row justify-start items-center overflow-scroll no-scrollbar">
            <div className="flex flex-col justify-center items-center h-full w-1/5 md:w-40">
                <h1 className="font-bold text-7xl md:text-9xl text-[var(--teal)] rotate-90 ">CONTACT<span className="font-[100] inter-font">US</span></h1>
            </div>
            <div className="w-full flex flex-col items-center justify-center md:p-12 min-h-screen">
                <h1 className="text-[var(--light)] md:text-6xl text-3xl hidden md:block md:mb-6">LET US KNOW</h1>
                <Form />
            </div>
        </section>
    )
}
