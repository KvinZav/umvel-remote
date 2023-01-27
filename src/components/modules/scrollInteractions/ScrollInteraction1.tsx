import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import useMediaQuery from '@hooks/useMediaQuery';
import React, { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import useScrollOffset from '@hooks/useScrollOffset';

const determineOpacity = (top) => (100 - Math.abs(top) * 0.6) * 0.01;

const ScrollInteraction1 = () => {
  const containerRef = useRef<HTMLDivElement>();
  const rightTextRefs = useRef<Array<HTMLDivElement>>([]);

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const { scrollOffset } = useScrollOffset();

  const [currentStep, setCurrentStep] = useState(0);
  const [isTitleAnimToggled, setIsTitleAnimToggled] = useState(false);
  const [rightTextOpacities, setRightTextOpacities] = useState([]);
  const [boundsTop, setBoundsTop] = useState<Array<number>>([]);

  useEffect(() => {
    if (!isDesktop) return;

    const refsOpacity = rightTextRefs.current.map(
      (i) => determineOpacity(i.getBoundingClientRect().top) + 1
    );
    setBoundsTop(rightTextRefs.current.map((i) => i.getBoundingClientRect().top));
    setRightTextOpacities(refsOpacity);
    setCurrentStep(refsOpacity.findIndex((i) => i > 0.2));
    setIsTitleAnimToggled(rightTextRefs.current[rightTextRefs.current.length - 1].getBoundingClientRect().top <= 200);
  }, [scrollOffset]);

  const { data: event } = useSWR(environment.HOME_URL);
  if (!event) return null;

  const { step: steps } = FETCHER(event, BlockNameEnum.scrollInteraction);

  return (
    <section
      className={`flex flex-col items-center lg:block px-[72px] md:px-36 lg:px-0 pt-[104px] md:pt-[200px] pb-0 md:pb-[100px] lg:pt-0 mb-20`}
      ref={containerRef}
    >
      <div className={`flex flex-col lg:flex-row lg:sticky top-0 lg:h-screen lg:items-center md:max-w-[460px] lg:max-w-full`}>
        {isDesktop ? (
          <div className="w-[44%] lg:pr-8">
            <AnimatedTitle toggled={isTitleAnimToggled} />
          </div>
        ) : (
          <h1 className="font-bold text-b3 mb-4 lg:pr-8">
            Making the impossible, possible.
          </h1>
        )}
      </div>
      <div
        className={`h-full flex flex-col items-start lg:items-end lg:-mt-[90vh] pointer-events-none`}
      >
        {isDesktop
          ? steps?.map((i, n) =>
              n > 0 ? (
                <div
                  key={n + ''}
                  ref={(el) => (rightTextRefs.current[n] = el)}
                  className={`flex snap-start w-[56vw] h-screen items-center pl-4`}
                  style={{
                    opacity: boundsTop[boundsTop.length -1] > 0 ? rightTextOpacities[n] : 1,
                    transform: boundsTop[0] < 0 && boundsTop[boundsTop.length -1] > 0 ? `translateY(${1 - boundsTop[n] * 0.3}px)` : '',
                  }}
                >
                  <p
                    className={`${
                      n === steps.length - 1 ? 'lg:pb-[72px]' : 'lg:pb-0'
                    } max-w-[416px] lg:max-w-[528px] xl:max-w-[600px] text-m2`}
                  >
                    {i.right.text.replace(/\*/g, '')}
                  </p>
                </div>
              ) : (
                <div key={n + ''} ref={(el) => (rightTextRefs.current[n] = el)} />
              )
            )
          : steps?.map((i, n) =>
              n > 0 ? (
                <div key={n + ''} ref={(el) => (rightTextRefs.current[n] = el)} className={``}>
                  <p
                    className={`${
                      n === steps.length - 1 ? 'lg:pb-[72px]' : 'lg:pb-0'
                    } max-w-[460px] text-m5`}
                  >
                    {i.right.text.replace(/\*/g, '')}
                  </p>
                  <br />
                </div>
              ) : (
                <div key={n + ''} ref={(el) => (rightTextRefs.current[n] = el)} />
              )
            )}
      </div>
    </section>
  );
};

const AnimatedTitle = ({ toggled }) => {
  const theRef = useRef<HTMLSpanElement>();
  const itRef = useRef<HTMLSpanElement>();

  const [wordWidth, setWordWidth] = useState<number>(86);

  useEffect(() => {
    if (!toggled) {
      setWordWidth(theRef?.current?.offsetWidth);
    } else {
      setWordWidth(itRef?.current?.offsetWidth);
    }
  }, [toggled, theRef?.current?.offsetWidth]);

  return (
    <div className={`flex flex-col w-full h-full`}>
      <div className="flex justify-end children:ease-in-out children:transform children:transition-all children:duration-700">
        <span className={`font-bold text-b3 mr-3`}>Making</span>
        <div
          className={`relative`}
          style={{
            transition: 'width 500ms',
            transitionDelay: '250ms',
            width: wordWidth,
          }}
        >
          <span
            ref={theRef}
            className={`font-bold text-b3 absolute transition-opacity duration-500 right-0 ${
              toggled ? 'opacity-0' : 'opacity-100 delay-300'
            }`}
          >
            the
          </span>
          <span
            ref={itRef}
            className={`font-bold text-b3 absolute transition-opacity duration-500 right-0 ${
              toggled ? 'opacity-100' : 'opacity-0'
            }`}
          >
            it
          </span>
        </div>
      </div>
      <div className="relative children:ease-in-out children:transform children:transition-all children:duration-500 h-[144px]">
        <span
          className={`font-bold text-b3 absolute top-0 right-0  ${
            toggled ? 'opacity-0' : 'opacity-100'
          }`}
        >
          impossible,
        </span>
        <span
          className={`font-bold text-b3 delay-150 absolute top-0 right-0  ${
            !toggled ? 'translate-y-full' : 'translate-y-0'
          }`}
        >
          possible.
        </span>
      </div>
    </div>
  );
};

export default ScrollInteraction1;
