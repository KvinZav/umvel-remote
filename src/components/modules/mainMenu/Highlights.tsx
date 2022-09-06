import { Card } from '@elements/card/card';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import React from 'react';
import useSWR from 'swr';
import { HighlightSubtitle, HighlightTitle } from '../../elements/text/TextComponents';

const MainMenuHighlights = () => {

  const { data: event } = useSWR(environment.HOME_URL)
  if (!event) return null;

  const { cases } = FETCHER(event, BlockNameEnum.highlights)  
  console.log(cases);
  

  return(
    <section className="flex md:grid md:grid-cols-1 lg:grid-cols-3 md:justify-center overflow-x-scroll md:overflow-auto mt-[200px]">
      {cases.map((caseItem, caseIndex) => {
        const { title, caseDescription } = caseItem.case_of_study.data.attributes

        return(
          <section className={`min-w-[84vw] md:min-w-full md:flex ${caseIndex%2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} lg:flex-col pt-0`} key={caseItem.id+''}>
            <div className="p-6 lg:p-8 lg:pt-0 box-border md:flex-1 md:basis-1/2 lg:flex-auto lg:basis-auto">
              <HighlightTitle>{caseItem.Title}</HighlightTitle>
              <HighlightSubtitle>{caseItem.Subtitle}</HighlightSubtitle>
            </div>
            {/* Card */}
            <Card
              styles={{
                text: title,
                textPositionVertical: 'start',
                textPositionHorizontal: 'start',
                bg: 'bg-primary-white',
                textStyles: {
                  height: 'paragraph',
                  align: 'left'
                },
                descriptionSection: {
                  text: caseDescription
                },
              }}
            />
            <div
              className={`md:flex-1 md:basis-1/2 lg:flex-auto lg:basis-auto aspect-square bg-red-500`}
            />
          </section>
        )})}
    </section>
  )
}

export default MainMenuHighlights;