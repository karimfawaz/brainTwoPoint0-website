import React from 'react'

export default function Contact() {
    return (
        <section className="h-screen snap-center flex flex-row justify-start items-center w-screen pt-20 md:pt-36">
            <div className="flex flex-col justify-center items-center h-full w-1/5 md:w-40">
                <h1 className="font-bold text-8xl min-[2000px]:text-[10rem] text-[var(--teal)] rotate-90 ">CONTACT<span className="font-[100] inter-font">US</span></h1>
            </div>
            <div className="flex flex-col justify-center items-start md:items-center w-full h-full p-8 md:p-20">
                <h1 className="hidden md:block text-[var(--light)] md:text-5xl text-3xl">LET US KNOW</h1>
                <form className="flex flex-col md:w-full min-[2000px]:p-0 min-[2000px]:w-auto" data-netlify="true" name="contact" method="POST" action="/">
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="flex flex-col md:flex-row justify-between mt-4 space-y-4 md:space-y-0 md:space-x-4">
                        <div className="w-full md:w-1/2">
                            <label htmlFor="firstName" className="text-[var(--light)] font-light mb-4 ">
                                First Name:
                            </label>
                            <input
                                required
                                type="text"
                                name="firstName"
                                className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--light)]"
                            />
                        </div>

                        <div className="w-full md:w-1/2">
                            <label htmlFor="lastName" className="text-[var(--light)] font-light mb-4 ">
                                Last Name:
                            </label>
                            <input required type="text" name="lastName" className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--light)]" />
                        </div>
                    </div>



                    <div className="hidden md:block flex-col md:flex-row justify-between mt-6 space-y-4 md:space-y-0 md:space-x-4">

                        <div className="w-full md:w-1/2">
                            <label htmlFor="companyName" className="text-[var(--light)] font-light mb-4 ">
                                Company Name:
                            </label>
                            <input required type="text" name="companyName" className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--light)]" />
                        </div>


                        <div className="hidden md:block w-full md:w-1/2">
                            <label htmlFor="companyWebsite" className="text-[var(--light)] font-light mb-4 ">
                                Company Website (optional):
                            </label>
                            <input
                                type="url"
                                name="companyWebsite"
                                className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--light)]"
                            />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row justify-between mt-6 space-y-4 md:space-y-0 md:space-x-4">
                        <div className="w-full md:w-1/2">
                            <label htmlFor="email" className="text-[var(--light)] font-light mb-4 ">
                                E-Mail Address:
                            </label>
                            <input
                                required
                                type="email"
                                name="email"
                                className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--light)]"
                            />
                        </div>


                        <div className="hidden md:block w-full md:w-1/2">
                            <label htmlFor="telephone" className="text-[var(--light)] font-light mb-4 ">
                                Telephone Number (optional):
                            </label>
                            <input type="text" name="telephone" className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--light)]" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="helpType" className="text-[var(--light)] font-light mb-4 ">
                            How can we help?
                        </label>
                        <select
                            required
                            name="helpType"
                            className="w-full h-10 bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)] "
                        >
                            <option value="General Feedback">General Feedback</option>
                            <option value="Freelance2.0">Freelance 2.0</option>

                        </select>
                    </div>


                    <label htmlFor="tellUsMore" className="text-[var(--light)] font-light mt-4 mb-4 ">
                        Tell us more:
                    </label>
                    <textarea
                        name="tellUsMore"
                        rows={2}
                        className="w-full bg-white rounded-md py-2 pl-4 mb-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--light)] resize-vertical" />
                    <button type="submit" className="px-10 mt-6 py-2 bg-white text-[var(--black)] rounded-md text-lg border-[var(--teal)] border-2 hover:bg-[var(--teal)] hover:text-[var(--white)] transition-all duration-300 ease-in-out]">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}
