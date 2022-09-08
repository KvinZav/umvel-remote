import React from "react";
import { CardInterface } from "@interfaces/card.interface";
import BasicButton from '@elements/button'
import Image from "@elements/image-component/index";

//eslint-disable-next-line react/display-name
export const Card = React.memo((props: CardInterface) => {
  const { styles, imageUrl, text, description, showButton } = props;
  
  return (
    <div
      className={`overflow-hidden flex ${styles.direction === "col" ? "flex-col-reverse" : "flex-col"} group aspect-square border-solid border ${styles.bg}`}
      style={{
        borderColor: styles.borderColor || "#e6e6e6",
      }}
    >
      {text && <div
        className={`
          ${description && `transition ease-in-out duration-700 ${styles.direction === "col" ? 'lg:group-hover:translate-y-[25%]' : 'lg:group-hover:-translate-y-[25%]'}`}
          min-h-full
          flex
          w-full
          p-4
          lg:p-8
          ${styles.direction === "col" ? "flex-col" : "flex-col-reverse"} 
          ${styles?.color === "white" ? "text-white" : "text-black"}
          ${styles.textPositionHorizontal === "start" && "items-start"}
          ${styles.textPositionHorizontal === "center" && "items-center"}
          ${styles.textPositionHorizontal === "end" && "items-end"}
          ${styles.textPositionVertical === "start" ? "justify-start" : "justify-center"}
        `}
      >
        {imageUrl && <div className="w-[50%] m-auto"><Image url={imageUrl} alternativeText="" height="100%" width="100%" layout="responsive"/></div>}
        <div className={`w-full flex self-start flex-col`}>
          <p
            className={`
              w-full
              ${styles.textStyles.align === "start" && "text-start"}
              ${styles.textStyles.align === "center" && "text-center"}
              ${styles.textStyles.align === "end" && "text-end"}
              ${styles.textStyles?.height === 'title' && 'text-[46px] md:text-[78px] lg:text-[98px] font-bold'}
              ${styles.textStyles?.height === 'subtitle' && 'text-[18px] md:text-4xl lg:text-[38px] font-bold max-w-xs'}
              ${styles.textStyles?.height === 'paragraph' && 'text-base'}
            `}
          >
            {text}
          </p>
          {showButton &&
            <div className="py-4 self-start">
              <BasicButton theme="light">
                View Case
              </BasicButton>
            </div>
          }
        </div>
      </div>}
      {description &&
        <div className={`w-full h-full lg:h-auto bg-primary-black bg-opacity-50 flex flex-col justify-center lg:justify-end items-start py-8 px-9 transition ease-in-out duration-700 ${styles.direction === "col" ? 'lg:group-hover:translate-y-[100%] lg:-translate-y-[100%]' : 'lg:group-hover:-translate-y-[100%] lg:translate-y-[100%]'}`}>
          <p
            className={`text-primary-white mb-2 w-full font-bold text-${styles.textStyles?.align} ${styles.textStyles?.height === 'title' ?  'text-[98px]' : styles.textStyles?.height ==='subtitle' ? 'text-[36px]' : 'text-[16px]'}`}
          >
            {text}
          </p>
          <p className="text-primary-white mb-4">{description}</p>
          <BasicButton theme="dark">
            View Case
          </BasicButton>
        </div>
      }
    </div>
  );
}, (prevProps, nextProps) => prevProps.text === nextProps.text);

export const CustomCard = ({children, customStyles = '', borderless = false}) => {
  return (
    <div className={`aspect-square ${!borderless && 'border border-secondary-10 border-solid'} ${customStyles}`}>
      {children}
    </div>
  )
}