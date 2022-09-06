import { CustomCard } from '@elements/card/card';
import { useAppState } from '@hooks/customHooks';
import React from 'react';

const ScrollInteraction3 = ({steps}) => {

  const { left, right } = steps[0]  

  return(
    <section className="grid grid-cols-2 lg:grid-cols-3">
      <CustomCard customStyles="flex justify-end items-center p-4">
        <h1 className="text-[32px] md:text-[58px] font-bold text-right max-w-xs">
          {left.text}
        </h1>
      </CustomCard>
      <CustomCard customStyles="flex justify-start items-center p-4">
        <h2 className="text-[32px] md:text-[58px] font-bold text-left max-w-xs">
          <br/>
          {right.text.toLowerCase()}
        </h2>
      </CustomCard>
      {/* TODO: Replace with missing contents from CMS */}
      <div className="mt-20 mb-[104px] lg:mt-0 lg:mb-0 px-[72px] lg:px-8 col-span-2 lg:col-span-1">
        <div className="border-b border-secondary-10 pb-8">
          <p>Make your platform tangible with best-in-class design.</p>
        </div>
        <div className="border-b border-secondary-10 py-8">
          <p>Build your digital platform no matter its complexity.</p>
        </div>
        <div className="border-b border-secondary-10 py-8">
          <p>Run, maintain and support your digital platform.</p>
        </div>
        <div className="pt-8 pb-10">
          <p>Ensure your platform is secure and compliant.</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row justify-between items-center">
          <div className="flex w-32 aspect-square p-9">
            <div className="flex-1 bg-prisma-pink "/>
          </div>
          <div className="py-[104px] lg:py-0">
            <h2 className="font-bold text-xl">
              We seamlessly deliver business value.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollInteraction3;