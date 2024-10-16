import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.css"

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading when form is submitted

    emailjs
        .sendForm('service_qozf4f4', 'template_w80g92c', form.current, 'AolOkQ7qH66WPK1Gr')
        .then(
        () => {
          setStatus('SUCCESS');
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('FAILED');
        }
      )
      .finally(() => {
        setLoading(false); // Stop loading regardless of success or failure
      });
  };

  return (
    <section id="contact" className="p-10 w-1/2 mx-auto">
      <div className="contact-wrapper max-w-lg mx-auto">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-5">
          
          <div className="form-group">
            <label htmlFor="user_name" className="text-white">Name</label>
            <input
              type="text"
              name="user_name"
              className="form-control w-full p-4 rounded bg-gray-800 text-white"
              placeholder="NAME"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_email" className="text-white">Email</label>
            <input
              type="email"
              name="user_email"
              className="form-control w-full p-4 rounded bg-gray-800 text-white"
              placeholder="EMAIL"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="text-white">Message</label>
            <textarea
              name="message"
              className="form-control w-full p-4 rounded bg-gray-800 text-white"
              rows="10"
              placeholder="MESSAGE"
              required
            />
          </div>

          <button
            className="btn bg-blue-500 text-white p-3 rounded hover:bg-blue-700 transition duration-300"
            type="submit"
            disabled={loading} // Disable button while loading
          >
            <div className="flex items-center justify-center space-x-2">
              {loading ? (
                <span className="loader"></span> // You can use a loading spinner here
              ) : (
                <>
                  <i className="fa fa-paper-plane"></i>
                  <span className="send-text">SEND</span>
                </>
              )}
            </div>
          </button>

          {/* Display success or error messages */}
          {status === 'SUCCESS' && <p className="text-green-500 mt-4">Message sent successfully!</p>}
          {status === 'FAILED' && <p className="text-red-500 mt-4">Message failed to send. Please try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
