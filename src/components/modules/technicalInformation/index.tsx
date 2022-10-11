import BasicButton from '@elements/button';
import { CaseAttributes } from '@interfaces/cases-data/cases.interface';
import Link from 'next/link';
import React, { FC } from 'react';

type TechnicalInformationProps = {
  caseData: CaseAttributes;
};

const TechnicalInformation: FC<TechnicalInformationProps> = ({ caseData }) => {
  const { services, platforms, technicalInformation, image } = caseData.technicalInformationGroup;

  return (
    <>
      <div className="flex justify-center ">
        <h2 className="font-bold text-b4 mb-20 mt-36 md:mt-40 lg:mt-[198px] xl:mt-60">Technical information</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-[5%] md:px-0">
        <div
          className="md:aspect-square w-auto border-secondary-10 bg-cover bg-center hidden lg:flex"
          style={{ backgroundImage: `url(${image.data.attributes.url})` }}
        />
        <div className="md:aspect-square w-auto md:border border-secondary-10 p-8 lg:p-12 xl:p-16 flex flex-col space-y-10">
          {technicalInformation.map((infoItem) =>
            infoItem.title.toLowerCase() !== 'client' ? (
              <div key={'tech-info-' + infoItem.id}>
                <h3 className="text-s2">{infoItem.title}</h3>
                <p className="font-bold text-m5">{infoItem.content}</p>
              </div>
            ) : null
          )}
          <div>
            <h3 className="text-s2">Platforms</h3>
            <p className="font-bold text-m5">{platforms.map((platform) => platform.name).join('/')}</p>
          </div>
        </div>
        <div className="md:aspect-square w-auto md:border border-secondary-10 p-8 lg:p-12 xl:p-16 flex flex-col overflow-y-scroll overflow-hidden">
          <h3 className="mb-4">Services</h3>
          <div className="flex flex-wrap">
            {services.map((item) => {
              return (
                <div
                  className="rounded-full bg-secondary-10 px-6 py-2 xl:py-3 mr-4 mb-4"
                  key={'info' + item.id}
                >
                  <p className="text-primary-black inline text-s3">{item.name}</p>
                </div>
              );
            })}
          </div>
          <div className="flex mt-2">
            <BasicButton>
              <Link href="/our-offering">
                  <p >See all services</p>
              </Link>
            </BasicButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnicalInformation;
