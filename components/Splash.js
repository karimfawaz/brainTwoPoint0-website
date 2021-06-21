import splashStyles from '../styles/Splash.module.css'



const Splash = () => {

    return (
        <div className={splashStyles.splash} >

            <img src="brainlogo256.png" className={splashStyles.companyLogo} ></img>
            <div className={splashStyles.container}>

                <h1 className={splashStyles.companyName}> Brain 2.0</h1>

                <h4 className={splashStyles.companySlogan}>Driven by Values, Powered by Intellect.</h4>
            </div>
        </div>
    )
}

export default Splash
