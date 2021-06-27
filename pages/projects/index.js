import Link from 'next/link'
import { projectsList } from '../../list'

import allprojectsStyles from '../../styles/Allprojects.module.css'
const projects = () => {
    return (
        <div className={allprojectsStyles.projectsPage}>
            <Link href="/">Go Back</Link>
            {
                projectsList.length === 0 ?
                    <h4 className={projectStyles.text}>Coming Soon...</h4> :
                    projectsList.map((project) => (
                        <Link key={project.name} href={"/projects/" + project.id}>{project.name}</Link>
                    ))}
        </div>
    )
}

export default projects
