import companyStyles from '../styles/Company.module.css'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';


const Company = () => {
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
        <div className={companyStyles.companySection}>
            <motion.h2 ref={ref} initial="hidden" animate={controls} variants={{
                hidden: { x: -400, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { delay: .5 } }
            }} className={companyStyles.sloganUp}>Driven by Values</motion.h2>
            <div className={companyStyles.container}>
                <motion.h1 ref={ref} initial="hidden" animate={controls} variants={{
                hidden: { rotate: 0, opacity: 0 },
                visible: { rotate: [0,2,-3,0], opacity: 1, transition: { delay: .5 } }
            }} className={companyStyles.name}>BRAIN 2.</motion.h1>
                <motion.img ref={ref} initial="hidden" animate={controls} variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1, transition: { delay: .5 } }
                }}
                    className={companyStyles.logo} src="brain256.png" />
            </div>
            <motion.h2 ref={ref} initial="hidden" animate={controls} variants={{
                hidden: { x: 400, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { delay: .5 } }
            }} className={companyStyles.sloganDown}>Powered by Intellect</motion.h2>
        </div>
    )
}

export default Company
