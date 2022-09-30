import { Card } from '@elements/card/card';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import useMediaQuery from '@hooks/useMediaQuery';
import React from 'react';
import useSWR from 'swr';

const Hero = () => {
  const isMobile = useMediaQuery('(max-width: 639px)');
  const tablet = useMediaQuery('(max-width: 1023px) and (min-width: 640px)');

  const { data: event } = useSWR(environment.HOME_URL);
  if (!event) return null;

  const { block, caseOfStudy } = FETCHER(event, BlockNameEnum.heading);

  const { Title } = caseOfStudy[0];

  const { title, primaryColor, secondaryColor, caseDescription, image, styles } =
    caseOfStudy[0].case_of_study.data.attributes;

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-0">
        {/* first card */}
        <Card
          styles={{
            textStyles: { height: 'title', align: 'end' },
            textPositionHorizontal: 'end',
            textPositionVertical: 'end',
            bg: block.primaryColor,
          }}
          text={block.displayName}
        />

        {/* second card */}
        <div className="relative">
          <Card
            styles={{
              textStyles: { height: 'subtitle', align: 'start' },
              textPositionHorizontal: 'start',
              textPositionVertical: 'end',
            }}
            text={Title}
          />
          <div className="absolute inset-x-4 md:inset-x-6 lg:inset-x-8 bottom-4 md:bottom-6 lg:bottom-8 h-1 md:h-2 rounded-full bg-secondary-10 overflow-hidden" />
        </div>
        {/* third card */}
        <div className="md:flex md:flex-row lg:block col-span-2 lg:col-span-1">
          <div className={`${tablet && 'flex-1'}`}>
            <Card
              styles={{
                textStyles: { height: 'paragraph', align: 'start' },
                direction: isMobile ? 'col-reverse' : 'col',
                color: 'white',
                textPositionHorizontal: 'center',
                textPositionVertical: 'center',
                bg: primaryColor,
                bgSecondary: secondaryColor,
                textColor: styles.textColor,
              }}
              description={caseDescription}
              imageUrl={image.data.attributes.url}
              text={!tablet && title}
              showButton={isMobile}
            />
          </div>
          <div className={`${tablet && 'flex-1'}`}>
            {tablet && (
              <Card
                text={title}
                styles={{
                  textStyles: { height: 'paragraph', align: 'start' },
                  direction: 'col',
                  color: 'white',
                  textPositionHorizontal: 'center',
                  textPositionVertical: 'center',
                  bg: primaryColor,
                  bgSecondary: secondaryColor,
                }}
                description={caseDescription}
                descriptionOnly
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Hero);
