import React from 'react';

type InputFieldProps = {
    id: string;
    label: string;
    type?: string;
    className?: string;
    required?: boolean;
    isOptional?: boolean;
};

const InputField = ({
    id,
    label,
    type = "text",
    className = "",
    required = false,
    isOptional = false,
}: InputFieldProps) => (
    <div className={`mb-2 md:mb-4 w-full ${className}`}>
        <label htmlFor={id} className="text-[var(--light)] font-light">
            {label} {isOptional && "(optional)"}
        </label>
        <input
            id={id}
            type={type}
            required={required}
            className="w-full bg-white rounded-md p-1 md:p-2 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]"
        />
    </div>
);

export default function Form() {
    return (
        <form className="w-3/4 md:w-3/5" data-netlify="true" netlify-honeypot="bot-field" name="contact" method="POST" action="/">
            <p className="hidden">
                <label>Don&rsquo;t fill this out if you&rsquo;re human: <input name="bot-field" /></label>
            </p>
            <input type="hidden" name="form-name" value="contact" />
            <div className="md:flex md:flex-row w-full md:justify-between md:space-x-4">
                <InputField id="firstName" label="First Name:" required />
                <InputField id="lastName" label="Last Name:" required />
            </div>
            <div className="md:flex md:flex-row w-full md:justify-between md:space-x-4">
                <InputField id="companyName" label="Company Name:" required />
                <InputField id="companyWebsite" label="Company Website:" isOptional />
            </div>
            <div className="md:flex md:flex-row w-full md:justify-between md:space-x-4">
                <InputField id="email" label="E-Mail Address:" type="email" required />
                <InputField id="mobile" label="Mobile Number:" isOptional />
            </div>
            <div className="mb-2 md:mb-4">
                <label htmlFor="helpType" className="text-[var(--light)] font-light">
                    How can we help?
                </label>
                <select
                    required
                    name="helpType"
                    className="w-full h-10 bg-white rounded-md p-1 md:p-2 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)]"
                >
                    <option value="General & Feedback">General & Feedback</option>
                    <option value="Freelance2.0">FREELANCE2.0</option>
                    <option value="Freelance2.0">PLAYBACK</option>
                </select>
            </div>
            <label htmlFor="tellUsMore" className="text-[var(--light)] font-light">
                Tell us more:
            </label>
            <textarea
                name="tellUsMore"
                rows={2}
                className="w-full bg-white rounded-md p-1 md:p-2 focus:outline-none focus:ring-1 ring-[var(--teal)] font-light text-[var(--black)] resize-vertical" />
            <button type="submit" className="px-10 mt-6 py-2 bg-white text-[var(--black)] rounded-md text-lg border-[var(--teal)] border-2 hover:bg-[var(--teal)] hover:text-[var(--white)] transition-all duration-300 ease-in-out w-full">
                Submit
            </button>
        </form>
    );
}
