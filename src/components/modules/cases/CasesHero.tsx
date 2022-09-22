import { CaseAttributes } from '@interfaces/cases-data/cases.interface';
import React from 'react';

const CasesHero = ({caseData : CaseAttributes}) => {
  return(
    <section
      className="grid grid-cols-3 grid-rows-3"
    >
      <div className="col-span-1 aspect-square bg-prisma-red">
        
      </div>
      <div className="col-span-2 row-span-2 aspect-square bg-prisma-blue">
        
      </div>
      <div className="col-span-1 aspect-square bg-prisma-aqua">
        
      </div>
      <div className="col-span-1 aspect-square bg-prisma-orange">
        
      </div>
      <div className="col-span-1 aspect-square bg-prisma-lime">
        
      </div>
      <div className="col-span-1 aspect-square bg-prisma-yellow">
        
      </div>  
    </section>
  )
}

export default CasesHero;