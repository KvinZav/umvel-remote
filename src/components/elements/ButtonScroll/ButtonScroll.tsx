import CustomImage from '@elements/image-component/CustomImage';
import React, { useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

export const ButtonScroll = ({ elementTo }) => {
  const scrollToRef = () => {
    setIsHovered(false)
    smoothscroll.polyfill();

    elementTo.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex justify-center md:justify-end p-[1.5rem]">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={scrollToRef}
        className="border rounded-full border-3 grid place-content-center p-[1rem] w-[3rem] h-[3rem] lg:hover:bg-primary-black"
        onClick={scrollToRef}>
          {
            isHovered ? 
              <CustomImage
                src="/assets/icons/arrow-down-white.svg"
                alt="icon-arrow-down"
              /> :
              <CustomImage
                src="/assets/icons/arrowDown.svg"
                alt="icon-arrow-down"
              />    
          }
      </button>
    </div>
  );
};
