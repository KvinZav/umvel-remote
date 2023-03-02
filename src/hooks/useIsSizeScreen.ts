import { Sizes } from '@enums/sizes.enum';
import { useEffect, useState } from 'react';
import useMediaQuery from './useMediaQuery';

export const useIsSizeScreen = () => {
  const isXl = useMediaQuery('(min-width: 1900px)');
  const isLg = useMediaQuery('(min-width: 1024px)');
  const isMd = useMediaQuery('(min-width: 640px)');


  const [currentScreen, setCurrentScreen] = useState<Sizes>(null);

  useEffect(() => {
    switch (true) {
      case isXl:
        setCurrentScreen(Sizes.XL);
        break;
      case isLg:
        setCurrentScreen(Sizes.LG);
        break;
      case isMd:
        setCurrentScreen(Sizes.MD);
        break;
      case !isLg && !isMd:
        setCurrentScreen(Sizes.SM);
        break;
    }
  }, [isLg, isMd, isXl]);

  return {
    currentScreen,
    isXl,
    isLg,
    isMd: currentScreen === Sizes.MD,
    isSm: currentScreen === Sizes.SM,
  };
};
