import contactStyles from '../styles/Contact.module.css'


import emailjs from 'emailjs-com';


const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_t444twk', e.target, 'user_Eqk0m1Vduvh2d2HcbRols')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );

}

export default Contact
