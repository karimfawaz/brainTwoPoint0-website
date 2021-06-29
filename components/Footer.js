import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>



            <a target="_blank" href="https://instagram.com/braintwopoint0">
                
                <h4 className={footerStyles.contactLink}>@BrainTwoPoint0</h4>
            </a>

            <a target="_blank" href="mailto: braintwopoint0@gmail.com">
              
                <h4 className={footerStyles.contactLink}>BrainTwoPoint0@gmail.com</h4>
            </a>





            <h4 className={footerStyles.copyright}>Copyright &copy; 2021  Brain 2.0 All Rights Reserved</h4>
        </footer>
    )
}

export default Footer
