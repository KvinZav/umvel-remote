import useMediaQuery from '@hooks/useMediaQuery';
import React from 'react';
import DesktopScrollInteraction3 from './desktop';
import MobileScrollInteraction3 from './mobile';

const ScrollInteraction3 = () => {  
  
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <>
      {isDesktop ? (
        <DesktopScrollInteraction3 />
      ) : (
        //Phone and Tablet
        <MobileScrollInteraction3 />
      )}
    </>
  );
};

export default ScrollInteraction3;
