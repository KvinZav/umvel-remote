import CustomImage from '@elements/image-component/CustomImage';
import { useStartHomeAnimation } from '@hooks/useStartHomeAnimation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MainLogo = () => {
  const [isBlendModeCompatible, setIsBlendModeCompatible] = useState(true);
  const { stylesNav, classTransitions } = useStartHomeAnimation();

  useEffect(() => {
    const isSafari = window.navigator.vendor.toLowerCase().includes('apple');
    setIsBlendModeCompatible(!isSafari);
  }, []);

  return (
    //The main logo combines three layers with different overlay effects each so
    <Link href="/">
      {isBlendModeCompatible ? (
        <a>
          <CustomImage
            src="/assets/images/ntt-umvel-logo-complete-white.svg"
            className={`
                ${classTransitions.five}
                fixed
                top-3 left-4 w-[155] h-8
                md:top-6 md:left-6
                lg:top-5 lg:left-8
                xl:top-8 xl:left-8 xl:w-[316px] xl:h-[46px]
                z-[99] mix-blend-overlay
                `}
            alt="Umvel an NTT Data Company"
            style={stylesNav}
          />
          <CustomImage
            src="/assets/images/ntt-umvel-logo-complete.svg"
            className={`
                ${classTransitions.five}
                fixed
                top-3 left-4 w-[155] h-8
                md:top-6 md:left-6
                lg:top-5 lg:left-8
                xl:top-8 xl:left-8 xl:w-[316px] xl:h-[46px]
                z-[99] mix-blend-saturation
                `}
            alt="Umvel an NTT Data Company"
            style={stylesNav}
          />
          <CustomImage
            src="/assets/images/ntt-umvel-logo-complete-white.svg"
            className={`
                ${classTransitions.five}
                fixed
                top-3 left-4 w-[155] h-8
                md:top-6 md:left-6
                lg:top-5 lg:left-8
                xl:top-8 xl:left-8 xl:w-[316px] xl:h-[46px]
                z-[99] mix-blend-difference`}
            alt="Umvel an NTT Data Company"
            style={stylesNav}
          />
        </a>
      ) : (
        <a>
          <CustomImage
            src="/assets/images/ntt-umvel-logo-complete.svg"
            className={`
                ${classTransitions.five}
                fixed
                top-3 left-4 w-[155] h-8
                md:top-6 md:left-6
                lg:top-5 lg:left-8
                xl:top-8 xl:left-8 xl:w-[316px] xl:h-[46px]
                z-[99]`}
            alt="Umvel an NTT Data Company"
            style={stylesNav}
          />
        </a>
      )}
    </Link>
  );
};

export default MainLogo;
