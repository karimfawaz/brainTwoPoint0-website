import React from 'react'

export default function Statistics() {
    return (
        <section className="text-white flex flex-col justify-center items-center py-24">

            <h1 className='mb-3 text-3xl leading-tight text-center text-[var(--light)] md:text-4xl'>WE <span className='font-bold'>BUILD</span>, WE <span className='font-bold'>SCALE</span></h1>
            <p className="mb-16 text-lg text-center text-[var(--light)]">Whether you have an established platform or just getting started and have something to share, we have a plan <span className='font-bold'>for you</span></p>

            <div className="container px-5 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl">3</h2>
                        <p className="leading-relaxed">Clients</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl">100K</h2>
                        <p className="leading-relaxed">Total Followers</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl">700%</h2>
                        <p className="leading-relaxed">Engagement Increase</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl">9</h2>
                        <p className="leading-relaxed">Platforms Managed</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
