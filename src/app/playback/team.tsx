import React from 'react'

export default function PLAYBACKTeam() {
    return (
        <section className="bg-[#B8B9A2] text-[var(--dark-grey)]">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-bold mb-4 ">TEAM</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The project&lsquo;s backbone, the <span className='font-bold'>TEAM</span>, is working hard to deliver the project as quickly as possible and enable you to start elevating your experience by curating mutually beneficial deals on an international scale.</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border p-4 rounded-lg border-[var(--dark-grey)]">
                            <img alt="team" className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/team/karim.jpeg" />
                            <div className="flex-grow">
                                <h2 className=" font-bold">Karim Fawaz</h2>
                                <p>Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border p-4 rounded-lg border-[var(--dark-grey)]">
                            <img alt="team" className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/team/yuval.jpeg" />
                            <div className="flex-grow">
                                <h2 className=" font-bold">Yuval Cole</h2>
                                <p>Operations Director - España Ambassador</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border p-4 rounded-lg border-[var(--dark-grey)]">
                            <img alt="team" className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/team/louis.jpeg" />
                            <div className="flex-grow">
                                <h2 className=" font-bold">Louis Gualda</h2>
                                <p>Operations Director - France Ambassador</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
                        <div className="h-full flex items-center border p-4 rounded-lg border-[var(--dark-grey)]">
                            <img alt="team" className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/team/tommaso.jpeg" />
                            <div className="flex-grow">
                                <h2 className=" font-bold">Tommaso di Gregorio</h2>
                                <p>Customer Acquisition Director - Italy Ambassador </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
