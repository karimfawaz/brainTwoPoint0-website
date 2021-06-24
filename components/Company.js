import companyStyles from '../styles/Company.module.css'

const Company = () => {
    return (
        <div className={companyStyles.companySection} >
            <h2 className={companyStyles.sloganUp}>Driven by Values</h2>
                <img className={companyStyles.logo} src="brainlogo256.png" />
            
            <h2 className={companyStyles.sloganDown}>Powered by Intellect</h2>
        </div>
    )
}

export default Company
