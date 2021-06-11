import headerStyles from '../styles/Header.module.css'


const Header = () => {

    return (
        <div className={headerStyles.header} id="header">
            <div className={headerStyles.nameLogo}>
                <img src="brainlogo256.png" className={headerStyles.companyLogo} ></img>
                <h1 className={headerStyles.companyName}> Brain 2.0</h1>
            </div>
            <h4 className={headerStyles.companySlogan}>Driven by Values, Powered by Intellect.</h4>
        </div>
    )
}

export default Header
