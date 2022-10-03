import React from 'react';
import ContactForm from '@elements/ContactForm';

const ContactLayout = () => {
  return (
    <div className="w-full aspect-[2/3] md:aspect-square lg:aspect-[3/2] flex justify-center items-center">
      <div className="w-8/12 md:w-2/3 lg:w-5/12">
        <p className="mb-6 md:text-6xl text-3xl font-bold lg:text-7xl">
          Meet us in real life (or on Zoom ;)
        </p>
        <p className="mb-6 md:text-2xl lg:text-2xl">
          Enter your email address, and we’ll get in touch to plan a coffee.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactLayout;
