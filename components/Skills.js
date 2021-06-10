import cardStyles from '../styles/Skills.module.css'

const skillsList = [
    {
        name: "Flutter",
        description: "Flutter is a framework used to create cross-platform mobile applications. Brain 2.0 uses Flutter to create Minimum Viable Products for companies with upcoming deadlines to create a working product in record time",
        img: "flutter.png"

    },

  
    {
        name: "Java & Kotlin",
        img: "kotlinjava.png"

    },
    {
        name: "React.js & Next.js",
        img: "nextreact.png",

    }, 
    
    {
        name: "HTML, CSS, JavaScript",
        description: "HTML, CSS, and JavaScript are the fundamentals of web development. Brain 2.0 makes use of these languages to create static web pages and landing pages.",
        img: "cssjshtml.png"
    },
]
const Skills = () => {
    return (
        <div className={cardStyles.skillsSection}>
            <h1>Skills & Services</h1>
            <section className={cardStyles.cardList}>

                {skillsList.map((skillCard) => (<article className={cardStyles.card}>
                    <img src={skillCard.img} height="150px" width="150px" className={cardStyles.skillImg} />
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
