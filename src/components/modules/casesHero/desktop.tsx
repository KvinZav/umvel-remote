import React from 'react';
import Image from '@elements/image-component';
import { CasesHeroProps } from '.';
import BasicButton from '@elements/button';

const CasesHeroDesktop = (props: CasesHeroProps) => {
  const { portfolioTitle, portfolioDescription, image, logo, challenge, primaryColor } =
    props.caseData;

  return (
    <section className="grid grid-cols-3">
      <div className="col-span-1 aspect-square flex flex-col justify-center px-12 border border-secondary-10">
        <h1 className="text-xl md:text-2xl lg:text-[28px] md:leading-tight lg:leading-snug">
          {portfolioTitle}
        </h1>
        <h2 className="font-bold text-[28px] md:text-[32px] lg:text-4xl md:leading-tight lg:leading-snug mb-12">
          {portfolioDescription}
        </h2>
        <div className="flex gap-2 mt-2">
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
      <div
        className="col-span-1 lg:col-span-2 row-span-2 aspect-square bg-cover bg-center"
        style={{ backgroundImage: `url(${image.data.attributes.url})` }}
      />
      <div className="relative col-span-1 aspect-square p-12">
        <span className="absolute top-12 left-12">Client</span>
        <div className="w-full h-full p-12">
          <Image
            width="50"
            height="50"
            layout="responsive"
            url={logo.data.attributes.url}
            alt={logo.data.attributes.alternativeText}
          />
        </div>
      </div>
      <div className="col-span-1 aspect-square p-12 bg-primary-black text-primary-white">
        <h2 className="mb-2 text-xl md:text-2xl lg:text-[28px] md:leading-tight lg:leading-snug">
          {challenge.title}
        </h2>
        <p dangerouslySetInnerHTML={{ __html: challenge.content }}/>
      </div>
      <div
        className={`relative col-span-1 aspect-square`}
        style={{ backgroundColor: primaryColor }}
      >
        <div className="absolute w-full h-full bg-primary-black opacity-40" />
        <Image
          width="100%"
          height="100%"
          layout="responsive"
          url={challenge.images[0]?.data.attributes.url}
          alt={challenge.images[0]?.data.attributes.alternativeText}
        />
      </div>
      <div className="relative col-span-1 aspect-square" style={{ backgroundColor: primaryColor }}>
        <div className="absolute w-full h-full bg-primary-black opacity-20" />
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

export default CasesHeroDesktop;
