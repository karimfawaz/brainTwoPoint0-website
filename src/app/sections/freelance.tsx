import Image from 'next/image'
import { BrainTwoPoint0Thin } from '../layout'

export default function Freelance() {
    return (

        <section className="flex flex-row justify-start items-center bg-[var(--dark-grey)]">
            <div className="flex flex-col justify-start p-4 md:p-12  w-full">
                <h1 className="font-bold text-[var(--light)] md:text-6xl text-xl mb-3 md:mb-6 w-full">REDEFINING<span className={BrainTwoPoint0Thin.className}> JOINT EFFORTS</span></h1>
                <p className="text-[var(--light)] md:text-xl text-xs">
                    <span className="font-bold text-[var(--teal)]">FREELANCE<span className=" font-light">2.0</span></span> is redefining the collaboration landscape, transcending traditional freelancing by fostering deeper, more integrated partnerships. We&rsquo;re not just about executing tasks; we&rsquo;re about creating a symbiotic relationship with our client companies.
                </p>
                <div className="flex flex-wrap justify-evenly flex-grow items-center my-6">
                    <Image className="md:hover:grayscale-0 h-28 w-28 md:grayscale md:h-40 md:w-40" alt="Salon Pikasso Logo" src="/pikasso.png" height={100} width={100} />
                    <Image className="md:hover:grayscale-0 h-28 w-28 md:grayscale md:h-40 md:w-40" alt="Garderie les Citronniers Logo" src="/citronniers.png" height={100} width={100} />
                    <Image className="md:hover:grayscale-0 h-28 w-28 md:grayscale md:h-40 md:w-40" alt="KAP Logo" src="/KAP-logo-white.svg" height={100} width={100} />
                </div>
            </div>
        </section>
    )
}
