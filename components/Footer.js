import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
           <h3 className={footerStyles.slogan}>Brain 2.0 - Driven by Values, Powered by Intellect.</h3>
            <h4 className={footerStyles.copyright}>Copyright &copy; 2021  Brain 2.0 All Rights Reserved</h4>
        </footer>
    )
}

export default Footer
