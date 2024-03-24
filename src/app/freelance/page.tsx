import OurServices from './services';
import Partners from './partners';
import AboutFreelance from './about';

export default function Freelance() {
    return (
        <div className="flex flex-col justify-center items-center bg-[var(--dark-grey)] ">
            <AboutFreelance />
            <Partners />
            <OurServices />


        </div>
    )
}
