import React from 'react'


export default function Freelance() {
    return (
        <section className="snap-center flex flex-row justify-start items-center overflow-scroll no-scrollbar">
            <div className="flex flex-col justify-center items-center h-full w-1/5 md:w-40">
                <h1 className="font-bold text-7xl md:text-[5rem] text-[var(--freelance)] rotate-90 ">FREELANCE<span className="font-[100] inter-font">2.0</span></h1>
            </div>
            <div className="min-h-screen w-full flex flex-col items-center p-4 md:p-12">
                <h1 className="text-[var(--light)] md:text-6xl text-lg mb-3 md:mb-6">REDEFINING <span className="font-bold">JOINT EFFORTS</span></h1>
                <p className="text-[var(--light)] md:text-2xl w-5/6 md:w-2/3 text-[10px] md:text-center"><span className="font-bold text-[var(--freelance)]">FREELANCE<span className="inter-font font-light">2.0</span></span> revolutionizes traditional freelancing by transcending conventional practices. Rather than merely executing a design, <span className="font-bold text-[var(--freelance)]">FREELANCE<span className="inter-font font-light">2.0</span></span> integrates deeply, adopting the role of a conceptual partner within the collaborating company throughout the project&rsquo;s duration.</p>
            </div>
        </section>
    )
}
