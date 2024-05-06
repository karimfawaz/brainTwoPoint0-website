import Image from "next/image"
import Link from "next/link"
export default function AboutUs() {
    return (

        <section className="text-gray-600 bg-white">
            <div className="container mx-auto flex px-5 md:py-24 p-12 md:flex-row flex-col items-center justify-start">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="md:text-4xl text-3xl mb-4 font-bold text-gray-900">BRAIN 2.<span className="font-thin">&ldquo;OOOH&rdquo;</span></h1>
                    <p className="leading-relaxed">Established in 2017 as a pioneering software development firm, <span className="font-bold text-[var(--black)]">BRAIN<span className="inter-font font-light">2.0</span></span>  has evolved into a multifaceted solutions innovator. Embodying our ethos, &rsquo;Driven by Values, Powered by Intellect&rsquo;, we are committed to leveraging intellectual prowess to deliver value-driven solutions for a diverse range of needs, catering to both individuals and businesses.<br /><br />

                        At <span className="font-bold text-[var(--black)]">BRAIN<span className="inter-font font-light">2.0</span></span>, we don&rsquo;t just create software; we engineer a spectrum of revolutionary solutions. Our flagship division, <Link href="/freelance"><span className="font-bold text-[var(--black)]">SOFTWARE<span className="inter-font font-light">2.0</span></span></Link>, continues our legacy of crafting efficient software solutions that simplify complexities, ensuring user-friendly experiences backed by robust, sophisticated processes.<br /><br />

                        Our evolution extends beyond the realm of traditional software. As we embrace our expanding role, we are venturing into various innovative sectors, each aligned with our mission to elevate lifestyles and empower businesses through simplicity and efficiency. Our forthcoming initiatives, diverse in their focus, share a common purpose: to revolutionise and lead in their respective fields.<br /><br />

                        With each step forward, <span className="font-bold text-[var(--black)]">BRAIN<span className="inter-font font-light">2.0</span></span> reaffirms its commitment to excellence and innovation. We are more than a company; we are an evolving force, dedicated to providing tailored solutions across a wide array of industries and personal needs. Our journey is marked by continuous growth, driven by our core values and intellect, as we endeavor to make a significant and positive impact in the lives of individuals and the operations of businesses.</p>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex snap-x overflow-x-scroll border p-2 rounded-lg">
                    <Image alt="Brain 2.0 Logo Redesign" src="/redesign/1.png" width={400} height={400} className="snap-center" />
                    <Image alt="Brain 2.0 Logo Redesign" src="/redesign/2.png" width={400} height={400} className="snap-center" />
                    <Image alt="Brain 2.0 Logo Redesign" src="/redesign/3.png" width={400} height={400} className="snap-center" />
                    <Image alt="Brain 2.0 Logo Redesign" src="/redesign/4.png" width={400} height={400} className="snap-center" />
                    <Image alt="Brain 2.0 Logo Redesign" src="/redesign/5.png" width={400} height={400} className="snap-center" />
                </div>
            </div>
        </section>

    )
}
