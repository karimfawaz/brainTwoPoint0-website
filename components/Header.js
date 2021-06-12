import headerStyles from '../styles/Header.module.css'


const Header = () => {

    return (
        <div className={headerStyles.header} id="header">

            <img src="brainlogo256.png" className={headerStyles.companyLogo} ></img>
            <h1 className={headerStyles.companyName}> Brain 2.0</h1>

            <h4 className={headerStyles.companySlogan}>Driven by Values, Powered by Intellect.</h4>
        </div>
    )
}

export default Header
