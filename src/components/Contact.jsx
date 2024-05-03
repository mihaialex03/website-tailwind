import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [showNotification, setShowNotification] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7hsaddr', 'template_g7y2965', form.current, '-X-BmEWgrRAtMl3US')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setShowNotification(true);

        //   notification timeout
          setTimeout(() => {
            setShowNotification(false);
          }, 2000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" name="user_name" className="w-full border border-gray-300 rounded-md px-4 py-2" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" name="user_email" className="w-full border border-gray-300 rounded-md px-4 py-2" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Message</label>
            <textarea name="message" className="w-full border border-gray-300 rounded-md px-4 py-2"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send</button>
        </form>
        {showNotification && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded">
            Message has been sent
          </div>
        )}
      </div>
    </section>
  );
};
