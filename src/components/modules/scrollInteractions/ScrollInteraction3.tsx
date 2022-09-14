import React, { useEffect, useRef, useState } from 'react';
import { CustomCard } from '@elements/card/card';
import SquareColors from '@elements/square-colors';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import useMediaQuery from '@hooks/useMediaQuery';
import useScrollOffset from '@hooks/useScrollOffset';
import useSWR from 'swr';

const ScrollInteraction3 = () => {

  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const { scrollOffset } = useScrollOffset()

  const titleScrollControlRef = useRef<HTMLDivElement>(null)
  const quotesContainerRef = useRef<HTMLDivElement>(null)
  const cardContainerRef = useRef<HTMLDivElement>(null)

  const [titleCardOffset, setTitleCardOffset] = useState<number>(0)

  useEffect(() => {
    const { top } = titleScrollControlRef.current.getBoundingClientRect()
    const { top: quotesTop } = quotesContainerRef.current.getBoundingClientRect()
    const cardbounds = cardContainerRef.current.getBoundingClientRect()
    console.log(cardbounds);
    
    
    setTitleCardOffset(top > 0 && top < 5000 ? top : 0)
  },[scrollOffset])

  const { data: event } = useSWR(environment.HOME_URL)
  if (!event) return null;
  const { step } = FETCHER(event, BlockNameEnum.scrollInteraction3)  
  const { left, right } = step[0]
  const { center } = step[1]
  const labels = center.text.split('\n\n')
  
  return(
    <section className="grid grid-cols-2 lg:grid-cols-3 items-start mb-[104px] md:mb-[112px] lg:mb-[312px] w-screen h-[300vh] overflow-x-clip">
      <CustomCard customStyles="sticky top-[25vh] flex justify-end items-center p-4">
        <h1 className="text-[32px] md:text-[58px] font-bold text-right max-w-xs">
          {left.text}
        </h1>
      </CustomCard>
      <div
        ref={cardContainerRef}
        className="sticky top-[25vh]"
        style={{
          transform: `translateX(${titleCardOffset}px)`
        }}
      >
        <CustomCard customStyles="flex justify-start items-center p-4">
          <h2 className="text-[32px] md:text-[58px] font-bold text-left max-w-xs">
            <br/>
            {right.text.toLowerCase()}
          </h2>
        </CustomCard>
      </div>
      <div className="h-[300vh] bg-gradient-to-b from-prisma-purple to-prisma-blue">
        <div
          ref={titleScrollControlRef}
          className="h-1/4 bg-prisma-ellow"
        />
        <div
          ref={quotesContainerRef}
          className="h-3/4 flex flex-col justify-between bg-prisma-pink"
        >
          <ul className="flex flex-1 flex-col divide-y divide-secondary-10">
            {labels.map((i, n) => (
              <li className="flex items-center h-[88px]" key={n+''}>
                <p>{i.replace(/\*/g, '')}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    // <section className="grid grid-cols-2 lg:grid-cols-3 mb-[104px] md:mb-[112px] lg:mb-[312px]">
    //   <div className="sticky top-0">
    //     <CustomCard customStyles="flex justify-end items-center p-4">
    //       <h1 className="text-[32px] md:text-[58px] font-bold text-right max-w-xs">
    //         {left.text}
    //       </h1>
    //     </CustomCard>
    //   </div>
    //   <CustomCard customStyles="flex justify-start items-center p-4">
    //     <h2 className="text-[32px] md:text-[58px] font-bold text-left max-w-xs">
    //       <br/>
    //       {right.text.toLowerCase()}
    //     </h2>
    //   </CustomCard>
    //   {/* TODO: Replace with missing contents from CMS */}

    // </section>
  )
}

export default ScrollInteraction3;