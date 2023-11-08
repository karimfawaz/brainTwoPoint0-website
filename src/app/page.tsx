import Image from 'next/image'
import Navbar from './common/navbar'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-[var(--teal)] mb-8 md:mb-20 text-sm md:text-4xl font-thin"><span className="font-bold">Re</span>branding, <span className="font-bold">Re</span>thinking, <span className="font-bold">Re</span>inventing</h1>
      <img src="/B2.0-textlogo.png" className="md:w-1/2 w-4/5" />
      <div className=" hidden md:flex  gap-5 flex-wrap flex-row font-bold md:text-3xl text-xs justify-evenly w-1/2 md:mt-20 mt-8">
        <h2 className="text-[var(--teal)]">Coming Soon:</h2>
        <h2 className="text-blue-400">Software<span className='font-thin'>2.0</span></h2>
        <h2 className="text-green-400">Freelance<span className='font-thin'>2.0</span></h2>
        <h2 className="text-red-400">Content<span className='font-thin'>2.0</span></h2>
        <h2 className="text-yellow-400">Consulting<span className='font-thin'>2.0</span></h2>

      </div>
      <h1 className="md:hidden text-[var(--teal)] mt-8 md:mt-20 text-sm md:text-4xl font-thin">We&apos;ll be back soon</h1>
    </section>
  )
}
