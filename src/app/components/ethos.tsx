import React from 'react'
import { BrainTwoPoint0Thin } from '../layout'
import Link from 'next/link'

export default function Ethos() {
    return (
        <section className="text-gray-600 bg-[var(--light)]">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl title-font text-[var(--dark-grey)] mb-4 font-light">ETHOS<span className={BrainTwoPoint0Thin.className}>2.0</span></h1>
                    <p className="text-base leading-relaxed lg:w-3/4 mx-auto text-[var(--dark-grey)]">We are dedicated to elevating any field we touch to the next level – true to our promise of &ldquo;2.0-ing&rdquo; every venture.</p>
                </div>
                <div className="flex flex-wrap -m-4 justify-center">
                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-[var(--dark-grey)] p-6 rounded-lg ">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[var(--dark-grey)] text-[var(--light)] mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium mb-2">The Red Car Theory</h2>
                            <p className="leading-relaxed text-base">Opportunities, just like red cars, often go unnoticed unless you foster an environment where finding red cars is rewarded. By growing our multifaceted solutions company, we aim to preserve a constant stream of solutions in a problem-solving ecosystem where ideas are shared, debated, strategised, and delivered.</p>
                        </div>
                    </div>

                    <div className="xl:w-1/3 md:w-1/2 p-4">
                        <div className="border border-[var(--dark-grey)] p-6 rounded-lg ">
                            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-[var(--dark-grey)] text-[var(--light)] mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h2 className="text-lg text-gray-900 font-medium mb-2">Speed & Competition</h2>
                            <p className="leading-relaxed text-base">As soon as we find a gap in the market, we assume that a competitor has already thought about the same exact idea. This means that we move in a way that prompts quick market entry whilst ensuring our standards are met. The following creates a sense of urgency to deliver and consistently provide to our customers.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
