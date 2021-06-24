import companyStyles from '../styles/Company.module.css'
const Company = () => {
    return (
        <div className={companyStyles.companySection}>
            <h2 className={companyStyles.sloganUp}>Driven by Values</h2>
            <div className={companyStyles.container}>
                <h1 className={companyStyles.name}>BRAIN 2.</h1>
                <img className={companyStyles.logo} src="brain256.png" />
            </div>
            <h2 className={companyStyles.sloganDown}>Powered by Intellect</h2>
        </div>
    )
}

export default Company
