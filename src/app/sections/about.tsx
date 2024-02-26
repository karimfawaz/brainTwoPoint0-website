
import Image from 'next/image'
import React from 'react'
import SectionTitle from '../components/sectiontitle'


export default function About() {
    return (
        <section className="flex flex-row justify-start items-center overflow-scroll bg-[var(--light)]">
            <SectionTitle firstText="ABOUT" secondText="US" colorClass="[var(--dark-grey)]" />

            <div className="w-full flex flex-col p-4 md:p-12 items-center">
                <h1 className="font-bold text-[var(--dark-grey)] md:text-6xl text-xl mb-3 md:mb-6 w-full">BRAIN 2.<span className="font-[100] inter-font">&quot;OOOH&quot;</span></h1>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[var(--dark-grey)] md:text-xl text-xs">

                        Established in 2017 as a pioneering software development firm, <span className="font-bold text-[var(--dark-grey)]">BRAIN<span className="inter-font font-light">2.0</span></span>  has evolved into a multifaceted solutions innovator. Embodying our ethos, &rsquo;Driven by Values, Powered by Intellect&rsquo;, we are committed to leveraging intellectual prowess to deliver value-driven solutions for a diverse range of needs, catering to both individuals and businesses.<br /> <br />

                        At <span className="font-bold text-[var(--dark-grey)]">BRAIN<span className="inter-font font-light">2.0</span></span>, we don&rsquo;t just create software; we engineer a spectrum of revolutionary solutions. Our flagship division, <span className="font-bold text-[var(--dark-grey)]">SOFTWARE<span className="inter-font font-light">2.0</span></span>, continues our legacy of crafting efficient software solutions that simplify complexities, ensuring user-friendly experiences backed by robust, sophisticated processes.<br /> <br />

                        Our evolution extends beyond the realm of traditional software. As we embrace our expanding role, we are venturing into various innovative sectors, each aligned with our mission to elevate lifestyles and empower businesses through simplicity and efficiency. Our forthcoming initiatives, diverse in their focus, share a common purpose: to revolutionize and lead in their respective fields.<br /> <br />

                        With each step forward, <span className="font-bold text-[var(--dark-grey)]">BRAIN<span className="inter-font font-light">2.0</span></span> reaffirms its commitment to excellence and innovation. We are more than a company; we are an evolving force, dedicated to providing tailored solutions across a wide array of industries and personal needs. Our journey is marked by continuous growth, driven by our core values and intellect, as we endeavor to make a significant and positive impact in the lives of individuals and the operations of businesses.
                    </p>
                </div>
                <div className="flex snap-x overflow-scroll border mt-8 p-2 rounded-lg no-scrollbar">
                    <Image alt="Brain 2.0 Logo Redesign" src="/redesign/1.png" width={250} height={250} className="snap-center md:h-72 md:w-72 w-52 h-52" />
                    <Image alt="Brain 2.0 Logo Redesign" src="/redesign/2.png" width={250} height={250} className="snap-center md:h-72 md:w-72 w-52 h-52" />
                    <Image alt="Brain 2.0 Logo Redesign" src="/redesign/3.png" width={250} height={250} className="snap-center md:h-72 md:w-72 w-52 h-52" />
                    <Image alt="Brain 2.0 Logo Redesign" src="/redesign/4.png" width={250} height={250} className="snap-center md:h-72 md:w-72 w-52 h-52" />
                    <Image alt="Brain 2.0 Logo Redesign" src="/redesign/5.png" width={250} height={250} className="snap-center md:h-72 md:w-72 w-52 h-52" />
                </div>
            </div>
        </section>
    )
}
