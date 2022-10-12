import React from 'react';
import Image from '@elements/image-component';
import { CasesHeroProps } from '.';
import BasicButton from '@elements/button';

const  CasesHeroMobile = (props: CasesHeroProps) => {
  const { portfolioTitle, portfolioDescription, image, logo, challenge, primaryColor } =
    props.caseData;

  return (
    <section>
      <div className="grid grid-cols-2">
        <div
          className="col-span-1 aspect-square bg-cover bg-center"
          style={{ backgroundImage: `url(${image.data.attributes.url})` }}
        />
        <div
          className={`relative col-span-1 aspect-square`}
          style={{ backgroundColor: primaryColor }}
        >
          <div className="absolute w-full h-full bg-primary-black opacity-20" />
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            url={challenge.images[0]?.data.attributes.url}
            alt={challenge.images[0]?.data.attributes.alternativeText}
          />
        </div>

        <div className="col-span-2 aspect-square flex flex-col p-8 border border-secondary-10">
          <Image
            width="200"
            height="42"
            layout="responsive"
            url={logo.data.attributes.url}
            alt={logo.data.attributes.alternativeText}
          />
          <h1 className="text-m5 mt-8 mb-2">{portfolioTitle}</h1>
          <h2 className="font-bold text-m1">{portfolioDescription}</h2>
          <div className="flex mt-4 gap-2">
            {challenge.callToAction.map((item, index) => (
              <a
                key={'action-' + index}
                href={item.action.openUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BasicButton>{item.title}</BasicButton>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="aspect-square p-12 bg-primary-black text-primary-white">
        <h2 className="mb-2 text-m3">
          {challenge.title}
        </h2>
        <p className="text-s2">{challenge.content}</p>
      </div>
      <div className="relative aspect-square" style={{ backgroundColor: primaryColor }}>
        <div className="absolute w-full h-full bg-primary-black opacity-40" />
        <Image
          width="100%"
          height="100%"
          layout="responsive"
          url={challenge.images[1]?.data.attributes.url}
          alt={challenge.images[1]?.data.attributes.alternativeText}
        />
      </div>
    </section>
  );
};

export default CasesHeroMobile;
