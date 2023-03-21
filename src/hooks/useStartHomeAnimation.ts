import { StartHomeContext } from '@context/startHomeContext';
import { CSSProperties, useContext, useMemo } from 'react';
import { useIsSizeScreen } from './useIsSizeScreen';

interface StateAnimation {
  original: CSSProperties;
  current: CSSProperties;
  alternative?: CSSProperties;
}

const stylesAnimation: {
  logo: StateAnimation;
  cards: StateAnimation;
  secondCard: StateAnimation;
  nav: StateAnimation;
  buttonScroll: StateAnimation;
} = {
  logo: {
    original: {
      transform: 'translate(0px, 0px)',
      width: '100%',
      aspectRatio: '1/1',
    },
    current: {
      paddingRight: 'calc(50% - 27px)',
    },
  },
  cards: {
    original: {
      transform: 'translateY(0px)',
      opacity: '1',
    },
    current: {
      transform: 'translateY(50%)',
      opacity: '0',
    },
  },
  secondCard: {
    original: {
      opacity: '1',
    },
    current: {
      opacity: '0',
    },
  },
  nav: {
    original: {
      opacity: '1',
      transform: 'translateY(0px)',
    },
    current: {
      opacity: '0',
      transform: 'translateY(100%)',
    },
  },
  buttonScroll: {
    original: {
      opacity: '1',
      transform: 'translateY(0px)',
    },
    current: {
      opacity: '0',
      transform: 'translateY(-100%)',
    },
  },
};

const classTransitions = {
  one: 'transition-all duration-1000 delay-1000',
  two: 'transition-all duration-1000 delay-[2000ms]',
  three: 'transition-all duration-1000 delay-[3000ms]',
  four: 'transition-all duration-1000 delay-[4000ms]',
  five: 'transition-all duration-1000 delay-[5000ms]',
  six: 'transition-all duration-1000 delay-[6000ms]',
};

const setTransitions = (isSm: boolean) => {
  return Object.keys(classTransitions).reduce((prev, curr) => {
    return  {...prev, [curr]: !isSm ? classTransitions[curr] : ''}
  }, classTransitions);
}

const determineStylesAnimation = (
  original: CSSProperties,
  current: CSSProperties,
  isInitialized: boolean,
  isFinished: boolean
): CSSProperties => {
  if (isInitialized && isFinished) {
    return original;
  }
  return isInitialized && !isFinished ? original : current;
};

export const useStartHomeAnimation = () => {
  const context = useContext(StartHomeContext);
  const { cards, logo, secondCard, nav, buttonScroll } = stylesAnimation;
  const { isSm } = useIsSizeScreen();
  const classTransitions = useMemo(() => setTransitions(isSm), [isSm]);
  const { isInitialized, isFinished, navHeight } = context;

  const stylesLogo = useMemo(
    () =>
      determineStylesAnimation(
        { ...logo.original, paddingRight: `${context.paddingImage}px` },
        {
          ...logo.current,
          transform: `translate(50vw, 50vh) translate(-50%,-50%) translateY(-${navHeight}px)`,
        },
        isInitialized,
        isFinished
      ),
    [isFinished, isInitialized, navHeight, logo, context]
  );

  const stylesCards = useMemo(
    () => determineStylesAnimation(cards.original, cards.current, isInitialized, isFinished),
    [isFinished, isInitialized, cards]
  );

  const stylesSecondCard = useMemo(
    () =>
      determineStylesAnimation(secondCard.original, secondCard.current, isInitialized, isFinished),
    [isFinished, isInitialized, secondCard]
  );

  const stylesNav = useMemo(
    () => determineStylesAnimation(nav.original, nav.current, isInitialized, isFinished),
    [isFinished, isInitialized, nav]
  );

  const stylesButtonScroll = useMemo(
    () =>
      determineStylesAnimation(
        buttonScroll.original,
        buttonScroll.current,
        isInitialized,
        isFinished
      ),
    [isFinished, isInitialized, buttonScroll]
  );

  return {
    ...context,
    stylesLogo,
    stylesCards,
    stylesSecondCard,
    stylesNav,
    stylesButtonScroll,
    classTransitions,
  };
};
