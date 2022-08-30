import React, { useEffect, useRef, useState } from 'react';

// interface TextBlockProps extends HeadingProps {
//   fullWidth?: boolean;
//   hidden?: boolean;
// }



const ScrollInteraction1 = ({offsetY}) => {

  const [isTitleAnimToggled, setIsTitleAnimToggled] = useState(false)
  const [containerOffset, setContainerOffset] = useState({top: 0, bottom: 0})
  const [isTitleSticky, setIsTitleSticky] = useState(false)

  const containerRef = useRef()
  
  useEffect(() => {
    const { top, bottom } = containerRef.current.getBoundingClientRect()
    setContainerOffset({top, bottom})
  }, [offsetY])

  useEffect(() => {
    console.log(containerOffset.top, containerOffset.bottom);
    if(containerOffset.top <= 0){
      setIsTitleSticky(true)
    }else{
      setIsTitleSticky(false)
    }
  }, [containerOffset])

  return(
    <section
      className={`flex justify-center items-center bg-gray-200 h-screen ${isTitleSticky ? 'sticky top-0' : 'static'}`}
      ref={containerRef}
    >
      <div className="flex-grow">
        <AnimatedTitle
          toggled={isTitleAnimToggled}
          isSticky={isTitleSticky}
        />
      </div>
      <div className={`h-full flex-grow ${isTitleSticky ? 'overflow-scroll' : 'overflow-clip'} snap-y snap-mandatory`}>
        <div className="h-screen flex items-center snap-start">
          <p>Sample</p>
        </div>
        <div className="h-screen flex items-center snap-start">
          <p>Sample</p>
        </div>
        <div className="h-screen flex items-center snap-start">
          <p>Sample</p>
        </div>
      </div>
    </section>
  )
}

const AnimatedTitle = ({toggled, isSticky}) => {

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
    <div className={`flex flex-col w-full`}>
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