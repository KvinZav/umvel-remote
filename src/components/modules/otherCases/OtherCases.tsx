import { CaseAttributes } from '@interfaces/cases-data/cases.interface';
import { Card } from '@elements/card/card';
import { useIsSizeScreen } from '@hooks/useIsSizeScreen';
import { useEffect, useState } from 'react';
import PrismButton from '@elements/square-colors';
import Link from 'next/link';

export const OtherCases = ({ caseData: { otherCases } }: { caseData: CaseAttributes }) => {
  const { isLg, isMd } = useIsSizeScreen();
  const [numberCases, setNumberCases] = useState(3);

  useEffect(() => {
    const cases = isMd ? 2 : 3;
    setNumberCases(cases);
  }, [isMd]);

  return (
    <section className="w-full">
      <div className="w-full mb-[80px]">
        <h4 className="text-b4 font-bold text-center">More great cases</h4>
      </div>
      <div className="grid auto-cols-[90vw] md:grid-cols-2 lg:grid-cols-3 grid-rows-1 grid-flow-col overflow-x-auto snap-x mb-[80px]">
        {otherCases.slice(0, numberCases).map((caseData, caseIdx) => (
          <div key={`other-case-${caseIdx}`} className="w-full">
            <div className="flex-[1_1_50%]">
              <Card
                styles={{
                  textPositionVertical: 'start',
                  textPositionHorizontal: 'start',
                  bg: caseData.primaryColor,
                  textStyles: {
                    height: 'paragraph',
                    align: 'left',
                  },
                  direction: isMd ? 'col' : 'col-reverse',
                }}
                text={caseData.title}
                description={' '}
                imageUrl={caseData.image}
                showButton={!isLg}
                caseId={caseData.id}
                messageOnHover={isLg}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center ">
        <Link href="/our-work" >
          <PrismButton>
            {'View all cases'}
          </PrismButton>
        </Link>
      </div>
    </section>
  );
};
