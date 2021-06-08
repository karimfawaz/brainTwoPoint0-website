import headerStyles from '../styles/Header.module.css'


const Header = () => {
    return (
        <div className={headerStyles.header}>
            <h1 className={headerStyles.companyName}> Brain 2.0</h1>
            <img src="brainlogo256.png"></img>
        </div>
    )
}

export default Header
