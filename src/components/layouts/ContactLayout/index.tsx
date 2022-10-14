import React from 'react';
import ContactForm from '@elements/ContactForm';

const ContactLayout = () => {
  return (
    <div className="w-full aspect-[2/3] md:aspect-square lg:aspect-[3/2] flex justify-center items-center">
      <div className="w-8/12 md:max-w-[464px] lg:max-w-[466px] xl:max-w-[639px]">
        <p className="mb-6 text-b3 md:text-[58px] xl:text-[82px] font-bold">
          Meet us in real life (or on Zoom ;)
        </p>
        <p className="mb-6 text-m4">
          Enter your email address, and we’ll get in touch to plan a coffee.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactLayout;
