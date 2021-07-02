import aboutStyles from '../styles/About.module.css'

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

const About = () => {

    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        if (!inView) {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <section className={aboutStyles.about} id="about">
            <h1 className={aboutStyles.sectionTitle}>About Us</h1>
            <div className={aboutStyles.container}>

                <motion.article ref={ref} initial="hidden" animate={controls} variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1, transition: { delay: .5 } }
                }} className={aboutStyles.text}>
                    Brain 2.0 is a Software Development Firm. Founded in 2017, we aim to build efficient software solutions to help our clients with their desired activities. Brain 2.0's purpose is to elevate the way you live without compromising the simplicity needed to make our products attractive to our potential users. We make our software easy-to-use while executing complex processes in the background. We are continuously working on projects, some of which will be ready for production soon. We also offer freelancing services for any interested startup teams.<br /> <span className={aboutStyles.quote}>"Your Vision, Our Future."</span>
                </motion.article>

                <motion.img ref={ref} initial="hidden" animate={controls} variants={{
                    hidden: { x: 150, rotate: 0, opacity: 0 },
                    visible: { x: 0, rotate: -360, opacity: 1, transition: { delay: 1, duration: 1 } }
                }} className={aboutStyles.img} src="brainwhite.png" />
            </div>

        </section>
    )
}

export default About
