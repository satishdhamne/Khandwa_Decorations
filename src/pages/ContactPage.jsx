import React from 'react'

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Fill out this form to inquire about our services.</p>

      {/* <div className="google-form">
        <iframe
          src="YOUR_GOOGLE_FORM_URL"
          width="100%"
          height="800"
        //   frameBorder="0"
        //   marginHeight="0"
        //   marginWidth="0"
        >
          Loading…
        </iframe>
      </div> */}

      <div className="contact-alternative">
        <h3>Prefer to chat?</h3>
        <p>Contact us directly via WhatsApp:</p>
        <a
          href="https://wa.me/918103948789"
          className="whatsapp-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open WhatsApp Chat
        </a>
      </div>
    </div>
  );
}

export default ContactPage
