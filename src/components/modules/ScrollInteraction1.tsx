import { useAppState } from '@hooks/customHooks';
import React, { useEffect, useRef, useState } from 'react';

const determineOpacity = (top) => (100 - (Math.abs(top) * 0.6)) * 0.01

const ScrollInteraction1 = ({steps}) => {  

  const { scrollOffset } = useAppState()

  const [isTitleAnimToggled, setIsTitleAnimToggled] = useState(false)
  const [rightTextOpacities, setRightTextOpacities] = useState(steps.map(((_, n) => n === 0 || n === 1 ? 1 : 0)))
  const [currentStep, setCurrentStep] = useState(0)

  const containerRef = useRef<HTMLDivElement>()
  const rightTextRefs = useRef<Array<HTMLDivElement>>([])

  useEffect(() => {
    const refsOpacity = rightTextRefs.current.map(i => determineOpacity(i.getBoundingClientRect().top) + 1)

    setRightTextOpacities(refsOpacity)
    setCurrentStep(refsOpacity.findIndex(i => i > 0.2))

  }, [scrollOffset])

  useEffect(() => {
    setIsTitleAnimToggled(currentStep === 3)
  }, [currentStep])

  return (
    <section
      className={``}
      ref={containerRef}
    >
      <div className={`flex pr-8 sticky top-0 h-screen items-center`}>
        <div className="w-1/2">
          <AnimatedTitle
            toggled={isTitleAnimToggled}
          />
        </div>
      </div>
      <div
        className={`h-full flex flex-col items-end -mt-[90vh]`}
      >
        {
          steps?.map((i, n) => n > 0 ? (
            <div
              key={n + ''}
              ref={el => rightTextRefs.current[n] = el}
              className={`flex snap-start w-[50vw] h-screen items-center`}
              style={{
                opacity: rightTextOpacities[n]
              }}
            >
              <p className={`${n === steps.length - 1 ? 'pb-[72px]' : 'pb-0'} max-w-[416px] text-4xl leading-snug`}>{i.right.text.replace(/\*/g, '')}</p>
            </div>
          ) : <div ref={el => rightTextRefs.current[n] = el} />)
        }
      </div>
    </section>
  )
}

const AnimatedTitle = ({ toggled }) => {

  const theRef = useRef<HTMLSpanElement>()
  const itRef = useRef<HTMLSpanElement>()

  const [wordWidth, setWordWidth] = useState<number | undefined>()

  useEffect(() => {
    if (!toggled) {
      setWordWidth(theRef?.current?.offsetWidth)
    } else {
      setWordWidth(itRef?.current?.offsetWidth)
    }

  }, [toggled])

  return (
    <div className={`flex flex-col w-full h-full`}>
      <div className="flex justify-end children:ease-in-out children:transform children:transition-all children:duration-700">
        <span className={`font-bold text-[58px] leading-[72px]`}>Making</span>
        <div
          className={`relative ml-3`}
          style={{
            transition: 'width 500ms',
            transitionDelay: '250ms',
            width: wordWidth,
          }}
        >
          <span ref={theRef} className={`font-bold text-[58px] leading-[72px] absolute transition-opacity duration-500 right-0 ${toggled ? 'opacity-0' : 'opacity-100 delay-300'}`}>the</span>
          <span ref={itRef} className={`font-bold text-[58px] leading-[72px] absolute transition-opacity duration-500 right-0 ${toggled ? 'opacity-100' : 'opacity-0'}`}>it</span>
        </div>
      </div>
      <div className="relative children:ease-in-out children:transform children:transition-all children:duration-500 h-[144px]">
        <span className={`font-bold text-[58px] leading-[72px] absolute top-0 right-0  ${toggled ? 'opacity-0' : 'opacity-100'}`}>impossible,</span>
        <span className={`font-bold text-[58px] leading-[72px] delay-150 absolute top-0 right-0  ${!toggled ? 'translate-y-full' : 'translate-y-0'}`}>possible.</span>
      </div>
    </div>
  )
}

export default ScrollInteraction1;