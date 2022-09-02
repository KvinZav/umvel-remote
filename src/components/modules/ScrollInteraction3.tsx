import { Card, CustomCard } from '@elements/card/card';
import { useAppState } from '@hooks/customHooks';
import React from 'react';

const ScrollInteraction3 = ({steps}) => {

  const { left, right } = steps[0]
  console.log(left, right);
  

  const { scrollOffset } = useAppState()

  return(
    <section className="grid grid-cols-3">
      <CustomCard>
        <h1 className="text-[58px] font-bold">
          {left.text}
        </h1>
      </CustomCard>
      <CustomCard>
        <h2>
          {right.text}
        </h2>
      </CustomCard>
      <div>
        
      </div>
    </section>
  )
}

export default ScrollInteraction3;