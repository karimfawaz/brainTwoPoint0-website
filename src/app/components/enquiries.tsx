import Link from "next/link";

export default function Enquiries() {
    return (
        <section className="w-full bg-white">
            <div className="w-full px-4 py-20 mx-auto text-center md:w-3/4 lg:w-2/4">
                <p className="mb-2 text-base font-thin text-[var(--teal)]">Make it Happen, <span className="font-bold">TOGETHER</span></p>
                <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl md:mb-6 md:leading-tight">Reach out and let us know how we can help</h2>
                <Link href="/contact"><button className="flex mx-auto text-[var(--light)] bg-[var(--dark-grey)] py-2 px-8 border-2 border-[var(--dark-grey)] focus:outline-none hover:bg-white font-bold text-lg hover:text-[var(--dark-grey)]">ENQUIRIES</button></Link>

            </div>
        </section>


    )
}
