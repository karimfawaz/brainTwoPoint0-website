import Link from 'next/link'
import Head from 'next/head'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';


import { projectsList } from '../../list'

import allprojectsStyles from '../../styles/Allprojects.module.css'
const projects = () => {

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
        <div className={allprojectsStyles.projectsPage}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet" />
                <title>Brain 2.0 - Projects</title>
            </Head>

            <Link href='/'>
                <h4 className={allprojectsStyles.back}>
                    Go Back
                </h4>
            </Link>
            <h1 className={allprojectsStyles.title}>All Projects</h1>



            <motion.div ref={ref} initial="hidden" animate={controls} variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: .5 } }
            }} className={allprojectsStyles.projectsGrid}>

                {
                    projectsList.length === 0 ?
                        <h4 className={projectStyles.text}>Coming Soon...</h4> :
                        projectsList.map((project) => (

                            <Link key={project.id} href={"/projects/" + project.id}>
                                <div className={allprojectsStyles.projectCard}>
                                    <img src={project.logo} className={allprojectsStyles.projectLogo} alt="Brain 2.0 - Project Logo"/>
                                    <h3 className={allprojectsStyles.projectName}>{project.name}</h3>
                                    <p className={allprojectsStyles.projectDate}>{project.date}</p>
                                </div>
                            </Link>
                        ))}
            </motion.div>
        </div>
    )
}

export default projects
