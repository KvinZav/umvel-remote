import React from 'react';
import { WorkCaseProps } from '@interfaces/components/WorkCase';
import Image from '@elements/image-component/index';
import BasicButton from '@elements/button';
import Link from 'next/link';

const WorkCase: React.FC<WorkCaseProps> = ({
  project,
  inverted,
  alignImage,
  caseRef,
  quote
}): JSX.Element => (
  <>
    <article
      ref={caseRef}
      className={
        inverted
          ? `w-full flex flex-col-reverse md:flex-row`
          : `w-full flex flex-col-reverse md:flex-row-reverse`
      }
    >
      <div className="md:w-1/2 aspect-square bg-primary-white flex md:justify-center py-6 px-12 flex-col md:px-16 md:py-16 lg:px-32 lg:py-32 xl:px-[180px] xl:py-[180px]">
        <p className="text-m2 lg:text-b4 font-bold mb-2 xl:mb-4 md:mt-0">{project.title}</p>
        <p className="text-s1 lg:text-m4 font-bold mb-2 xl:mb-4">{project.hoverClientName}</p>
        <p className="text-s2 lg:text-m4 mb-4 md:mb-6 xl:mb-9">{project.hoverDescription}</p>
        <Link href={project.callToAction || `/cases/${project.id}`}>
          <a>
            <BasicButton>View Case</BasicButton>
          </a>
        </Link>
      </div>
      <div
        className={`w-full md:w-1/2 aspect-square overflow-hidden`}
        style={{
          backgroundColor: project.backgroundColor
        }}
      >
        <div className="w-full h-full">
          <Image
            url={project.image?.data.attributes.url || '/assets/images/generic_mockup.svg'}
            alt="project"
            layout="responsive"
            height={'100%'}
            width={'100%'}
          />
        </div>
      </div>
    </article>
    {quote && (
      <div className="hidden md:flex w-full py-40 lg:py-[200px] xl:py-60 flex-col justify-center items-center">
        <p className="text-m1 font-bold max-w-md xl:max-w-[600px] text-center">{quote}</p>
      </div>
    )}
  </>
);

export default WorkCase;
