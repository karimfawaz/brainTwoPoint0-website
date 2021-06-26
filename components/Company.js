import companyStyles from '../styles/Company.module.css'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';


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
            <h2 className={companyStyles.sloganUp}>Driven by Values</h2>
            <div className={companyStyles.container}>
                <h1 className={companyStyles.name}>BRAIN 2.</h1>
                <motion.img ref={ref} initial="hidden" animate={controls} variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1, transition: { delay: .4} }
                }}
                    className={companyStyles.logo} src="brain256.png" />
            </div>
            <h2 className={companyStyles.sloganDown}>Powered by Intellect</h2>
        </div>
    )
}

export default Company
