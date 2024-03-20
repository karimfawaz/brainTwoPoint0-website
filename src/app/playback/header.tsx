import Image from 'next/image'

export default function PLAYBACKHeader() {
    return (
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt-16 md:mb-0 items-center text-center">
                <h1 className="sm:text-4xl text-3xl mb-4 font-bold ">COMING SOON</h1>
                <p className="mb-8 leading-relaxed">Our latest venture, <span className='font-bold'>PLAYBACK</span>, promises to revolutionise the commercial sports industry. <span><span className='font-bold'>BRAIN</span>2.0</span> is partnering with market leaders and professional service providers to elevate customer experiences and make a difference. More on <span className='font-bold'>PLAYBACK</span>, soon...</p>

            </div>
            <div className='w-full md:w-1/2 border mx-auto p-8 md:p-24 rounded-lg border-[#B8B9A2]'>
                <Image alt="Brain 2.0 Logo Redesign" src="/PLAYBACK-nobg.png" width={700} height={400} />
            </div>
        </div>
    )
}
