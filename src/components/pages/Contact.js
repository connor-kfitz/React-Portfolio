import React, { useRef, useState } from "react";
import Footer from "../Footer.js";
import emailjs from 'emailjs-com';
import { validateEmail } from "../../utils/helpers";
import "../../styles/Contact.css";


function Contact() {
    const form = useRef();

    const sendEmail = () => {  
      emailjs.sendForm('service_hftbn2b', 'template_wpexs8b', form.current, 'XKCZNIV3S0zU37FTp')
        .then((result) => {
            console.log(result.text);

        }, (error) => {
            console.log(error.text);
        });
    };

    const [nameRequired, setNameRequired] = useState('');
    const [emailRequired, setEmailRequired] = useState('');

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'user_email') {
          setEmail(inputValue);
        } else if (inputType === 'user_name') {
          setUserName(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
      };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        if (!userName){
            setErrorMessage('Please enter a name!');
            return;
        } else if(!validateEmail(email)) {
            setErrorMessage('Please enter a valid email');
            return;
        }

        sendEmail();
        setUserName('');
        setEmail('');
        setMessage('');
    };
  
    return (
        <div>
            <div id="mainContact" className="flex">
                <div id="contactForm">
                <h1 id="contactFormTitle">Contact Form</h1>
                <form ref={form}>
                    <div className="formItem">
                        <label>Name</label>
                        <input value={userName}
                            type="text" 
                            name="user_name" 
                            onChange={handleInputChange} 
                            onMouseEnter={() => setNameRequired(true)} 
                            onMouseLeave={() => setNameRequired(false)}/>
                        {nameRequired && (
                            <h6 className="requiredFieldMessage">This field is is required</h6>
                        )}
                    </div>
                    <div className="formItem">
                        <label>Email</label>
                        <input value={email}
                            type="email" 
                            name="user_email" 
                            onChange={handleInputChange}
                            onMouseEnter={() => setEmailRequired(true)} 
                            onMouseLeave={() => setEmailRequired(false)}/>
                        {emailRequired && (
                            <h6 className="requiredFieldMessage">This field is is required</h6>
                        )}
                    </div>
                    <div className="formItem">
                        <label>Message</label>
                        <textarea value={message} onChange={handleInputChange} name="message" />
                    </div>
                        <input id="formSubmit" 
                            type="submit" 
                            value="Send" 
                            onClick={handleFormSubmit}
                            />
                </form>
                {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
            )}
            </div>
            </div>    
            <Footer/>
        </div>
);
}

export default Contact;