
import Image from 'next/image'
import React from 'react'
import { BrainTwoPoint0Thin, PTsans } from '../layout'


export default function About() {
    return (
        <section className="overflow-scroll bg-[var(--light)] no-scrollbar">

            <div className="w-full flex flex-col p-4 md:p-12 items-center">
                <h1 className="font-bold text-[var(--dark-grey)] md:text-6xl text-xl mb-3 md:mb-6 w-full">BRAIN 2.<span className={BrainTwoPoint0Thin.className}>&quot;OOOH&quot;</span></h1>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-[var(--dark-grey)] md:text-xl text-xs">

                        Established in 2017 as a pioneering software development firm, <span className="font-bold text-[var(--dark-grey)]">BRAIN<span className={BrainTwoPoint0Thin.className}>2.0</span></span>  has evolved into a multifaceted solutions innovator. Embodying our ethos, &rsquo;Driven by Values, Powered by Intellect&rsquo;, we are committed to leveraging intellectual prowess to deliver value-driven solutions for a diverse range of needs, catering to both individuals and businesses.<br /> <br />
                    </p>
                </div>
            </div>
        </section>
    )
}
