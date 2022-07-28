import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
// import {sendText,sendMail} from '../../utils/emailtext';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
      let message = `You got a message from ${formState.name}. The message is "${formState.message}". You can contact them back at ${formState.email}`;
      // sendText();sendMail();
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid!');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Your ${e.target.name} is required!`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section style={{marginLeft:'50px'}}>
      <h1 style={{marginBottom:'35px', fontWeight:'bold'}}>Contact me</h1>
      <h4 style={{marginBottom:'15px'}}>Leave me a message</h4>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <input style={{marginBottom:'15px'}} type="text" name="name" placeholder="Name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <input style={{marginBottom:'15px'}} type="email" name="email" placeholder="Email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <textarea style={{marginBottom:'10px'}} name="message" rows="5" placeholder="Message" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
      <div style={{marginTop:'25px'}}>
        <h2 style={{marginBottom:'25px'}}> Or </h2>
        <h4>Contact me at:</h4>
        <h4>rohithsuresh06@gmail.com</h4>
      </div>
    </section>
  );
}

export default ContactForm;
