import React from 'react';
import { BrainTwoPoint0Semibold } from '../layout';

export default function Header() {

    return (
        <section className="bg-[var(--dark-grey)]">
            <div className='flex items-center max-w-[110rem] m-auto py-16 md:py-44 pl-6 border-t-2'>
                <p className={`${BrainTwoPoint0Semibold.className} text-[var(--light)] text-2xl md:text-8xl max-w-7xl md:w-full w-4/5`}>DRIVEN BY VALUES, POWERED BY INTELLECT</p>

            </div>
        </section>
    );
}
