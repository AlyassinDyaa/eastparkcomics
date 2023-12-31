import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'dyaaalyassin99@gmail.com', // To email address
          from: formData.email, // From email address (can be your own)
          subject: formData.subject,
          text: formData.message,
        }),
      });

      if (response.ok) {
        // Email sent successfully
        alert('Email sent successfully');
      } else {
        // Handle other response status codes (e.g., server errors)
        console.error('Error sending email:', response.statusText);
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error:', error);
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {/* ... form fields */}
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
