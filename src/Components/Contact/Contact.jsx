import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>APPLICATION FORM</h1>
      <div className="google-form">
        <iframe
          title="Google Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSf5w4quXMmzaGByaiITSszh1xHmTL1p8YY8yNR9gOfXXb-vvg/viewform?usp=pp_url"
          width="100%"
          height="800"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
