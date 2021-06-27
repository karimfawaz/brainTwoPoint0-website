import cardStyles from '../styles/Skills.module.css'

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';

const skillsList = [
    {
        name: "Flutter",
        description: "Flutter is a framework used to create cross-platform mobile applications. Brain 2.0 uses Flutter to create Minimum Viable Products for companies with upcoming deadlines to create a working product in record time.",
        img: "flutter.png"

    },


    {
        name: "Java & Kotlin",
        description: "Java and Kotlin are the languages use for Native Android application development. Brain 2.0 mainly uses Kotlin in Android Studio to build applications prioritising navive performance on devices.",
        img: "kotlinjava.png"


    },
    {
        name: "React.js & Next.js",
        description: "React and Next are two of the most widely used JavaScript libraries/frameworks. Brain 2.0 mainly uses React.js to build Web-Applications whilst we use Next.js for projects that prioritize Search Engine Optimization.",
        img: "reactnext.png",

    },

    {
        name: "HTML, CSS, JavaScript",
        description: "HTML, CSS, and JavaScript are the fundamentals of web development. Brain 2.0 makes use of these languages to create static web pages and landing pages.",
        img: "cssjshtml.png"
    },
]
const Skills = () => {

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
        <div className={cardStyles.skillsSection} id="skills">
            <h1 className={cardStyles.sectionTitle}>Services</h1>

            <div className={cardStyles.container}>
                <motion.svg ref={ref} initial="hidden" animate={controls} variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { delay: .7 } }
                }} className={cardStyles.svg} id="bb6f3724-1c9c-43de-b808-32b364d0d15c" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="920.29689" height="567.13599" viewBox="0 0 920.29689 567.13599"><path d="M1050.2378,538.70152H409.6489a9.92186,9.92186,0,0,1-9.91067-9.91064V176.34265a9.92186,9.92186,0,0,1,9.91064-9.91064H1050.2378a9.92189,9.92189,0,0,1,9.91065,9.91064V528.79088A9.92186,9.92186,0,0,1,1050.2378,538.70152Z" transform="translate(-139.85155 -166.43201)" fill="#e6e6e6" /><path d="M1036.72327,525.187H423.16343a9.92188,9.92188,0,0,1-9.91068-9.91065V189.85716a9.92186,9.92186,0,0,1,9.91065-9.91066h613.55975a9.9219,9.9219,0,0,1,9.91065,9.91066V515.27635A9.92185,9.92185,0,0,1,1036.72327,525.187Z" transform="translate(-139.85155 -166.43201)" fill="#fff" /><path d="M594.85175,380.73589H479.42023a4.8153,4.8153,0,0,1-4.80963-4.80964V255.70906a4.81528,4.81528,0,0,1,4.80963-4.80963H594.85175a4.81529,4.81529,0,0,1,4.80963,4.80963V375.92628A4.8153,4.8153,0,0,1,594.85175,380.73589ZM479.42023,252.82329a2.88893,2.88893,0,0,0-2.88577,2.88577V375.92628a2.88894,2.88894,0,0,0,2.88577,2.88578H594.85175a2.88894,2.88894,0,0,0,2.88581-2.88578V255.70906a2.88894,2.88894,0,0,0-2.88581-2.88577Z" transform="translate(-139.85155 -166.43201)" fill="#3f3d56" /><path d="M787.65913,380.73589H672.22761a4.8153,4.8153,0,0,1-4.80963-4.80964V255.70906a4.81529,4.81529,0,0,1,4.80963-4.80963H787.65913a4.8153,4.8153,0,0,1,4.80963,4.80963V375.92628A4.81531,4.81531,0,0,1,787.65913,380.73589ZM672.22761,252.82329a2.889,2.889,0,0,0-2.88574,2.88577V375.92628a2.8889,2.8889,0,0,0,2.88574,2.88578H787.65913a2.88891,2.88891,0,0,0,2.88574-2.88578V255.70906a2.889,2.889,0,0,0-2.88574-2.88577Z" transform="translate(-139.85155 -166.43201)" fill="#3f3d56" /><path d="M980.46644,380.73589H865.03492a4.8153,4.8153,0,0,1-4.80963-4.80964V255.70906a4.81529,4.81529,0,0,1,4.80963-4.80963H980.46644a4.81529,4.81529,0,0,1,4.80963,4.80963V375.92628A4.81528,4.81528,0,0,1,980.46644,380.73589ZM865.03492,252.82329a2.88893,2.88893,0,0,0-2.8858,2.88577V375.92628a2.88894,2.88894,0,0,0,2.8858,2.88578H980.46644a2.8889,2.8889,0,0,0,2.8858-2.88578V255.70906a2.88893,2.88893,0,0,0-2.8858-2.88577Z" transform="translate(-139.85155 -166.43201)" fill="#3f3d56" /><path d="M514.846,454.23412a3.26532,3.26532,0,1,0,.00268-6.53064H485.54652a3.26532,3.26532,0,1,0,0,6.53064H514.846Z" transform="translate(-139.85155 -166.43201)" fill="#e6e6e6" /><path d="M588.72547,434.99559a3.26531,3.26531,0,1,0,.012-6.53061H485.54652a3.26531,3.26531,0,0,0,0,6.53061Z" transform="translate(-139.85155 -166.43201)" fill="#e6e6e6" /><path d="M707.65339,454.23412a3.26532,3.26532,0,0,0,0-6.53064h-29.2995a3.26532,3.26532,0,1,0,0,6.53064Z" transform="translate(-139.85155 -166.43201)" fill="#e6e6e6" /><path d="M781.53284,434.99559a3.26531,3.26531,0,0,0,0-6.53061H678.35389a3.26531,3.26531,0,0,0,0,6.53061Z" transform="translate(-139.85155 -166.43201)" fill="#e6e6e6" /><path d="M900.4607,454.23412a3.26532,3.26532,0,0,0,0-6.53064H871.1612a3.26532,3.26532,0,1,0-.00268,6.53064H900.4607Z" transform="translate(-139.85155 -166.43201)" fill="#e6e6e6" /><path d="M974.34016,434.99559a3.26531,3.26531,0,0,0,0-6.53061H871.1612a3.26531,3.26531,0,1,0-.012,6.53061H974.34016Z" transform="translate(-139.85155 -166.43201)" fill="#e6e6e6" /><path d="M588.72547,416.07524a3.26532,3.26532,0,0,0,.00269-6.53064H485.54652a3.26532,3.26532,0,1,0,0,6.53064H588.72547Z" transform="translate(-139.85155 -166.43201)" fill="#52616b" /><path d="M781.53284,416.07524a3.26532,3.26532,0,0,0,0-6.53064H678.35389a3.26532,3.26532,0,1,0,0,6.53064Z" transform="translate(-139.85155 -166.43201)" fill="#52616b" /><path d="M974.34016,416.07524a3.26532,3.26532,0,0,0,0-6.53064H871.1612a3.26532,3.26532,0,0,0-.00268,6.53064H974.34016Z" transform="translate(-139.85155 -166.43201)" fill="#52616b" /><path d="M570.25562,357.43755a3.26531,3.26531,0,0,0,0-6.53061H504.0164a3.26531,3.26531,0,1,0-.01194,6.53061h66.25116Z" transform="translate(-139.85155 -166.43201)" fill="#e6e6e6" /><path d="M570.25562,338.199a3.26531,3.26531,0,0,0,0-6.53061H504.0164a3.26531,3.26531,0,1,0-.01194,6.53061h66.25116Z" transform="translate(-139.85155 -166.43201)" fill="#e6e6e6" /><circle cx="397.28445" cy="128.48808" r="20.72228" fill="#52616b" /><path d="M763.063,357.43755a3.26531,3.26531,0,0,0,0-6.53061H696.82374a3.26531,3.26531,0,0,0,0,6.53061Z" transform="translate(-139.85155 -166.43201)" fill="#e6e6e6" /><path d="M763.063,338.199a3.26531,3.26531,0,0,0,0-6.53061H696.82374a3.26531,3.26531,0,0,0,0,6.53061Z" transform="translate(-139.85155 -166.43201)" fill="#e6e6e6" /><circle cx="590.0918" cy="128.48808" r="20.72228" fill="#52616b" /><path d="M955.87031,357.43755a3.26531,3.26531,0,1,0,.012-6.53061H889.63111a3.26531,3.26531,0,0,0,0,6.53061Z" transform="translate(-139.85155 -166.43201)" fill="#e6e6e6" /><path d="M955.87031,338.199a3.26531,3.26531,0,1,0,.012-6.53061H889.63111a3.26531,3.26531,0,0,0,0,6.53061Z" transform="translate(-139.85155 -166.43201)" fill="#e6e6e6" /><circle cx="782.89911" cy="128.48808" r="20.72228" fill="#52616b" /><polygon points="69.4 554.299 81.66 554.299 87.492 507.011 69.398 507.012 69.4 554.299" fill="#ffb6b6" /><path d="M206.124,716.7287l24.144-.001h.001A15.38728,15.38728,0,0,1,245.65551,732.114v.5l-39.53076.00146Z" transform="translate(-139.85155 -166.43201)" fill="#2f2e41" /><polygon points="111.4 554.299 123.66 554.299 129.492 507.011 111.398 507.012 111.4 554.299" fill="#ffb6b6" /><path d="M248.124,716.7287l24.144-.001h.001A15.38728,15.38728,0,0,1,287.65551,732.114v.5l-39.53076.00146Z" transform="translate(-139.85155 -166.43201)" fill="#2f2e41" /><polygon points="157.987 348.297 128.038 533.282 108.038 532.282 108.534 362.427 157.987 348.297" fill="#2f2e41" /><path d="M217.09914,458.21162l72.66561,1.00922,8.07394,55.50839-49.453,23.21265L226.88976,694.7142l-19-1-6.93857-194.12364Z" transform="translate(-139.85155 -166.43201)" fill="#2f2e41" /><circle cx="120.64505" cy="126.26344" r="22.20337" fill="#ffb9b9" /><polygon points="131.038 161.282 143.858 177.735 137.802 303.89 90.368 302.881 82.294 192.874 92.386 164.615 96.038 158.282 131.038 161.282" fill="#e4e4e4" /><path d="M292.79249,391.60143l11.10168,42.38827-11.10168,42.38824,18.16638,24.22187,16.14792-76.70258s-12.111-62.57309-13.12021-69.63785-3.02771-8.074-3.02771-8.074l-8.074,1.00925Z" transform="translate(-139.85155 -166.43201)" fill="#2f2e41" /><polygon points="72.202 241.317 65.137 254.438 63.118 276.641 67.155 301.872 53.026 325.085 38.897 261.502 54.035 179.753 60.091 179.753 72.202 241.317" fill="#2f2e41" /><path d="M241.29467,298.44652l-.526,8.97561s-6.51241-14.72671-7.52165-29.86535,16.14792-18.16638,26.24035-19.17563S286.737,264.4366,286.737,272.51057s-18.16642,6.05549-25.23111,4.037-10.09244,15.13867-10.09244,15.13867l-4.037,1.00925Z" transform="translate(-139.85155 -166.43201)" fill="#2f2e41" /><path d="M295.8202,405.73082l-4.037,38.35129,8.07394,23.21264,5.04624,22.20337s-.00006,21.19416-20.18488,22.20337-78.721-1.00921-78.721-1.00921-8.07395-1.00928-15.13866-17.15717,14.12942-31.28656,14.12942-31.28656l6.0555-21.19415L209.02528,414.814l-14.12957-68.62863,41.88364-21.69876,10.59706,103.44754,22.708-100.4198,7.56934,5.55084,32.29583,13.12018Z" transform="translate(-139.85155 -166.43201)" fill="#2f2e41" /><polygon points="257.738 567.136 0 567.136 0 565.03 258.12 565.03 257.738 567.136" fill="#3f3d56" /></motion.svg>
                <motion.section ref={ref} initial="hidden" animate={controls} variants={{
                    hidden: { x: 200, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { delay: .7 } }
                }} className={cardStyles.cardList}>

                    {skillsList.map((skillCard) => (<article className={cardStyles.card}>
                        <img src={skillCard.img} className={cardStyles.skillImg} />
                        <header className={cardStyles.cardHeader}>

                            <h2>{skillCard.name}</h2>
                            <p>{skillCard.description}</p>
                        </header>
                    </article>))}
                </motion.section>
            </div>

        </div>
    )
}

export default Skills
