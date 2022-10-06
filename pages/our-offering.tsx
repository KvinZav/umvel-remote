import ContactForm from '@elements/ContactForm';
import UmvelCard from '@modules/footer/UmvelCard';
import React, { Suspense } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Services = dynamic(() => import('@modules/whatWeOffer'), {
  suspense: true,
});



const OurOffering = () => {
  return (
    <>
      <Head>
        <title>Meaningful digital products through an end- to- end approach</title>
        <meta name="keywords" content="Software Development, UX research, design" />
        <meta
          name="description"
          content="We work with proven methodologies and frameworks, to make sure that we design, build and run your digital platform in the best way possible - no matter the challenge."
        />
      </Head>
      <Suspense>
        <Services />
      </Suspense>
      <UmvelCard darkTheme={true}>
        <div className="p-12 md:p-[min(8%,_48px)] lg:p-[min(9%,_128px)]">
          <h1 className="mb-6 font-bold text-m3 lg:text-b3">
            Meet us <br className="hidden lg:inline" />in real life
            <br />
            (or on Zoom ;)
          </h1>
          <p className="mb-6 text-s1">
            Enter your email address, and we’ll get in touch to plan a coffee.
          </p>
          <ContactForm theme="dark" />
        </div>
      </UmvelCard>
    </>
  );
};

export default OurOffering;
