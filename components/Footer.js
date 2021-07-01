import footerStyles from '../styles/Footer.module.css'


import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

const Footer = () => {

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
        <motion.footer id="footer" ref={ref} initial="hidden" animate={controls} variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { delay: .5 } }
        }} className={footerStyles.footer}>

            <a target="_blank" href="https://instagram.com/braintwopoint0">

                <h4 className={footerStyles.contactLink}>@BrainTwoPoint0</h4>
            </a>

            <a target="_blank" href="mailto: braintwopoint0@gmail.com">

                <h4 className={footerStyles.contactLink}>BrainTwoPoint0@gmail.com</h4>
            </a>





            <h4 className={footerStyles.copyright}>Copyright &copy; 2021  Brain 2.0 All Rights Reserved</h4>
        </motion.footer>
    )
}

export default Footer
