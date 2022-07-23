import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import "../../styles/Contact.css";


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hftbn2b', 'template_wpexs8b', form.current, 'XKCZNIV3S0zU37FTp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
  
    return (
    <main>
        <h1>Contact Form</h1>
        <form ref={form} onSubmit={sendEmail}>
            <div className="formItem">
                <label>Name</label>
                <input type="text" name="user_name" />
            </div>
            <div className="formItem">
                <label>Email</label>
                <input type="email" name="user_email" />
            </div>
            <div className="formItem">
                <label>Message</label>
                <textarea name="message" />
            </div>
        <input id="formSubmit" type="submit" value="Send" />
        </form>
    </main>
    );
}

export default Contact;