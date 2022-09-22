import { CaseAttributes } from '@interfaces/cases-data/cases.interface';
import React from 'react';

const CasesHero = ({caseData : CaseAttributes}) => {
  return(
    <section
      className="grid grid-cols-3 grid-rows-3"
    >
      <div className="col-span-1 aspect-square bg-prisma-red">
        
      </div>
      <div className="col-span-2 row-span-2 aspect-square">
        
      </div>
      <div className="col-span-1 aspect-square">
        
      </div>
    </section>
  )
}

export default CasesHero;