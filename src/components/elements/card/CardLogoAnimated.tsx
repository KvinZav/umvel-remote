import CustomImage from '@elements/image-component/CustomImage';
import { useIsSizeScreen } from '@hooks/useIsSizeScreen';
import { useStartHomeAnimation } from '@hooks/useStartHomeAnimation';
import { useEffect, useMemo } from 'react';

export const CardLogoAnimated = () => {
  const {
    stylesLogo: styles,
    isInitialized,
    initializeAnimation,
    classTransitions,
  } = useStartHomeAnimation();
  const { isMd, isLg, isXl, isSm } = useIsSizeScreen();
  const widthImage = useMemo(() => {
    if (isXl) return 70;
    if (isLg || isMd) return 54;
    if (isSm) return 30;
  }, [isXl, isLg, isMd, isSm]);

  useEffect(() => {
    if (!isInitialized) {
      initializeAnimation();
    }
  }, [initializeAnimation, isInitialized]);

  return (
    <div className={`w-full absolute grid grid-cols-${(isMd || isSm) ? 2 : 3}`}>
      <div
        className={
          "flex h-full items-center justify-end " + 
          classTransitions.one
        }
        style={styles}
      >
        <CustomImage
          src={'/assets/images/umvelLogoDark.svg'}
          alt={'logo-home-init'}
          style={{ width: `${widthImage}px` }}
        />
      </div>
    </div>
  );
};
