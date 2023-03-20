import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";


function Contact() {
    // create fields for the form and set each string to empty
    const [email, setEmail] = useState('');
    const [userName, setUserName] =useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { trigger} = e;
        const inputType = trigger.name;
        const inputValue = trigger.value;

        // set value to match input type
        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "userName") {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // stops the page from refreshing
        e.preventDefault();

        setUserName('');
        setEmail('');
        setMessage('');
    }


    return (
        <section id="reach-out" className="contact">
          <div className="flex-row">
            <h2 className="section-title secondary-border">Reach Out</h2>
          </div>
    
          <div className="contact-info">
            <div>
              <h3>Hello {userName}</h3>
              <p>Want to get into contact?</p>
              <address>
                Denver, Co <br />
                <br />
                Email:{" "}
                <a href="mailto://r1smith3333@gmail.com">
                  r1smith3333@gmail.com
                </a>
              </address>
              <p>
                <strong>I appreciate all input!</strong>
              </p>
            </div>
    
            {/* contact form section  */}
            <div className="contact-form">
              <h3>Contact Me</h3>
              <form className="form">
                {/* Name */}
                <label for="contact-name">Your Name</label>
                <input
                  value={userName}
                  name="userName"
                  onChange={handleInputChange}
                  type="text"
                  id="contact-name"
                  placeholder="Your Name"
                />
    
                {/* Email */}
                <label for="contact-email">Your Email</label>
                <input
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  type="email"
                  id="contact-email"
                  placeholder="Your Email"
                />
    
                {/* Message */}
                <label for="contact-message">Message</label>
                <textarea
                  value={message}
                  name="message"
                  onChange={handleInputChange}
                  type="message"
                  id="contact-message"
                  placeholder="Your Message"
                />
                <button type="button" onClick={handleFormSubmit}>
                  Submit
                </button>
              </form>
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </div>
        </section>
      );
    }
    
    export default Contact;


