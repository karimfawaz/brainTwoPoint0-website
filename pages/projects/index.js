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

            <Link className={allprojectsStyles.back} href="/">Go Back</Link>
            <h1 className={allprojectsStyles.title}>All Projects</h1>



            <div className={allprojectsStyles.projectsGrid}>

                {
                    projectsList.length === 0 ?
                        <h4 className={projectStyles.text}>Coming Soon...</h4> :
                        projectsList.map((project) => (

                            <Link key={project.id} href={"/projects/" + project.id}>
                                <motion.div ref={ref} initial="hidden" animate={controls} variants={{
                                    hidden: { x: 30, opacity: 0 },
                                    visible: { x: 0, opacity: 1, transition: { delay: .5 } }
                                }} className={allprojectsStyles.projectCard}>
                                    <img src={project.logo} className={allprojectsStyles.projectLogo} />
                                    <h3 className={allprojectsStyles.projectName}>{project.name}</h3>
                                    <p className={allprojectsStyles.projectShortdesc}>{project.shortDesc}</p>
                                </motion.div>
                            </Link>
                        ))}
            </div>
        </div>
    )
}

export default projects
