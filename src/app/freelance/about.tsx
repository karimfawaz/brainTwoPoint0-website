import { BrainTwoPoint0Black, BrainTwoPoint0Thin } from '../layout'

export default function AboutFreelance() {
    return (
        <div className="bg-[var(--light)] w-full">
            <div className='container mx-auto flex px-5 md:py-24 p-12 md:flex-row flex-col-reverse items-center'>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="md:text-4xl text-3xl mb-4 font-thin">REDEFINING <span className='font-bold'>JOINT EFFORTS</span></h1>
                    <p className="leading-relaxed"><span className="font-bold">FREELANCE<span className="inter-font font-light">2.0</span></span> is redefining the collaboration landscape, transcending traditional freelancing by fostering deeper, more integrated partnerships. We&rsquo;re not just about executing tasks; we&rsquo;re about creating a symbiotic relationship with our client companies.
                        <br /> <br />Our approach is revolutionary: we become a conceptual partner in your project, engaging from inception to completion. This integration allows us to contribute more than just services - we provide insights, innovation, and strategic alignment with your goals.
                        <br /> <br />Through <span className="font-bold">FREELANCE<span className="inter-font font-light">2.0</span></span>, your project gains a dedicated ally, one that is deeply involved in understanding and achieving your vision. Our commitment is to transform each project into a shared journey of success, leveraging our expertise to bring about extraordinary outcomes.
                        <br /> <br />Embrace a new era of project collaboration with <span className="font-bold">FREELANCE<span className="inter-font font-light">2.0</span></span>, where partnerships are not just about meeting objectives, but about co-creating lasting value.
                    </p> </div>
                <div className='hidden md:block md:w-1/2 mx-auto'>
                    <h1 className={`${BrainTwoPoint0Black.className} text-4xl md:text-7xl text-center`}>FREELANCE<span className={`${BrainTwoPoint0Thin.className}`}>2.0</span></h1>
                </div>
            </div>
        </div>
    )
}
