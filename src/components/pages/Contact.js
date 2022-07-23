import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { validateEmail } from "../../utils/helpers";
import "../../styles/Contact.css";


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
    //   e.preventDefault();
  
      emailjs.sendForm('service_hftbn2b', 'template_wpexs8b', form.current, 'XKCZNIV3S0zU37FTp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        // e.target.reset()
    };

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
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
    };
  
    return (
    <main>
        <h1>Contact Form</h1>
        <form ref={form}>
            <div className="formItem">
                <label>Name</label>
                <input type="text" name="user_name" onChange={handleInputChange}/>
            </div>
            <div className="formItem">
                <label>Email</label>
                <input type="email" name="user_email" onChange={handleInputChange}/>
            </div>
            <div className="formItem">
                <label>Message</label>
                <textarea name="message"/>
            </div>
        <input id="formSubmit" type="submit" value="Send" onClick={handleFormSubmit} />
        </form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </main>
    );
}

export default Contact;