import Image from 'next/image'
import SectionTitle from '../components/sectiontitle'

export default function Freelance() {
    return (

        <section className="flex flex-row justify-start items-center bg-[var(--dark-grey)]">
            <SectionTitle firstText="FREELANCE" secondText="2.0" colorClass="[var(--freelance)]" />
            <div className=" flex flex-col justify-start p-4 md:p-12">
                <h1 className="text-[var(--light)] md:text-6xl text-base mb-3 md:mb-6">REDEFINING <span className="font-bold">JOINT EFFORTS</span></h1>
                <p className="text-[var(--light)] md:text-2xl text-xs"><span className="font-bold text-[var(--freelance)]">FREELANCE<span className="inter-font font-light">2.0</span></span> is redefining the collaboration landscape, transcending traditional freelancing by fostering deeper, more integrated partnerships. We&rsquo;re not just about executing tasks; we&rsquo;re about creating a symbiotic relationship with our client companies.
                    <br /> <br />Our approach is revolutionary: we become a conceptual partner in your project, engaging from inception to completion. This integration allows us to contribute more than just services - we provide insights, innovation, and strategic alignment with your goals.
                    <br /> <br />Through <span className="font-bold text-[var(--freelance)]">FREELANCE<span className="inter-font font-light">2.0</span></span>, your project gains a dedicated ally, one that is deeply involved in understanding and achieving your vision. Our commitment is to transform each project into a shared journey of success, leveraging our expertise to bring about extraordinary outcomes.
                    <br /> <br />Embrace a new era of project collaboration with <span className="font-bold text-[var(--freelance)]">FREELANCE<span className="inter-font font-light">2.0</span></span>, where partnerships are not just about meeting objectives, but about co-creating lasting value.
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
