import React from 'react'
import Image from 'next/image'

export default function Freelance() {
    return (
        <section className="h-screen snap-center flex flex-row justify-start items-center w-screen pt-20 md:pt-36">
            <div className="flex flex-col justify-center items-center h-full w-1/5 md:w-40">

                <h1 className="font-bold text-8xl min-[2000px]:text-[10rem] text-[var(--freelance)] rotate-90 ">FREELANCE<span className="font-[100] inter-font">2.0</span></h1>
            </div>

            <div className="flex flex-col md:p-20 p-10 w-full h-full justify-start">
                <h1 className="text-[var(--light)] text-xl md:text-4xl min-[2000px]:text-5xl font-bold">REDEFINING JOINT EFFORTS</h1>
            </div>
        </section>
    )
}
