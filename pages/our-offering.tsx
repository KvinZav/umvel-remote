
import ContactForm from '@elements/ContactForm';
import UmvelCard from '@modules/footer/UmvelCard';
import Services from '@modules/whatWeOffer';
import React from 'react';

const OurOffering = () => {

  return (
    <>
      <Services />
      <UmvelCard darkTheme={true}>
        <div className="p-12 lg:p-[max(10%_128px)]">
          <h1 className="mb-6 font-bold text-2xl md:text-[28px] lg:text-[58px] leading-tight">Meet us<br className="hidden lg:inline" />in real life<br />(or on Zoom ;)</h1>
          <p className="mb-6 lg:text-lg">Enter your email address, and we’ll get in touch to plan a coffee.</p>
          <ContactForm theme="dark" />
        </div>
      </UmvelCard>
    </>
  )
}

export default OurOffering
