import React from "react";
import { CardInterface } from "@interfaces/card.interface";
import BasicButton from '@elements/button'
import Image from "@elements/image-component/index";
import { isColorLight } from "@utils/colorUtils";

//eslint-disable-next-line react/display-name
export const Card = React.memo((props: CardInterface) => {
  
  const { styles, imageUrl, text, description, showButton, descriptionOnly } = props;

  const backgroundIsLight = isColorLight(styles.bg)
  
  return (
    <MainContainer styles={styles} hasDescription={Boolean(description)}>
      {imageUrl && <MainGraphic imageUrl={imageUrl}/>}
      {!descriptionOnly ?
        <TitleComponent
          text={text}
          description={description}
          showButton={showButton}
          styles={styles}
          backgroundIsLight={backgroundIsLight}
        /> :
        <DescriptionComponent
          text={text}
          description={description}
        />}
    </MainContainer>
  );
}, (prevProps, nextProps) => prevProps.text === nextProps.text);

export const CustomCard = ({children, customStyles = '', borderless = false}) => {
  return (
    <div className={`aspect-square ${!borderless && 'border border-secondary-10 border-solid'} ${customStyles}`}>
      {children}
    </div>
  )
}

const MainContainer = ({children, styles, hasDescription}) => {
  
  return (
    <div
      className={`aspect-square overflow-clip flex ${styles.direction === "col" ? "flex-col" : "flex-col-reverse"} group aspect-square border-solid border`}
      style={{
        borderColor: !styles.bg ? "#e6e6e6" : "#00000000",
        backgroundColor: styles.bg
      }}
    >
      <div
        className={`
          ${hasDescription && `transition ease-in-out duration-700`}
          min-h-full
          flex
          w-full
          ${hasDescription ? `p-0` : 'p-4 lg:p-8'}
          ${styles.direction === "col" ? "flex-col" : "flex-col-reverse"}
          ${styles.direction === "col" && !styles.textPositionHorizontal && "justify-start"} 
          ${styles.direction === "col-reverse" && !styles.textPositionHorizontal && "justify-end"} 
          ${styles?.color === "white" ? "text-white" : "text-black"}
          ${styles.textPositionHorizontal === "start" && "items-start"}
          ${styles.textPositionHorizontal === "center" && "items-center"}
          ${styles.textPositionHorizontal === "end" && "items-end"}
          ${styles.textPositionVertical === "start" ? "justify-start" : "justify-center"}
        `}
      >
        {children}
      </div>
    </div>
  )
}

const MainGraphic = ({imageUrl}) => <div className="w-1/2 h-1/2 m-auto"><Image url={imageUrl} alt="" height="100%" width="100%" layout="responsive"/></div>

const TitleComponent = ({text, description, showButton, styles, backgroundIsLight}) => {  
  return description ? (
    <div className={`transition-[background-color] duration-500 bg-primary-black bg-opacity-0 lg:group-hover:bg-opacity-50 p-4 lg:p-8 w-full`}>
      <h1
        className={`transition-colors duration-500 pb-2 font-bold ${backgroundIsLight ? 'text-primary-black lg:group-hover:text-primary-white' : 'text-primary-white'}`}
      >
        {text}
      </h1>
      {showButton && <BasicButton theme={backgroundIsLight ? "light" : "dark"}>View Case</BasicButton>}
      <div className={`transition-[max-height] overflow-hidden duration-1000 max-h-0 lg:group-hover:max-h-[180px]`}>
        <p className="text-primary-white mb-4">{description}</p>
        <BasicButton theme="dark">View Case</BasicButton>
      </div>
    </div>
  ) : (
    <h1
      className={`
        w-full
        ${styles.textStyles.align === "start" && "text-start"}
        ${styles.textStyles.align === "center" && "text-center"}
        ${styles.textStyles.align === "end" && "text-end"}
        ${styles.textStyles?.height === 'title' && 'text-[46px] sm:text-[78px] lg:text-[98px] font-bold'}
        ${styles.textStyles?.height === 'subtitle' && 'text-[18px] sm:text-4xl lg:text-[38px] font-bold max-w-xs'}
        ${styles.textStyles?.height === 'paragraph' && 'text-base font-bold'}
      `}
    >
      {text}
    </h1>
  )
}

export const DescriptionComponent = ({text, description}) => {
  return(
    <div className={`flex flex-col justify-center transition-[background-color] duration-500 bg-primary-black bg-opacity-50 p-8 w-full h-full`}>
      <h1
        className={`mb-2 font-bold text-primary-white`}
      >
        {text}
      </h1>
      <p className="text-primary-white mb-4">{description}</p>
      <BasicButton theme="dark">View Case</BasicButton>
    </div>
  )
}