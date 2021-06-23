import companyStyles from '../styles/Company.module.css'
const Company = () => {
    return (
        <div className={companyStyles.companySection}>
            <h1 className={companyStyles.name}>BRAIN 2.0</h1>
            <div className={companyStyles.container}>
                <h2 className={companyStyles.sloganUp}>Driven by Values</h2>
                <img className={companyStyles.logo} src="brainlogo256.png" />
                <h2 className={companyStyles.sloganDown}>Powered by Intellect</h2>
            </div>
        </div>
    )
}

export default Company
