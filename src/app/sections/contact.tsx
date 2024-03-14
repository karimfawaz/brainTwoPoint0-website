import React from 'react'
import Form from '../contact/form'


export default function Contact() {

    return (
        <section className="flex flex-row justify-start items-center bg-[var(--dark-grey)] py-5 border-t-2">
            <div className="w-full flex flex-col md:p-12 p-5">
                <h1 className="font-bold text-[var(--light)] md:text-6xl text-xl mb-3 md:mb-6">LET US<span className="font-[100] inter-font"> KNOW</span></h1>
                <Form />
            </div>
        </section>
    )
}
