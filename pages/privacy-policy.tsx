import React from 'react';
import response from '@mock/privacy-policy.json';
import {
  PrivacyPolicyData,
  PrivacyPolicyItems,
} from '@interfaces/privacy-policy/privacy-policy.interface';

export default function PrivacyPolicy() {
  const data: PrivacyPolicyData = response.data.attributes;
  
  if (!data) return null;

  return (
    <div className={`grid lg:pt-10 xl:pt-16`}>
      <div className="lg:col-start-1 lg:p-8 lg:pl-32 xl:pl-40 md:px-32 lg:pt-0 lg:pr-0 p-10 pb-0 lg:sticky lg:top-[138px] xl:top-[190px] lg:h-72">
        <div className={`flex flex-col`}>
          <h1 className={`text-b3 leading-tight font-bold pb-2`}>
            {data.title}
          </h1>
          <p className="font-bold text-m4 leading-tight pb-6 xl:pb-8">
            {data.info}
          </p>
        </div>
      </div>
      <div className="lg:col-start-2 lg:col-end-4 lg:p-8 xl:pl-12 lg:pr-32 xl:pr-40 md:px-32 md:py-0 px-10 lg:pt-0">
        {data.items.map((item: PrivacyPolicyItems, index: number) => {
          return (
            <div key={'indicator-' + index} className={`${index > 0 ? 'mt-5' : ''}`}>
              <p className="text-m4 font-bold pb-4 xl:pb-8">{item.title}</p>

              <div
                className="text-s2 pb-6 xl:pb-8"
                dangerouslySetInnerHTML={{ __html: item.body }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
