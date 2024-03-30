import Link from 'next/link'
import React from 'react'

export default function ContentServices() {
    const servicesList: string[] = ["Short-term Engagement-building Strategy", "Marketing & Branding", "Partnership Management", "Access to FREELANCE2.0 Services", "Monetisation Strategy & Planning", "Platform Expansions", "Analytics & Data Analysis", "Periodical Reporting & Strategy Alignment"]
    return (
        <section className="bg-[var(--light)] w-full">
            <div className='px-4 py-20 mx-auto max-w-7xl'>
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-32 gap-x-10 lg:gap-x-24">
                    <div className='text-center md:text-left flex flex-col'>
                        <h2 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-black md:text-4xl">Unlock your Brand</h2>
                        <p className="mb-6 text-lg text-gray-600 md:text-xl">We believe you should only focus on <span className='font-bold'>creating</span>. Our engineered roadmap ensures all the operational weight is lifted so you can focus solely on providing the highest quality content to your community.</p>
                        <Link href="/contact" className="text-center text-[var(--light)] bg-[var(--dark-grey)] py-2 px-8 border-2 border-[var(--dark-grey)] focus:outline-none hover:bg-white font-bold text-lg hover:text-[var(--dark-grey)]"><button>ENQUIRIES</button></Link>
                    </div>
                    <div className="flex flex-col flex-grow space-y-5">
                        {servicesList.map((service, index) => (

                            <div key={index} className="flex items-start">
                                <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-5 h-5 mt-1 mr-2 text-primary">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                                <p className="text-lg text-gray-700">{servicesList[index]}</p>
                            </div>

                        ))}


                    </div>
                </div>

            </div>
        </section>
    )
}
