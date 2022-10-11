import { Card } from '@elements/card/card';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import useWindowSize from '@hooks/useWindowSize';
import React from 'react';
import useSWR from 'swr';
import { HighlightSubtitle, HighlightTitle } from '../../elements/text/TextComponents';

const MainMenuHighlights = () => {
  const { screen } = useWindowSize();

  const { data: event } = useSWR(environment.HOME_URL);
  if (!event) return null;

  const { cases } = FETCHER(event, BlockNameEnum.highlights);

  return (
    <section className="flex md:grid md:grid-cols-1 lg:grid-cols-3 md:justify-center overflow-x-scroll md:overflow-auto pt-8 lg:pt-[104px]">
      {cases.map((caseItem, caseIndex) => {
        const { title, caseDescription, image, primaryColor } =
          caseItem.case_of_study.data.attributes;
        const imageUrl = image.data.attributes.url;

        return (
          <section
            className={`min-w-[84vw] grid md:min-w-full md:flex ${
              caseIndex % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            } lg:flex-col pt-0`}
            key={caseItem.id + ''}
          >
            <div className="px-4 pb-4 lg:p-8 lg:pt-0 box-border md:flex-1 md:basis-1/2 lg:flex-auto lg:basis-auto flex flex-col md:justify-center md:px-[72px]">
              <HighlightTitle>{caseItem.Title}</HighlightTitle>
              <HighlightSubtitle>{caseItem.Subtitle}</HighlightSubtitle>
            </div>
            <div className="flex-[1_1_50%] self-end md:self-auto">
              {/* Card */}
              <Card
                styles={{
                  textPositionVertical: 'start',
                  textPositionHorizontal: 'start',
                  bg: primaryColor,
                  textStyles: {
                    height: 'paragraph',
                    align: 'left',
                  },
                  direction: (screen === '2xl' || screen === 'xl' || screen === 'sm')  ? 'col-reverse' : 'col',
                }}
                text={title}
                description={caseDescription}
                imageUrl={imageUrl}
                showButton={screen === 'sm' || screen === "md" || screen === "lg"}
                messageOnHover={screen !== 'sm' && screen !== "md"}
                caseId={caseItem.id}
              />
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default MainMenuHighlights;
