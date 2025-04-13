import React from "react";
import ContactForm from "../../components/contactForm/ContactForm";

import ContactCard from "../../components/contact/Contact";

const Contact = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto flex items-center justify-center my-20 ">
        <ContactForm />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.905654488079!2d85.36841749999999!3d27.6893107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a3c78500b45%3A0xfc587cadb4a121ed!2sSplash%20swimming%20pool!5e0!3m2!1sen!2snp!4v1744533632102!5m2!1sen!2snp"
        allowfullscreen=""
        referrerpolicy="no-referrer-when-downgrade"
        width="100%"
        height="450"
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <ContactCard />
    </div>
  );
};

export default Contact;
