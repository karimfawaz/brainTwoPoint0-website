import { projectsList } from "../../list"

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
            <h1>{project.name}</h1>
        </div>
    )
}

export default Project
