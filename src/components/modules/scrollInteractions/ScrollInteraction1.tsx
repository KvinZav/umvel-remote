import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import { useAppState } from '@hooks/customHooks';
import useMediaQuery from '@hooks/useMediaQuery';
import React, { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

const determineOpacity = (top) => (100 - (Math.abs(top) * 0.6)) * 0.01

const ScrollInteraction1 = () => {
  const containerRef = useRef<HTMLDivElement>()
  const rightTextRefs = useRef<Array<HTMLDivElement>>([])
  
  const isTablet = useMediaQuery('(min-width: 640px)');
  
  const { scrollOffset } = useAppState()

  const [currentStep, setCurrentStep] = useState(0)
  const [isTitleAnimToggled, setIsTitleAnimToggled] = useState(false)
  const [rightTextOpacities, setRightTextOpacities] = useState([])
  const [boundsTop, setBoundsTop] = useState<Array<number>>([])

  useEffect(() => {
    if(!isTablet) return
    
    const refsOpacity = rightTextRefs.current.map(i => determineOpacity(i.getBoundingClientRect().top) + 1)
    setBoundsTop(rightTextRefs.current.map(i => i.getBoundingClientRect().top))
    setRightTextOpacities(refsOpacity)
    setCurrentStep(refsOpacity.findIndex(i => i > 0.2))

  }, [scrollOffset])

  useEffect(() => {
    setIsTitleAnimToggled(currentStep === 3)
  }, [currentStep])

  const { data: event } = useSWR(environment.HOME_URL)
  if (!event) return null;

  const { step: steps } = FETCHER(event, BlockNameEnum.scrollInteraction)  

  return (
    <section
      className={`px-[72px] py-[104px] md:px-0 md:py-0`}
      ref={containerRef}
    >
      <div className={`flex flex-col md:flex-row pr-8 md:sticky top-0 h-screen items-center`}>
        <div className="md:w-1/2">
          {isTablet ? <AnimatedTitle
            toggled={isTitleAnimToggled}
          /> : <h1 className="font-bold text-[26px] md:text-[50px] lg:text-[58px] leading-tight">Making the impossible, possible.</h1>}
        </div>
      </div>
      <div
        className={`h-full flex flex-col md:items-end -mt-[90vh] pointer-events-none`}
      >
        {
          isTablet ? steps?.map((i, n) => n > 0 ? (
            <div
              key={n + ''}
              ref={el => rightTextRefs.current[n] = el}
              className={`flex snap-start w-[50vw] h-screen items-center`}
              style={{
                opacity: rightTextOpacities[n],
                transform: `translateY(${1-(boundsTop[n] * 0.3)}px)`
              }}
            >
              <p className={`${n === steps.length - 1 ? 'pb-[72px]' : 'pb-0'} max-w-[416px] text-4xl leading-snug`}>{i.right.text.replace(/\*/g, '')}</p>
            </div>
          ) : <div key={n + ''} ref={el => rightTextRefs.current[n] = el} />)
          : steps?.map((i, n) => n > 0 ? (
            <div
              key={n + ''}
              ref={el => rightTextRefs.current[n] = el}
              className={``}
            >
              <p className={`${n === steps.length - 1 ? 'pb-[72px]' : 'pb-0'} max-w-[416px] text-lg leading-snug`}>{i.right.text.replace(/\*/g, '')}</p>
              <br/>
            </div>
          ) : <div key={n + ''} ref={el => rightTextRefs.current[n] = el} />)
        }
      </div>
    </section>
  )
}

const AnimatedTitle = ({ toggled }) => {

  const theRef = useRef<HTMLSpanElement>()
  const itRef = useRef<HTMLSpanElement>()

  const [wordWidth, setWordWidth] = useState<number>(86)

  useEffect(() => {    
    if (!toggled) {
      setWordWidth(theRef?.current?.offsetWidth)
    } else {
      setWordWidth(itRef?.current?.offsetWidth)
    }

  }, [toggled, theRef?.current?.offsetWidth])

  return (
    <div className={`flex flex-col w-full h-full`}>
      <div className="flex justify-end children:ease-in-out children:transform children:transition-all children:duration-700">
        <span className={`font-bold text-[26px] md:text-[50px] lg:text-[58px] leading-tight mr-3`}>Making</span>
        <div
          className={`relative`}
          style={{
            transition: 'width 500ms',
            transitionDelay: '250ms',
            width: wordWidth,
          }}
        >
          <span ref={theRef} className={`font-bold text-[26px] md:text-[50px] lg:text-[58px] leading-tight absolute transition-opacity duration-500 right-0 ${toggled ? 'opacity-0' : 'opacity-100 delay-300'}`}>the</span>
          <span ref={itRef} className={`font-bold text-[26px] md:text-[50px] lg:text-[58px] leading-tight absolute transition-opacity duration-500 right-0 ${toggled ? 'opacity-100' : 'opacity-0'}`}>it</span>
        </div>
      </div>
      <div className="relative children:ease-in-out children:transform children:transition-all children:duration-500 h-[144px]">
        <span className={`font-bold text-[26px] md:text-[50px] lg:text-[58px] leading-tight absolute top-0 right-0  ${toggled ? 'opacity-0' : 'opacity-100'}`}>impossible,</span>
        <span className={`font-bold text-[26px] md:text-[50px] lg:text-[58px] leading-tight delay-150 absolute top-0 right-0  ${!toggled ? 'translate-y-full' : 'translate-y-0'}`}>possible.</span>
      </div>
    </div>
  )
}

export default ScrollInteraction1;