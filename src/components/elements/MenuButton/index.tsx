import useMediaQuery from '@hooks/useMediaQuery';
import useMenuButton from '@hooks/useMenuButton';
import useVerticalScroll from '@hooks/useVerticalScroll';
import React, { useEffect, useState } from 'react';

const MenuButton = () => {

  const matchMedia = useMediaQuery('(min-width: 1024px)');
  const isVerticalScroll = useVerticalScroll(1);
  const { handleToggleMenu } = useMenuButton()

  const [isBlendModeCompatible, setIsBlendModeCompatible] = useState(true)

  useEffect(() => {
    const isSafari = window.navigator.vendor.toLowerCase().includes("apple")    
    setIsBlendModeCompatible(!isSafari)
  }, [])

  const handleMenuButtonClick = () => handleToggleMenu(true)

  if(!matchMedia || isVerticalScroll) return;

  return isBlendModeCompatible ? (
    <button
      data-collapse-toggle="navbar-default"
      onClick={handleMenuButtonClick}
      type="button"
    >
      <>
        <img
          src={'/assets/images/menu-icon-white.svg'}
          className="fixed 
          top-5 right-5
          md:top-7 md:right-7
          xl:top-8 xl:right-8
          z-[99] h-5 w-5 md:w-7 md:h-7 xl:h-[46px] xl:w-[46px] mix-blend-overlay"
          alt=""
        />
        <img
          src={'/assets/images/menu-icon.svg'}
          className="fixed 
          top-5 right-5
          md:top-7 md:right-7
          xl:top-8 xl:right-8
          z-[99] h-5 w-5 md:w-7 md:h-7 xl:h-[46px] xl:w-[46px] mix-blend-saturation"
          alt=""
        />
        <img
          src={'/assets/images/menu-icon-white.svg'}
          className="fixed 
          top-5 right-5
          md:top-7 md:right-7
          xl:top-8 xl:right-8
          z-[99] h-5 w-5 md:w-7 md:h-7 xl:h-[46px] xl:w-[46px] mix-blend-difference"
          alt="Umvel an NTT Data Company"
        />
      </>
    </button>
  ) :
    (<button
      data-collapse-toggle="navbar-default"
      onClick={handleMenuButtonClick}
      type="button"
      className="flex items-center text-s3 text-gray-500 rounded-lg md:flex-row md:mt-0 md:font-medium md:border-0"
    >
      <div className="fixed 
          top-5 right-5
          md:top-7 md:right-7
          xl:top-8 xl:right-8
          z-[99] h-5 w-5 md:w-7 md:h-7 xl:h-[46px] xl:w-[46px]">
        <img
          src={'/assets/images/menu-icon.svg'}
          alt="menu"
          className="bg-primary-white bg-clip-text"
        />
      </div>
    </button>)
}

export default MenuButton;