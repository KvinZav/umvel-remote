import { useIsSizeScreen } from '@hooks/useIsSizeScreen';
import { createContext, useEffect, useMemo, useState } from 'react';

const initialState = {
  navHeight: 0,
  paddingImage: 0,
  isFinished: true,
  isInitialized: false,
  showMosaicSlider: true,
  initializeAnimation: () => null,
};

export const StartHomeContext = createContext(initialState);

export function StartHomeContextProvider(props: any) {
  const { isXl, isLg, isMd, isSm } = useIsSizeScreen();

  const [values, setValues] = useState(initialState);
  const navHeight = useMemo(() => {
    if (isXl) {
      return 126;
    } else if (isLg) {
      return 94;
    } else {
      return 0;
    }
  }, [isXl, isLg]);

  const paddingImage = useMemo(() => {
    if (isXl) return 222;
    if (isLg) return 170;
    if (isMd) return 154;
    return 84;
  }, [isMd, isLg, isXl]);

  const initializeAnimation = () => {

    // if (isSm) {
    //   setValues({...values, isFinished: true, isInitialized: true});
    //   return;
    // }

    setValues({...values, isFinished: false, isInitialized: true})
  }

  useEffect(() => {
    if (!values.isInitialized) return;

    const timeOut = setTimeout(() => {
      setValues({...values, isFinished: true, showMosaicSlider: true});
    }, 10000);

    return () => {
      clearTimeout(timeOut);
    }

  },[values]);

  useEffect(() => {
    if (!values.isFinished) return;

    const timeOut = setTimeout(() => {
      setValues({...values, showMosaicSlider: false});
    }, 1600);

    return () => clearTimeout(timeOut);

  }, [values]);


  const value = {
    ...values,
    navHeight,
    paddingImage,
    initializeAnimation,
  };

  return <StartHomeContext.Provider value={value} {...props} />;
}
