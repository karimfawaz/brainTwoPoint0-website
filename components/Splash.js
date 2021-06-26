import splashStyles from '../styles/Splash.module.css'

import { motion } from 'framer-motion'



const Splash = () => {

    return (
        <div className={splashStyles.splash} >

            <motion.img initial={{ y: -400, opacity: 0 ,scale:0}} animate={{ y: 0, opacity: 1 , scale:1 }} transition={{ delay: .6 }} src="brainlogo256.png" className={splashStyles.companyLogo} ></motion.img>
            <div className={splashStyles.container}>

                <motion.h1 initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .2 }} className={splashStyles.companyName}> Brain 2.0</motion.h1>

                <motion.h4 initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .4 }} className={splashStyles.companySlogan}>Driven by Values, Powered by Intellect.</motion.h4>
            </div>
        </div>
    )
}

export default Splash
