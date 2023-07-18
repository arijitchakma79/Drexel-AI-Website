import React from 'react';

const ContactUs = () => {
  const handleContactClick = () => {
    window.open('mailto:drexelartificialintelligence@gmail.com');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <p>For any inquiries, please reach out to us:</p>
      <p>Phone: +12155780081</p>
      <p>Email: drexelartificialintelligence@gmail.com</p>
      <button
        onClick={handleContactClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-8 mt-8"
      >
        Email Us
      </button>
    </div>
  );
};

export default ContactUs;
