
import React from 'react'


export default function About() {
    return (
        <section className="h-full snap-center flex flex-row justify-start items-center">
            <div className="flex flex-col justify-center items-center h-full w-1/5 md:w-40">
                <h1 className="font-bold text-7xl md:text-9xl text-white rotate-90 ">ABOUT<span className="font-[100] inter-font">US</span></h1>
            </div>
            <div className="w-full h-full flex flex-col items-center p-4 md:p-12">
                <h1 className="font-bold text-3xl md:text-9xl text-[var(--light)]">BRAIN 2.<span className="font-[100] inter-font">&quot;OOH&quot;</span></h1>
            </div>
        </section>
    )
}
