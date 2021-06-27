import Link from 'next/link'
import projectsList from './list'
const Projects = () => {
    return (
        <div>
            {
                projectsList.length === 0 ?
                    <h4 className={projectStyles.text}>Coming Soon...</h4> :
                    projectsList.map((project) => (
                        <Link key={project.name} href={"/projects/" + project.id}>{project.name}</Link>
                    ))}
        </div>
    )
}

export default Projects
