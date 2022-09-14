import CustomImage from '@elements/image-component/CustomImage';
import React from 'react';

export const ButtonScroll = ({elementTo}) => {

  const scrollToRef = () => {
    elementTo.current.scrollIntoView({ 
      behavior: 'smooth'
    });
  }

  return (
    <section className="w-full flex justify-center md:justify-end p-[1.5rem]">
      <button
        className="border rounded-full border-3 grid place-content-center p-[1rem] w-[3rem] h-[3rem]"
        onClick={scrollToRef}>
        <CustomImage
          src="/assets/icons/arrowDown.svg"
          alt="icon-arrow-down"/>
      </button>
    </section>
  );
};
