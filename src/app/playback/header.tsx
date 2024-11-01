import Image from 'next/image'
import Link from 'next/link'
export default function PLAYBACKHeader() {
    return (
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mt-16 md:mt-0 md:mb-0 items-center text-center">
                <h1 className="sm:text-4xl text-3xl mb-4 font-bold ">ACCESS <span className='font-normal'>THE</span> MOMENT</h1>
                <p className="mb-8 leading-relaxed"><span className='font-bold'>PLAYBACK</span> is a solutions aggregator powering players, clubs, venues, and staff for all sports.
                    <br />Through <span className='font-bold'>PLAYBACK</span> and its network of strategic partnerships, you get to access pro-level sports equipment & software to take your performance and operations to premium.
                    <br />Our mission? Take over the financial and operational burden of developing, installing, and implementing top of the line solutions. You PLAY, we BACK.
                    <br /> <br /> Find out more about <Link href="https://www.playbacksports.ai" className='underline font-bold'>PLAYBACK</Link>.
                </p>
            </div>
            <div className='w-full md:w-1/2 border mx-auto p-8 md:p-24 rounded-lg border-[#B8B9A2]'>
                <Image alt="Brain 2.0 Logo Redesign" src="/PLAYBACK-nobg.png" width={700} height={400} />
            </div>
        </div>
    )
}
