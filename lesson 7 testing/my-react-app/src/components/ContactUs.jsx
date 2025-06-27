import React, { useState } from 'react';

function ContactUs() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {submitted ? (
        <p>Thank you, {name}! We have received your message.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}

export default ContactUs;