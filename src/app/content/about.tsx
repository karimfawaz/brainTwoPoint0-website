import { BrainTwoPoint0Black, BrainTwoPoint0Thin } from '../layout'

export default function AboutContent() {
    return (
        <div className="bg-white w-full">
            <div className='container mx-auto flex px-5 md:py-24 p-12 md:flex-row flex-col-reverse items-center'>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="md:text-4xl text-3xl mb-4 font-thin">INNOVATING <span className='font-bold'>INFLUENCE</span>, INSPIRING <span className='font-bold'>GROWTH</span> </h1>
                    <p className="leading-relaxed"><span className="font-bold">CONTENT<span className="inter-font font-light">2.0</span></span> is set to revolutionise the way we perceive and manage digital content.
                        <br /> <br />Our mission? To transform your platform into not just a brand but a thriving business. Leveraging analytical insights and embodying the <span className="font-bold">BRAIN<span className="inter-font font-light">2.0</span></span> ethos, we treat our clients and their content as a business and optimise their operations to drive growth and help them reach their target audience.</p>
                </div>
                <div className='hidden md:block md:w-1/2 mx-auto'>
                    <h1 className={`${BrainTwoPoint0Black.className} text-4xl md:text-7xl text-center`}>CONTENT<span className={`${BrainTwoPoint0Thin.className}`}>2.0</span></h1>
                </div>
            </div>
        </div>
    )
}