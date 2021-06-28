import { projectsList } from "../../list"
import Head from 'next/head'
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
    return (
        <div className={projectStyles.projectPage}>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet" />
                <title>{project.name}</title>
            </Head>
            <h1>{project.name}</h1>
        </div>
    )
}

export default Project
