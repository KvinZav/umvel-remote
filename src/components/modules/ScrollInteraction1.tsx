import { useAppState } from '@hooks/customHooks';
import React, { useEffect, useRef, useState } from 'react';

const determineOpacity = (top) => (100 - (Math.abs(top) * 0.6)) * 0.01

const ScrollInteraction1 = ({steps}) => {  

  const { scrollOffset } = useAppState()

  const [isTitleAnimToggled, setIsTitleAnimToggled] = useState(false)
  const [containerOffset, setContainerOffset] = useState({top: 0, bottom: 0})
  const [isTitleSticky, setIsTitleSticky] = useState(false)
  const [rightTextOpacities, setRightTextOpacities] = useState(steps.map(((_, n) => n === 0 || n===1 ? 1 : 0)))
  const [currentStep, setCurrentStep] = useState(0)

  const containerRef = useRef<HTMLDivElement>()
  const rightTextRefs = useRef<Array<HTMLDivElement>>([])
  
  useEffect(() => {
    const { top, bottom } = containerRef.current.getBoundingClientRect()
    setContainerOffset({top, bottom})
  }, [scrollOffset])

  useEffect(() => {
    if(containerOffset.top <= 0){
      setIsTitleSticky(true)
    } else {
      setIsTitleSticky(false)
    }
  }, [containerOffset])

  const handleScroll = () => {        
    const refsOpacity = rightTextRefs.current.map(i => determineOpacity(i.getBoundingClientRect().top))
    setRightTextOpacities(refsOpacity)
    setCurrentStep(refsOpacity.findIndex(i => i > 0.5))
  }

  useEffect(() => {
    setIsTitleAnimToggled(currentStep === 3)
  }, [currentStep])

  return(
    <section
      className={`flex justify-center items-center h-screen ${isTitleSticky ? 'overflow-scroll' : 'overflow-clip'} snap-y snap-mandatory`}
      ref={containerRef}
      onScroll={handleScroll}
    >
      <div className={`flex flex-1 h-full pt-[312px] pr-8 ${isTitleSticky ? 'sticky top-0' : 'static'}`}>
        <AnimatedTitle
          toggled={isTitleAnimToggled}
        />
      </div>
      <div
        className={`h-full flex-1`}
      >
        {
          steps?.map((i, n) => n > 0 ? (
            <div
              key={n+''}
              ref={el => rightTextRefs.current[n] = el}
              className={`h-screen flex snap-start pt-[322px] max-w-[416px]`}
              style={{
                opacity: rightTextOpacities[n]
              }}
            >
              <p className="text-4xl leading-snug">{i.right.text.replace(/\*/g, '')}</p>
            </div>
          ) : <div ref={el => rightTextRefs.current[n] = el}/>)
        }
      </div>
    </section>
  )
}

const AnimatedTitle = ({toggled}) => {

  const theRef = useRef<HTMLSpanElement>()
  const itRef = useRef<HTMLSpanElement>()
  
  const [wordWidth, setWordWidth] = useState<number | undefined>()

  useEffect(() => {
    if(!toggled){
      setWordWidth(theRef?.current?.offsetWidth)
    }else{
      setWordWidth(itRef?.current?.offsetWidth)
    }

  }, [toggled])

  return (
    <div className={`flex flex-col w-full h-full`}>
      <div className="flex justify-end children:ease-in-out children:transform children:transition-all children:duration-700">
        <span className={`text-[58px] leading-[72px] mr-3`}>Making</span>
        <div
          className={`relative`}
          style={{
            transition: 'width 500ms',
            transitionDelay: '250ms',
            width: wordWidth,
          }}
        >
          <span ref={theRef} className={`text-[58px] leading-[72px] absolute transition-opacity duration-500 right-0 ${toggled ? 'opacity-0' : 'opacity-100 delay-300'}`}>the</span>
          <span ref={itRef} className={`text-[58px] leading-[72px] absolute transition-opacity duration-500 right-0 ${toggled ? 'opacity-100' : 'opacity-0'}`}>it</span>
        </div>
      </div>
      <div className="relative children:ease-in-out children:transform children:transition-all children:duration-500 h-[144px]">
        <span className={`text-[58px] leading-[72px] absolute top-0 right-0  ${toggled ? 'opacity-0' : 'opacity-100'}`}>impossible,</span>
        <span className={`text-[58px] leading-[72px] delay-150 absolute top-0 right-0  ${!toggled ? 'translate-y-full' : 'translate-y-0'}`}>possible.</span>
      </div>
    </div>
  )
}

export default ScrollInteraction1;