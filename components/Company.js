import companyStyles from '../styles/Company.module.css'
const Company = () => {
    return (
        <div className={companyStyles.companySection}>
            <img className={companyStyles.logo} src="brainlogo256.png"/>
        </div>
    )
}

export default Company
