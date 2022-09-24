import BasicButton from "@elements/button";
import React from "react";
import response from "@mock/privacy-policy.json";
import {
  PrivacyPolicyData,
  PrivacyPolicyItems,
} from "@interfaces/privacy-policy/privacy-policy.interface";

export const PrivacyPolicy = ({ theme = "dark" }: { theme?: "dark" | "light" }) => {
  const data: PrivacyPolicyData = response.data;
  if (!data) return null;

  const darkTheme = theme === "dark";

  return (
    <div className={`grid lg:grid-cols-3 ${darkTheme ? "bg-primary-black" : ""}`}>
      <div className="lg:col-start-1 lg:p-8 lg:pl-32 md:px-32 md:py-8 p-4">
        <div className={`flex flex-col ${darkTheme ? " text-primary-white" : ""}`}>
          <h1
            className={`text-[28px] md:text-[48px] lg:text-[78px] leading-tight font-bold pb-6 xl:pb-8`}
          >
            {data.title}
          </h1>
          <p className="text-[16px] md:text-[20px] lg:text-[24px] leading-tight pb-6 xl:pb-8">
            {data.info}
          </p>
          <BasicButton theme={theme}>{"Simpler version"}</BasicButton>
        </div>
      </div>
      <div className="lg:col-start-2 lg:col-end-4 lg:p-8 lg:pr-32 md:px-32 md:py-8 p-16">
        {data.items.map((item: PrivacyPolicyItems, index: number) => {
          return (
            <div key={"indicator-" + index} className={`${index > 0 ? "mt-8" : ""}`}>
              <p className="text-[24px] leading-tight font-bold pb-6 xl:pb-8">{item.title}</p>

              <p className="text-[16px] leading-tight pb-6 xl:pb-8">{item.subtitle}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
