import { projectsList } from "../../list"
import Head from 'next/head'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
import projectStyles from '../../styles/Project.module.css'

export const getStaticPaths = async () => {

    const paths = projectsList.map(project => {
        return {
            params: { id: project.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const id = context.params.id;
    const data = projectsList[id - 1]
    return {
        props: { project: data }
    }
}

const Project = ({ project }) => {
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
        <div className={projectStyles.projectPage}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet" />
                <title>{project.name}</title>
            </Head >
            <Link href='/projects/'>
                <h4 className={projectStyles.back}>
                    Go Back
                </h4>
            </Link>

            <div className={projectStyles.nameLogo}>
                <motion.img ref={ref} initial="hidden" animate={controls} variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { scale: 1, opacity: 1, transition: { delay: .5 } }
                }} className={projectStyles.projectLogo} src={project.logo} />
                <div className={projectStyles.nameDesc}>
                    <motion.h1 ref={ref} initial="hidden" animate={controls} variants={{
                        hidden: { x: 30, opacity: 0 },
                        visible: { x: 0, opacity: 1, transition: { delay: .75 } }
                    }} className={projectStyles.projectName}>{project.name}</motion.h1>
                    <motion.h3 ref={ref} initial="hidden" animate={controls} variants={{
                        hidden: { x: 30, opacity: 0 },
                        visible: { x: 0, opacity: 1, transition: { delay: 1.5 } }
                    }} className={projectStyles.projectDesc}>{project.shortDesc}</motion.h3>
                    <motion.h3 ref={ref} initial="hidden" animate={controls} variants={{
                        hidden: { scale: 0, opacity: 0 },
                        visible: { scale: 1, opacity: 1, transition: { delay: 2 } }
                    }} className={projectStyles.projectDate}>{project.date}</motion.h3>
                </div>

            </div>
            <motion.article ref={ref} initial="hidden" animate={controls} variants={{
                hidden: { x: -30, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { delay: 2.5 } }
            }} className={projectStyles.text}>
                {project.text}
            </motion.article>
            <div className={projectStyles.screenshotContainer}>
                {project.screenshots.map((screenshot) => (<img key={project.screenshot} className={projectStyles.screenshot} src={screenshot} alt="Brain 2.0 - Project Screenshot" />))}
            </div>

        </div>
    )
}

export default Project
