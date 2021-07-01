import contactStyles from '../styles/Contact.module.css'
const Contact = () => {
    return (
        <div className={contactStyles.contactSection} >
            <h1 className={contactStyles.sectionTitle}>Contact</h1>

            <div className={contactStyles.formContainer}>


                <form name="contact" method="POST" data-netlify="true" className={contactStyles.form}>
                    <input type="hidden" name="form-name" value="contact" />

                    <label htmlFor="name" className={contactStyles.formLabel}>Name:</label>
                    <input type="text" id="name" name="name" />


                    <label htmlFor="email" className={contactStyles.formLabel}>E-Mail:</label>
                    <input type="email" id="email" name="email" />


                    <label htmlFor="message" className={contactStyles.formLabel}>Message:</label>
                    <textarea id="message" name="message" />

                    <button type="submit" className={contactStyles.submitButton}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
