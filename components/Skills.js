import cardStyles from '../styles/Skills.module.css'

const skillsList = [
    {
        name: "Flutter"

    },
    {
        name: "HTML, CSS, JavaScript"

    },
    {
        name: "Python"

    },
    {
        name: "Java & Kotlin"

    },
    {

    }
]
const Skills = () => {
    return (
        <section className={cardStyles.cardList}>

            
            <article className={cardStyles.card}>
                <header className={cardStyles.cardHeader}>
                    <h2>Test</h2>
                    <p>TTT</p>
                </header>
            </article>
           


        </section>
    )
}

export default Skills
