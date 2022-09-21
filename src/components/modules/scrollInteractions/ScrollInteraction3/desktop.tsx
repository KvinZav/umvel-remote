import React, { useEffect, useRef, useState } from 'react';
import { CustomCard } from '@elements/card/card';
import PrismButton from '@elements/square-colors';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import useMediaQuery from '@hooks/useMediaQuery';
import useScrollOffset from '@hooks/useScrollOffset';
import useSWR from 'swr';

const DesktopScrollInteraction3 = () => {

  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const { scrollOffset } = useScrollOffset()

  const titleScrollControlRef = useRef<HTMLDivElement>(null)
  const quotesContainerRef = useRef<HTMLDivElement>(null)
  const cardContainerRef = useRef<HTMLDivElement>(null)
  const quoteRefs = useRef<Array<HTMLLIElement>>([])

  const [titleCardOffset, setTitleCardOffset] = useState<number>(0)
  const [quotesTop, setQuotesTop] = useState<number[]>([])
  const [quotesContainerTop, setQuotesContainerTop] = useState<number>()
  const [cardBottom, setCardBottom] = useState<number>(0)
  const [currentHighlight, setCurrentHighlight] = useState<number>()

  useEffect(() => {
    const { top } = titleScrollControlRef.current.getBoundingClientRect()
    const { top: quotesRefTop } = quotesContainerRef.current.getBoundingClientRect()
    const { height: cardComponentHeight } = cardContainerRef.current.getBoundingClientRect()
    const cardHeight = cardComponentHeight - 200

    setCardBottom(cardComponentHeight)
    setQuotesTop(quoteRefs.current.map(i => i.getBoundingClientRect().top))
    setTitleCardOffset(top > 0 && top < 5000 ? top : 0)
    setQuotesContainerTop(quotesRefTop)
    setCurrentHighlight(quotesTop.findIndex(i => i > cardComponentHeight - (cardHeight * 0.25)))    

  },[scrollOffset])

  const { data: event } = useSWR(environment.HOME_URL)
  if (!event) return null;
  const { step } = FETCHER(event, BlockNameEnum.scrollInteraction3)  
  const { left, right } = step[0]
  const { center } = step[1]
  const labels = center.text.split('\n\n')
  
  return(
    <section className="grid grid-cols-3 items-start mb-[312px] w-screen overflow-x-clip">
      <div className="sticky pt-[200px] top-0">
        <CustomCard customStyles="flex justify-end items-center p-4">
          <h1 className="text-[32px] md:text-[58px] font-bold text-right max-w-xs">
            {left.text}
          </h1>
        </CustomCard>
      </div>
      <div
        ref={cardContainerRef}
        className="sticky pt-[200px] top-0"
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
      <div className="h-[200vh] flex flex-col justify-end sticky bottom-0 px-8 ">
        <div
          ref={titleScrollControlRef}
          className="h-2/5"
        />
        <div
          ref={quotesContainerRef}
          className="flex flex-col "
        >
          <ul className="flex flex-1 flex-col justify-end">
            {[...labels, ''].map((i, n) => n < labels.length ? (
                <li
                  key={'scroll3-quote-'+n+''}
                  ref={el => quoteRefs.current[n] = el}
                  style={{
                    transform: `translateY(${scrollOffset * 0.8})`
                  }}
                >
                  <div
                    className={`${n !== 0 && 'border-t border-secondary-10'} flex items-center h-[88px] transition-all duration-1000 ${(currentHighlight >= n || currentHighlight === -1) && quotesContainerTop < cardBottom - 50 ? "translate-y-0 opacity-100" :  "translate-y-24 opacity-[0.15]"}`}
                  >
                    <p className={`transition-[font-size] duration-1000 ${currentHighlight === n && quotesContainerTop < cardBottom - 50 ? 'text-2xl font-bold' : 'text-base font-normal'}`}>{i.replace(/\*/g, '')}</p>
                  </div>
                </li>
            ) : 
              <li
                key={'scroll3-quote-'+n+''}
                ref={el => quoteRefs.current[n] = el}
                style={{
                  transform: `translateY(${scrollOffset * 0.8})`
                }}
              >
                <div
                  className={`flex justify-start items-center self-center w-auto py-9 xl:px-10 transition-all duration-1000 ${currentHighlight > n-1 || currentHighlight === -1 ? "translate-y-0 opacity-100" : "translate-y-24 opacity-[0.15]"}`}
                >
                  <div className="min-w-[48px] min-h-[48px] mr-4 xl:mr-14">
                    <PrismButton>Our Work</PrismButton>
                  </div>
                  <div className="py-0 mr-7 flex justify-center">
                    <h2 className="font-bold text-xl">
                      We seamlessly deliver business value.
                    </h2>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default DesktopScrollInteraction3;