import React from 'react'


export default function Software() {
    return (
        <section className="h-full snap-center flex flex-row justify-start items-center">
            <div className="flex flex-col justify-center items-center h-full w-1/5 md:w-40">
                <h1 className="font-bold text-7xl md:text-9xl text-[var(--software)] rotate-90 ">SOFTWARE<span className="font-[100] inter-font">2.0</span></h1>
            </div>
            <div className="h-full w-full flex flex-col items-center p-4 md:p-12">
                <h1 className="text-[var(--light)] md:text-6xl text-xl md:mb-6">REDEFINING <span className="font-bold">JOINT EFFORTS</span></h1>
            </div>
        </section>
    )
}
