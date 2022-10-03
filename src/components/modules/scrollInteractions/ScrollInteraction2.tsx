import useMediaQuery from '@hooks/useMediaQuery';
import useScrollOffset from '@hooks/useScrollOffset';
import React, { useEffect, useRef, useState } from 'react';

const ScrollInteraction2 = ({ steps }) => {
  const isBrowser = typeof window !== 'undefined';
  const innerHeight = isBrowser ? window.innerHeight : 0;

  const mainContainerRef = useRef<HTMLDivElement>();

  const { scrollOffset } = useScrollOffset();

  const [scaleValue, setScaleValue] = useState<number>();
  const [topPosition, setTopPosition] = useState(Number.MAX_SAFE_INTEGER);

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    const { bottom, top } = mainContainerRef.current.getBoundingClientRect();
    setTopPosition(top);
    setScaleValue(bottom - (innerHeight + 100) > 0 ? bottom - (innerHeight + 100) : 0);
  }, [scrollOffset, mainContainerRef]);

  return (
    <section
      ref={mainContainerRef}
      className="my-[104px] md:my-[216px] lg:mt-96 lg:mb-0 lg:h-[350vh] w-full"
    >
      <div className="w-full flex items-center lg:sticky top-0">
        <div className="flex flex-col md:flex-row w-full lg:h-screen justify-center lg:justify-start overflow-hidden px-[72px] md:px-0 lg:pt-[30vh]">
          <div className="lg:flex-1 flex items-end md:items-start md:justify-end mr-4">
            {isDesktop && topPosition < 500 && (
              <div className="grid grid-cols-3 gap-2">
                <div />
                <Block scale={scaleValue / 500 + 1} translate={scaleValue * (0.6 / 5)}>
                  {steps[0].left.identifier}
                </Block>
                <div />
                <Block scale={scaleValue / 350 + 1} translate={scaleValue * (1.5 / 5)}>
                  {steps[1].left.identifier}
                </Block>
                <Block scale={scaleValue / 300 + 1} translate={scaleValue * (2.5 / 5)}>
                  {steps[2].left.identifier}
                </Block>
                <Block scale={scaleValue / 150 + 1} translate={scaleValue * (4 / 5)}>
                  {steps[3].left.identifier}
                </Block>
                <div />
                <Block scale={scaleValue / 100 + 1} translate={scaleValue * (6 / 5)}>
                  {steps[4].left.identifier}
                </Block>
                <div />
              </div>
            )}
            {!isDesktop && (
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[...new Array(9)].map((_, n) =>
                  n === 0 || n === 2 || n === 6 || n === 8 ? <div /> : <Block />
                )}
              </div>
            )}
          </div>
          <div className="lg:flex-1 lg:ml-4">
            <h1 className="font-bold text-[38px] leading-tight max-w-xs mb-6">
              {steps[0].right.identifier.replace(/\*/g, '')}
            </h1>
            {/* TODO: Connect to CMS when texts are fixed */}
            <p
              className={`text-base leading-tight md:w-[344px] lg:w-[418px] transition-opacity duration-500 ease-in ${
                scaleValue > 100 ? 'lg:opacity-0' : 'opacity-100'
              }`}
            >
              We partner with you throughout the entire journey: from idea validation, to experience
              design, to product development, deployment and finally, your continuous expansion
              strategies.
            </p>
            <br />
            <p
              className={`text-base leading-tight md:w-[344px] lg:w-[418px] transition-opacity duration-500 ease-in ${
                scaleValue > 100 ? 'lg:opacity-0' : 'opacity-100'
              }`}
            >
              Our approach draws on the best practices we have gathered from working with numerous
              clients, in over 10 industries and across 3 continents. We have proven over and over,
              that we can deliver what we promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Block = ({ scale = 1, translate = 0, children = '' }) => {
  return (
    <div
      className="w-10 h-10 bg-primary-black"
      style={{
        transform: `translateY(${translate}px) scale(${scale})`,
        transformOrigin: 'top left',
      }}
    >
      <p
        className={`text-primary-white font-bold text-[5px] p-0.5 transition-opacity duration-700 ease-out ${
          scale < 1.6 ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </p>
    </div>
  );
};

export default ScrollInteraction2;
