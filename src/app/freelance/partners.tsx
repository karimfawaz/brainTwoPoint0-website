import Image from "next/image";

export default function Partners() {
    return (
        <section className="px-4 py-24 mx-auto max-w-7xl">
            <h1 className="mb-3 text-3xl font-bold leading-tight text-center text-[var(--light)] md:text-4xl"><span className="font-thin">THE </span>PARTNERS</h1>
            <p className="mb-16 text-lg text-center text-[var(--light)]">Organizations of all sizes trust <span className="font-bold">BRAIN</span>2.0 to <span className="font-bold">Make</span> it <span className="font-bold">Happen</span></p>
            <div className="flex flex-wrap flex-grow gap-16 justify-evenly text-center">
                <div className="flex items-center justify-center">
                    <Image src="/partners/pikasso.png" height={128} width={128} alt="Yahoo Logo" className="block object-contain" />
                </div>
                <div className="flex items-center justify-center">
                    <Image src="/partners/citronniers.png" height={128} width={128} alt="Yahoo Logo" className="block object-contain " />
                </div>
                <div className="flex items-center justify-center">
                    <Image src="/partners/KAP-logo-white.svg" height={128} width={128} alt="Yahoo Logo" className="block object-contain " />
                </div>
            </div>
        </section>
    )
}
