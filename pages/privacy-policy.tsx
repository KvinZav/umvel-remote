import React from "react";
import response from "@mock/privacy-policy.json";
import {
  PrivacyPolicyData,
  PrivacyPolicyItems,
} from "@interfaces/privacy-policy/privacy-policy.interface";

export default function PrivacyPolicy() {
  const data: PrivacyPolicyData = response.data.attributes;
  if (!data) return null;

  return (
    <div className={`grid`}>
      <div className="lg:col-start-1 lg:p-8 lg:pl-32 md:px-32 md:py-8 p-10 pb-0">
        <div className={`flex flex-col`}>
          <h1 className={`text-[28px] md:text-[48px] lg:text-[58px] leading-tight font-bold pb-2`}>
            {data.title}
          </h1>
          <p className="font-bold text-[16px] md:text-[20px] lg:text-[24px] leading-tight pb-6 xl:pb-8">
            {data.info}
          </p>
        </div>
      </div>
      <div className="lg:col-start-2 lg:col-end-4 lg:p-8 lg:pr-32 md:px-32 md:py-0 px-10">
        {data.items.map((item: PrivacyPolicyItems, index: number) => {
          return (
            <div key={"indicator-" + index} className={`${index > 0 ? "mt-5" : ""}`}>
              <p className="text-[24px] leading-tight font-bold pb-4 xl:pb-8">{item.title}</p>

              <div
                className="text-[16px] leading-tight pb-6 xl:pb-8"
                dangerouslySetInnerHTML={{ __html: item.body }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
