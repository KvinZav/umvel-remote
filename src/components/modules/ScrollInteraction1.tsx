import React, { useEffect, useRef, useState } from 'react';
import { HeadingProps } from './TextComponents';

// interface TextBlockProps extends HeadingProps {
//   fullWidth?: boolean;
//   hidden?: boolean;
// }

const ScrollInteraction1 = () => {

  const [isTitleAnimToggled, setIsTitleAnimToggled] = useState(false)

  return(
    <section className="flex flex-col justify-center items-center">
      <button
        className="bg-red-500"
        onClick={() => setIsTitleAnimToggled(state => !state)}
      >
        TOGGLE
      </button>
      <AnimatedTitle
        toggled={isTitleAnimToggled}
      />
    </section>
  )
}

const AnimatedTitle = ({toggled}) => {

  const theRef = useRef()
  const itRef = useRef()
  
  const [wordWidth, setWordWidth] = useState()

  useEffect(() => {
    if(!toggled){
      setWordWidth(theRef?.current?.offsetWidth)
    }else{
      setWordWidth(itRef?.current?.offsetWidth)
    }

  }, [toggled])

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-end children:ease-in-out children:transform children:transition-all children:duration-700">
        <span className={`mr-1`}>Making</span>
        <div
          className={`relative`}
          style={{
            transition: 'width 500ms',
            transitionDelay: '250ms',
            width: wordWidth,
          }}
        >
          <span ref={theRef} className={`absolute transition-opacity duration-500 right-0 ${toggled ? 'opacity-0' : 'opacity-100 delay-300'}`}>the</span>
          <span ref={itRef} className={`absolute transition-opacity duration-500 right-0 ${toggled ? 'opacity-100' : 'opacity-0'}`}>it</span>
        </div>
      </div>
      <div className="relative children:ease-in-out children:transform children:transition-all children:duration-500">
        <span className={`absolute top-0 right-0  ${toggled ? 'opacity-0' : 'opacity-100'}`}>impossible,</span>
        <span className={`delay-150 absolute top-0 right-0  ${!toggled ? 'translate-y-full' : 'translate-y-0'}`}>possible.</span>
      </div>
    </div>
  )
}

// const TextBlock = ({children, fullWidth, hidden} : TextBlockProps) => <span className={`flex transform transition-opacity duration-500 ${hidden ? 'opacity-0' : 'opacity-100'} ${fullWidth ? 'col-span-full' : 'col-span-1'}`}>{children}</span>


export default ScrollInteraction1;