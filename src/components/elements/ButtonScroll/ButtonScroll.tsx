import { ArrowDownwardRounded } from '@mui/icons-material';
import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

export const ButtonScroll = ({ elementTo }) => {
  const scrollToRef = () => {
    smoothscroll.polyfill();
    elementTo.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full flex justify-center md:justify-end p-[1.5rem]">
      <button
        onTouchEnd={scrollToRef}
        className="border rounded-full pb-0.5 border-3 w-[3rem] h-[3rem] text-2xl leading-none lg:hover:bg-primary-black outline-none lg:hover:text-primary-white"
        onClick={scrollToRef}>
          <ArrowDownwardRounded fontSize="inherit"/>
      </button>
    </div>
  );
};
