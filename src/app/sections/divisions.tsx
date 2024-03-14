import React from 'react'
import { BrainTwoPoint0Thin } from '../layout'
import Link from 'next/link'

export default function Divisions() {
    return (
        <section className="text-gray-600 body-font bg-[var(--light)]">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl title-font text-[var(--dark-grey)] mb-4 font-light">DI<span className="inter-font font-bold">VISIONS</span></h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-[var(--dark-grey)]">Established in 2017 as a pioneering software development firm, <span className="font-bold text-[var(--dark-grey)]">BRAIN<span className={BrainTwoPoint0Thin.className}>2.0</span></span>  has evolved into a multifaceted solutions innovator.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1  bg-[var(--dark-grey)] inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center">

                    {/* SOFTWARE2.0 */}
                    <div className="p-4 md:p-8 md:w-1/2 flex flex-col text-center items-center">
                        <div className="flex-grow">
                            <h2 className="text-[var(--dark-grey)] text-xl title-font font-bold mb-3">SOFTWARE<span className="font-medium">2.0</span></h2>
                            <h3 className="text-[var(--dark-grey)] text-lg title-font font-bold mb-3">Solving <span className='font-medium'>through</span> Software</h3>
                            <p className="leading-relaxed text-base">Our flagship division continues our legacy of crafting efficient software solutions that simplify complexities, ensuring user-friendly experiences backed by robust, sophisticated processes.</p>
                            <a className="mt-3 text-[var(--dark-grey)] hover:text-[var(--teal)] inline-flex items-center font-bold"><Link href="/software">Learn More</Link>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* FREELANCE2.0 */}
                    <div className="p-4 md:p-8 md:w-1/2 flex flex-col text-center items-center">
                        <div className="flex-grow">
                            <h2 className="text-[var(--dark-grey)] text-xl title-font font-bold mb-3">FREELANCE<span className="font-medium">2.0</span></h2>
                            <h3 className="text-[var(--dark-grey)] text-lg title-font font-medium mb-3">Redefining <span className='font-bold'>Joint Ventures</span> </h3>
                            <p className="leading-relaxed text-base">FREELANCE2.0 is redefining the collaboration landscape, transcending traditional freelancing by fostering deeper, more integrated partnerships.</p>
                            <a className="mt-3 text-[var(--dark-grey)] hover:text-[var(--teal)] inline-flex items-center font-bold"><Link href="/freelance">Learn More</Link>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>


                    {/* CONTENT2.0 */}
                    <div className="p-4 md:p-8 md:w-1/2 flex flex-col text-center items-center">
                        <div className="flex-grow">
                            <h2 className="text-[var(--dark-grey)] text-xl title-font font-bold mb-3">CONTENT<span className="font-medium">2.0</span></h2>
                            <h3 className="text-[var(--dark-grey)] text-lg title-font font-medium mb-3">Innovating <span className='font-bold'>Influence</span>, Inspiring <span className='font-bold'>Growth</span></h3>
                            <p className="leading-relaxed text-base">At CONTENT2.0, we're setting a new standard for digital content. Through innovative strategies and powerful analytics, we transform platforms into thriving businesses.</p>
                            <a className="mt-3 text-[var(--dark-grey)] hover:text-[var(--teal)] inline-flex items-center font-bold"><Link href="/content">Learn More</Link>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* PLAYBACK */}
                    <div className="p-4 md:p-8 md:w-1/2 flex flex-col text-center items-center">
                        <div className="flex-grow">
                            <h2 className="text-[var(--dark-grey)] text-xl title-font font-bold mb-3">PLAYBACK</h2>
                            <h3 className="text-[var(--dark-grey)] text-lg title-font font-medium mb-3">Access <span className='font-bold'>the Moment</span></h3>
                            <p className="leading-relaxed text-base">PLAYBACK brings professional sports analytics to every athlete. Relive your victories, improve your skills, and share your journey. Dive into the future of sports. Click to discover how.</p>
                            <a className="mt-3 text-[var(--dark-grey)] hover:text-[var(--teal)] inline-flex items-center font-bold"><Link href="/playback">Learn More</Link>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
                <button className="flex mx-auto mt-16 text-[var(--light)] bg-[var(--dark-grey)] py-2 px-8 border-2 border-[var(--dark-grey)] focus:outline-none hover:bg-[var(--light)] font-bold text-lg hover:text-[var(--dark-grey)]"><Link href="/contact">ENQUIRIES</Link></button>
            </div>
        </section>

    )
}
