import cardStyles from '../styles/Skills.module.css'

const skillsList = [
    {
        name: "Flutter",
        description: "Flutter is a framework used to create cross-platform mobile applications. Brain 2.0 uses Flutter to create Minimum Viable Products for companies with upcoming deadlines to create a working product in record time",

    },
    {
        name: "HTML, CSS, JavaScript",
        description: "HTML, CSS, and JavaScript are the fundamentals of web development. Brain 2.0 makes use of these languages to create static web pages and landing pages."

    },
    {
        name: "Python",


    },
    {
        name: "Java & Kotlin",

    },
    {
        name: "React.js & Next.js",

    }
]
const Skills = () => {
    return (
        <div className={cardStyles.skillsSection}>
            <h1>Skills & Services</h1>
            <section className={cardStyles.cardList}>

                {skillsList.map((skillCard) => (<article className={cardStyles.card}>
                    <header className={cardStyles.cardHeader}>
                        <h2>{skillCard.name}</h2>
                        <p>{skillCard.description}</p>
                    </header>
                </article>))}




            </section>
        </div>
    )
}

export default Skills
