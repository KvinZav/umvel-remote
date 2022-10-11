import PrismButton from '@elements/square-colors';
import { environment } from '@environments/index';
import useScrollOffset from '@hooks/useScrollOffset';
import { HighlightsDesktopPorps } from '@type/modules/highlights';
import React, { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import Image from '@elements/image-component';
import Link from 'next/link';
import BasicButton from '@elements/button';
import { ChevronRightRounded, ChevronLeftRounded } from '@mui/icons-material';

const HighlightsDesktop: React.FC<HighlightsDesktopPorps> = ({
  project,
  handleNext,
  handlePrevious,
  title,
}): JSX.Element => {
  const isBrowser = typeof window !== 'undefined';
  const innerHeight = isBrowser ? window.innerHeight : 0;
  const container = useRef<HTMLDivElement>();
  const { scrollOffset } = useScrollOffset();
  const [scaleValue, setScaleValue] = useState<number>();
  const [topPosition, setTopPosition] = useState(Number.MAX_SAFE_INTEGER);
  const { data: event } = useSWR(environment.HOME_URL);

  useEffect(() => {
    const { bottom, top } = container.current.getBoundingClientRect();
    setTopPosition(top);
    setScaleValue(bottom - innerHeight > 0 ? bottom - innerHeight : 0);
  }, [scrollOffset, container]);
  if (!event) return null;
  const imgAttributes = project.attributes.image.data.attributes;
  const positionInfo = scaleValue * (2.5 / 10);
  const positionCase = scaleValue * (3.5 / 10);
  const positionImage = scaleValue * (3.5 / 10);

  return (
    <section className="w-full h-[300vh]" ref={container}>
      <div className="w-full h-screen bg-primary-black sticky top-0 flex justify-center items-center text-m1 text-primary-white">
        <p
          style={{
            opacity:
              (topPosition * -1) / 300 < 1
                ? (topPosition * -1) / 300
                : 2 - (topPosition * -1) / 300,
            display: (topPosition * -1) / 300 >= 2 ? 'none' : 'flex',
          }}
        >
          Work that lets our clients shine.
        </p>
        <div
          className={`w-full grid grid-cols-4 grid-rows-4 sticky bottom-0 aspect-square `}
          style={{
            display: (topPosition * -1) / 300 <= 2 ? 'none' : 'grid',
            opacity: (topPosition * -1) / 300 - 2,
            backgroundColor: project.attributes.primaryColor
          }}
        >
          <div
            className="col-start-1 col-span-1 row-start-2 row-span-1 aspect-square w-full "
            style={{ transform: `translateY(${positionCase}px)`, transformOrigin: 'top left' }}
          >
            <div className="h-full p-8 bg-[rgba(0,0,0,0.5)]">
              <h3 className="text-m3 font-bold text-primary-white mb-4 lg:mb-2">
                {project.attributes.title}
              </h3>
              <p className="text-s1 font-bold text-primary-white mb-4 lg:mb-2">
                {project.attributes.portfolioDataOfInterest}
              </p>
              <p className="text-s2 font-bold text-primary-white mb-4 lg:mb-2">
                {project.attributes.portfolioDescription}
              </p>
              <p className="text-s2 text-primary-white mb-4 lg:mb-6">
                {project.attributes.caseDescription}
              </p>
              <div className="flex">
                <BasicButton small theme="dark">
                  <Link href={`/cases/${project.id}`}>View Case</Link>
                </BasicButton>
              </div>
            </div>
          </div>
          <div
            className="col-start-1 col-span-1 row-start-3 row-span-1 bg-primary-white w-full aspect-square text-primary-black"
            style={{ transform: `translateY(${positionInfo}px)`, transformOrigin: 'top left' }}
          >
            <div className="h-full flex flex-col justify-center">
              <div>
                <h3 className="text-m3 font-bold mb-4 mx-8 mt-8">{title}</h3>
                <p className="mx-8 mb-4 text-s2">Explore more cases:</p>
              </div>
              <div className="h-1/2 flex flex-row justify-between items-center px-11">
                <button className="mr-4 text-[32px] xl:text-[40px] transition-all duration-100 lg:hover:-translate-x-1" onClick={() => handlePrevious()}>
                  <ChevronLeftRounded fontSize="inherit" />
                </button>
                <Link href="/our-work">
                  <PrismButton>Our Work</PrismButton>
                </Link>
                <button className="ml-4 text-[32px] leading-tight xl:text-[40px] transition-all duration-100 lg:hover:translate-x-1" onClick={() => handleNext()}>
                  <ChevronRightRounded fontSize="inherit" />
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-start-2 col-span-3 row-start-2 row-span-2 flex justify-center items-center"
            style={{
              transform: `translateY(${positionImage}px)`,
              transformOrigin: 'top left',
              opacity: (topPosition * -1) / 300 - 2,
            }}
          >
            {imgAttributes.url && (
              <Image
                url={imgAttributes.url}
                alt="project"
                layout="intrinsic"
                height={imgAttributes.height}
                width={imgAttributes.width}
                previewUrl={imgAttributes.previewUrl}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsDesktop;
