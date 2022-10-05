import useMediaQuery from '@hooks/useMediaQuery';
import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';

type PrismButtonProps = {
  children: string | JSX.Element;
  onClick?: () => any;
};

const PrismButton: React.FC<PrismButtonProps> = ({ children, onClick }): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const childrenStyle = useSpring({
    delay: 0,
    transform: isExpanded || !isDesktop ? `scale(1)` : `scale(0.2)`,
    config: config.wobbly,
  });

  return (
    <button
      className="relative group w-12 xl:w-[66px] h-12 xl:h-[66px] aspect-square grid grid-rows-4 grid-cols-4 justify-items-center place-items-center text-primary-black gap-1 lg:gap-0 cursor-pointer"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={onClick}
    >
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="top left"
        backgroundColor="bg-prisma-aqua"
        isExpanded={isExpanded}
        translateX={-12}
        translateY={-32}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="top center"
        backgroundColor="bg-prisma-green"
        isExpanded={isExpanded}
        translateX={-4}
        translateY={-32}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="top center"
        backgroundColor="bg-prisma-lime"
        isExpanded={isExpanded}
        translateX={4}
        translateY={-32}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="top right"
        backgroundColor="bg-prisma-yellow"
        isExpanded={isExpanded}
        translateX={12}
        translateY={-32}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="top left"
        backgroundColor="bg-prisma-purple"
        isExpanded={isExpanded}
        translateX={-12}
        translateY={-24}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="top center"
        backgroundColor="bg-prisma-pink"
        isExpanded={isExpanded}
        translateX={-4}
        translateY={-24}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="top center"
        backgroundColor="bg-prisma-red"
        isExpanded={isExpanded}
        translateX={4}
        translateY={-24}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="top right"
        backgroundColor="bg-prisma-orange"
        isExpanded={isExpanded}
        translateX={12}
        translateY={-24}
      />
      <div className="lg:-z-10 lg:absolute w-full h-full flex items-center justify-center top-0 col-span-4 transition delay-150 ease-in-out duration-1000 lg:min-h-0">
        {typeof children === 'string' ? (
          <animated.p style={childrenStyle} className="text-s3 whitespace-nowrap">
            {children}
          </animated.p>
        ) : (
          children
        )}
      </div>
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="bottom left"
        backgroundColor="bg-prisma-navy"
        isExpanded={isExpanded}
        translateX={-12}
        translateY={24}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="bottom center"
        backgroundColor="bg-prisma-blue"
        isExpanded={isExpanded}
        translateX={-4}
        translateY={24}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="bottom center"
        backgroundColor="bg-prisma-aqua"
        isExpanded={isExpanded}
        translateX={4}
        translateY={24}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="bottom right"
        backgroundColor="bg-prisma-green"
        isExpanded={isExpanded}
        translateX={12}
        translateY={24}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="bottom left"
        backgroundColor="bg-prisma-red"
        isExpanded={isExpanded}
        translateX={-12}
        translateY={32}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="bottom center"
        backgroundColor="bg-prisma-orange"
        isExpanded={isExpanded}
        translateX={-4}
        translateY={32}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="bottom center"
        backgroundColor="bg-prisma-yellow"
        isExpanded={isExpanded}
        translateX={4}
        translateY={32}
      />
      <ColorSquare
        isAnimated={isDesktop}
        transformOrigin="bottom right"
        backgroundColor="bg-prisma-lime"
        isExpanded={isExpanded}
        translateX={12}
        translateY={32}
      />
    </button>
  );
};

const ColorSquare = ({
  backgroundColor,
  isExpanded,
  translateX,
  translateY,
  transformOrigin,
  isAnimated = true,
}) => {
  const style = useSpring({
    transform:
      isExpanded || !isAnimated
        ? `translate(${translateX}px, ${translateY}px) scale(0.8)`
        : `translate(0px, 0px) scale(1)`,
    config: config.wobbly,
    transformOrigin,
  });

  return (
    <animated.div
      className={`w-full -translate-y-1 aspect-square ${backgroundColor}`}
      style={style}
    />
  );
};

export default PrismButton;
