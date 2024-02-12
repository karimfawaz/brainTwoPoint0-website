import React from 'react'
import Form from '../components/form'
import SectionTitle from '../components/sectiontitle'

export default function Contact() {

    return (
        <section className="flex flex-row justify-start items-center bg-[var(--dark-grey)] py-5 border-t-2">
            <SectionTitle firstText="CONTACT" secondText="US" colorClass="[var(--light)]" />
            <div className="w-full flex flex-col items-center justify-center md:p-12">
                <h1 className="text-[var(--light)] md:text-6xl text-3xl mb-6">LET US KNOW</h1>
                <Form />
            </div>
        </section>
    )
}
