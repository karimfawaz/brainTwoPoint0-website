import React from 'react'

export default function Form() {
    return (
        <form className="w-3/4 md:w-3/5" data-netlify="true" name="contact" method="POST" action="/">
            <input type="hidden" name="form-name" value="contact" />
            <div className="">
                <div className="">
                    <label htmlFor="firstName" className="text-[var(--light)] font-light ">
                        First Name:
                    </label>
                    <input
                        required
                        type="text"
                        name="firstName"
                        className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]"
                    />
                </div>

                <div className="">
                    <label htmlFor="lastName" className="text-[var(--light)] font-light ">
                        Last Name:
                    </label>
                    <input required type="text" name="lastName" className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]" />
                </div>
            </div>



            <div className="">

                <div className="">
                    <label htmlFor="companyName" className="text-[var(--light)] font-light ">
                        Company Name:
                    </label>
                    <input required type="text" name="companyName" className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]" />
                </div>


                <div className=" ">
                    <label htmlFor="companyWebsite" className="text-[var(--light)] font-light ">
                        Company Website (optional):
                    </label>
                    <input
                        type="url"
                        name="companyWebsite"
                        className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]"
                    />
                </div>
            </div>


            <div className="">
                <div className="">
                    <label htmlFor="email" className="text-[var(--light)] font-light ">
                        E-Mail Address:
                    </label>
                    <input
                        required
                        type="email"
                        name="email"
                        className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]"
                    />
                </div>


                <div className="">
                    <label htmlFor="mobile" className="text-[var(--light)] font-light ">
                        Mobile Number (optional):
                    </label>
                    <input type="text" name="mobile" className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]" />
                </div>
            </div>

            <div className="">
                <label htmlFor="helpType" className="text-[var(--light)] font-light ">
                    How can we help?
                </label>
                <select
                    required
                    name="helpType"
                    className="w-full h-10 bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)] "
                >
                    <option value="General & Feedback">General & Feedback</option>
                    {/* <option value="Freelance2.0">Freelance 2.0</option> */}

                </select>
            </div>


            <label htmlFor="tellUsMore" className="text-[var(--light)] font-light  ">
                Tell us more:
            </label>
            <textarea
                name="tellUsMore"
                rows={2}
                className="w-full bg-white rounded-md py-2 pl-4 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)] resize-vertical" />
            <button type="submit" className="px-10 mt-6 py-2 bg-white text-[var(--black)] rounded-md text-lg border-[var(--teal)] border-2 hover:bg-[var(--teal)] hover:text-[var(--white)] transition-all duration-300 ease-in-out] w-full">
                Submit
            </button>
        </form>
    )
}
