import React from 'react'

export default function Form() {
    return (
        <form data-netlify="true" netlify-honeypot="bot-field" name="contact" method="POST" action="/" className='w-full space-y-10'>
            <div>
                <h1 className='text-white text-3xl font-bold'><span className='font-thin'>THE</span>FORM:</h1>
                <div className="">
                    <div className="w-20 h-1 bg-[var(--light)] inline-flex"></div>
                </div>
            </div>
            <p className="hidden"><label>Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" /></label></p>
            <input type="hidden" name="form-name" value="contact" />
            <div className="md:flex md:flex-row w-full md:justify-between md:space-x-4">
                <div className="mb-4 md:mb-6 md:w-1/2">
                    <label htmlFor="firstName" className="text-[var(--light)] font-light text-xl">
                        First Name:
                    </label>
                    <input
                        required
                        type="text"
                        name="firstName"
                        className="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]"
                    />
                </div>

                <div className="mb-4 md:mb-6 md:w-1/2">
                    <label htmlFor="lastName" className="text-[var(--light)] font-light text-xl">
                        Last Name:
                    </label>
                    <input required type="text" name="lastName" className="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]" />
                </div>
            </div>



            <div className="md:flex md:flex-row w-full md:justify-between md:space-x-4">

                <div className="mb-4 md:mb-6 md:w-1/2">
                    <label htmlFor="companyName" className="text-[var(--light)] font-light text-xl">
                        Company Name:
                    </label>
                    <input required type="text" name="companyName" className="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]" />
                </div>


                <div className="md:w-1/2 mb-4 md:mb-6">
                    <label htmlFor="companyWebsite" className="text-[var(--light)] font-light text-xl">
                        Company Website (optional):
                    </label>
                    <input
                        type="url"
                        name="companyWebsite"
                        className="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]"
                    />
                </div>
            </div>


            <div className="md:flex md:flex-row w-full md:justify-between md:space-x-4">
                <div className="mb-4 md:mb-6 md:w-1/2">
                    <label htmlFor="email" className="text-[var(--light)] font-light text-xl">
                        E-Mail Address:
                    </label>
                    <input
                        required
                        type="email"
                        name="email"
                        className="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]"
                    />
                </div>


                <div className="mb-4 md:mb-6 md:w-1/2">
                    <label htmlFor="mobile" className="text-[var(--light)] font-light text-xl">
                        Mobile Number (optional):
                    </label>
                    <input type="text" name="mobile" className="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]" />
                </div>
            </div>

            <div className="mb-4 md:mb-6">
                <label htmlFor="helpType" className="text-[var(--light)] font-light text-xl">
                    How can we help?
                </label>
                <select
                    required
                    name="helpType"
                    className="w-full h-12 bg-white rounded-md p-3 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)] "
                >
                    <option value="General & Feedback">General & Feedback</option>
                    <option value="SOFTWARE2.0">SOFTWARE2.0</option>
                    <option value="FREELANCE2.0">FREELANCE2.0</option>
                    <option value="CONTENT2.0">CONTENT2.0</option>
                    <option value="PLAYBACK">PLAYBACK</option>

                </select>
            </div>

            <div>

                <label htmlFor="tellUsMore" className="text-[var(--light)] font-light text-xl ">
                    Tell us more:
                </label>
                <textarea
                    name="tellUsMore"
                    rows={2}
                    className="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)] resize-vertical" />
            </div>
            <button type="submit" className="font-bold px-10 mt-6 py-2 bg-white text-[var(--black)] rounded-md text-lg border-[var(--teal)] border-2 hover:bg-[var(--teal)] hover:text-[var(--white)] transition-all duration-300 ease-in-out w-full">
                Submit
            </button>
        </form>
    )
}