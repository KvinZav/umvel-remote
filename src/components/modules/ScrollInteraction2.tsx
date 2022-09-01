import React from 'react';

const ScrollInteraction2 = () => {
  return(
    <section className="h-screen w-screen">
      <div className="h-full w-screen flex items-center">
        <div className="flex w-full">
          <div className="flex-1 flex items-start justify-end mr-4">
            <div className="grid grid-cols-3 gap-2">
              <Block></Block>
              <Block></Block>
              <Block></Block>
              <Block></Block>
              <div/>
              <Block></Block>
              <Block></Block>
              <Block></Block>
              <Block></Block>
            </div>
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

const Block = () => {

  return (
    <div className="w-10 h-10 bg-primary-black">
      
    </div>
  )
}

export default ScrollInteraction2;