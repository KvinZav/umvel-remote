import { useAppState } from '@hooks/customHooks';
import React, { useEffect, useRef, useState } from 'react';

type TransformValuesProp = {
  scale: number;
  translate: number
}


const ScrollInteraction2 = ({steps}) => {
  const isBrowser = typeof window !== "undefined"
  const innerHeight = isBrowser  ? window.innerHeight : 0
  
  const mainContainerRef = useRef<HTMLDivElement>()

  const { scrollOffset } = useAppState()

  const [transformValues, setTransformValues] = useState<TransformValuesProp>({scale: 1, translate: 0})
  const [topPosition, setTopPosition] = useState(Number.MAX_SAFE_INTEGER)

  useEffect(() => {
    const { bottom, top } = mainContainerRef.current.getBoundingClientRect()  
    setTopPosition(top)
    setTransformValues({scale: bottom - innerHeight, translate: bottom - innerHeight})        
  }, [scrollOffset, mainContainerRef])

  return(
    <section
      ref={mainContainerRef}
      className="h-[500vh] w-screen"
    >
      <div className="w-screen flex items-center sticky top-0">
        <div className="flex w-full h-screen overflow-hidden pt-48">
          <div className="flex-1 flex items-start justify-end mr-4">
            {topPosition < 500 && <div className="grid grid-cols-3 gap-2">
              <div/>
              <Block
                scale={transformValues.scale / 500 + 1}
                translate={transformValues.translate * (0.8/5)}
              >
                {steps[0].left.identifier}
              </Block>
              <div/>
              <Block
                scale={transformValues.scale / 350 + 1}
                translate={transformValues.translate * (1.5/5)}
              >
                {steps[1].left.identifier}
              </Block>
              <Block
                scale={transformValues.scale / 300 + 1}
                translate={transformValues.translate * (2.5/5)}
              >
                {steps[2].left.identifier}
              </Block>
              <Block
                scale={transformValues.scale / 150 + 1}
                translate={transformValues.translate * (4/5)}
              >
                {steps[3].left.identifier}
              </Block>
              <div/>
              <Block
                scale={transformValues.scale / 100 + 1}
                translate={transformValues.translate * (6/5)}
              >
                {steps[3].left.identifier}
              </Block>
              <div/>
            </div>}
          </div>
          <div className="flex-1 ml-4">
            <h1 className="bold text-[38px] leading-tight max-w-xs mb-6">A sound process for crafting solid platforms.</h1>
            <p className="text-base leading-tight w-[418px]">We partner with you throughout the entire journey: from idea validation, to experience design, to product development, deployment and finally, your continuous expansion strategies.</p>
            <br/>
            <p className="text-base leading-tight w-[418px]">Our approach draws on the best practices we have gathered from working with numerous clients, in over 10 industries and across 3 continents. We have proven over and over, that we can deliver what we promise.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const Block = ({scale = 1, translate = 0, children}) => {

  return (
    <div
      className="w-10 h-10 bg-primary-black"
      style={{
        transform: `translateY(${translate}px) scale(${scale})`,
        transformOrigin: 'top left'
      }}
    >
      <p className={`text-primary-white font-bold text-[5px] p-0.5 transition-opacity duration-700 ease-out ${scale < 1.6 ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </p>
    </div>
  )
}

export default ScrollInteraction2;