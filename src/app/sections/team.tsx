import React from 'react'
import { BrainTwoPoint0Thin } from '../layout'
import Image from 'next/image'

export default function Team() {
    const team = [
        {
            avatar: "/team/KarimFawaz.png",
            name: "Karim Fawaz",
            title: "Founder & CEO",
            linkedin: "https://www.linkedin.com/in/karim-fawaz/",
            instagram: "http://instagram.com/karimfawaz_",
        }


    ]

    return (

        <section className="flex flex-row justify-start items-center overflow-scroll no-scrollbar bg-[var(--white)]" >

            <div className="w-full flex flex-col p-4 md:p-12 items-center">

                <h1 className="font-bold text-[var(--dark-grey)] md:text-6xl text-xl mb-3 md:mb-6 w-full">MAKING IT<span className={BrainTwoPoint0Thin.className}> HAPPEN</span></h1>
                <p className='w-full text-xs md:text-lg'><span className="font-bold text-[var(--dark-grey)]">BRAIN<span className="inter-font font-light">2.0</span></span> is growing, and so is its team. Our backbone comprises of our leadership team, ambassadors, talent pool, and most importantly, our clients.</p>
                <div className="mt-12">
                    <ul className="grid text-center">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-28 h-28 md:w-48 md:h-48 mx-auto">
                                        <Image
                                            src={item.avatar}
                                            className="w-full h-full rounded-full border border-black"
                                            alt={`${item.name} Avatar`}
                                        />
                                    </div>
                                    <div className="mt-2">
                                        <h4 className="text-gray-700 font-semibold sm:text-2xl text-lg">{item.name}</h4>
                                        <p className="text-[var(--teal)] text-sm md:text-lg">{item.title}</p>
                                        <div className="mt-4 flex justify-center gap-4 text-gray-400">
                                            <a target='_blank' href={item.instagram}>
                                                <svg
                                                    className="w-5 h-5 md:w-7 md:h-7 duration-150 hover:text-gray-500"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                            </a>

                                            <a target='_blank' href={item.linkedin}>
                                                <svg className="w-5 h-5 md:w-7 md:h-7 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clipPath="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section >

    )
}
