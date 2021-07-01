import navStyles from '../styles/Nav.module.css'
import { Link } from "react-scroll";

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
const Nav = () => {


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
        <nav className={navStyles.navBar}>
           
            <motion.div ref={ref} initial="hidden" animate={controls} variants={{
                hidden: { scale: 0 },
                visible: { scale: 1, transition: { delay: 1 } }
            }}>
                <Link className={navStyles.navItem}
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                > About</Link>

            </motion.div>

            <motion.div ref={ref} initial="hidden" animate={controls} variants={{
                hidden: { scale: 0 },
                visible: { scale: 1, transition: { delay: 1.5 } }
            }}>

                <Link className={navStyles.navItem}
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                > Services</Link>
            </motion.div>
            <a className={navStyles.brain} target="_blank" href="https://instagram.com/braintwopoint0">
                <motion.svg  ref={ref} initial="hidden" animate={controls} variants={{
                hidden: { scale: 0 },
                visible: { scale: 1, transition: { delay: .5 } }
            }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="brain" class="svg-inline--fa fa-brain fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"></path></motion.svg>
            </a>


            <motion.div ref={ref} initial="hidden" animate={controls} variants={{
                hidden: { scale: 0 },
                visible: { scale: 1, transition: { delay: 2 } }
            }}>

                <Link className={navStyles.navItem}
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                > Projects</Link>
            </motion.div>


            <motion.div ref={ref} initial="hidden" animate={controls} variants={{
                hidden: { scale: 0 },
                visible: { scale: 1, transition: { delay: 2.5 } }
            }}>

                <Link className={navStyles.navItem}
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1000}
                > Contact</Link>
            </motion.div>


        </nav>
    )
}

export default Nav
