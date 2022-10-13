import React from 'react';
import { CardInterface } from '@interfaces/card.interface';
import BasicButton from '@elements/button';
import Image from '@elements/image-component/index';
import Link from 'next/link';
import { isColorLight } from '@utils/colorUtils';

//eslint-disable-next-line react/display-name
export const Card = React.memo((props: CardInterface) => {
    const {
      styles,
      imageUrl,
      text,
      description,
      showButton,
      descriptionOnly,
      caseId,
      messageOnHover,
      containerStyles
    } = props;

    const isLight = isColorLight(styles.bg)

    return (
      <MainContainer styles={styles} messageOnHover={messageOnHover} descriptionOnly={descriptionOnly} containerStyles={containerStyles}>
        {imageUrl && <MainGraphic imageUrl={imageUrl} />}
        {!descriptionOnly ? (
          <TitleComponent
            text={text}
            description={description}
            showButton={showButton}
            styles={styles}
            id={caseId}
            isLight={isLight}
          />
        ) : (
          <DescriptionComponent text={text} description={description} styles={styles} id={caseId} />
        )}
      </MainContainer>
    );
  });

export const CustomCard = ({ children, customStyles = '', borderless = false }) => {
  return (
    <div
      className={`aspect-square ${
        !borderless && 'border border-secondary-10 border-solid'
      } ${customStyles}`}
    >
      {children}
    </div>
  );
};

const MainContainer = ({ children, styles, messageOnHover, descriptionOnly, containerStyles }) => {
  return (
    <div
      className={`aspect-square overflow-clip flex ${
        styles.direction === 'col' ? 'flex-col' : 'flex-col-reverse'
      } group aspect-square`}
      style={{
        backgroundColor: styles.bg,
        borderColor: !styles.bg ? '#e6e6e6' : '#00000000',
      }}
    >
      <div
        className={`
          ${messageOnHover && `transition ease-in-out duration-700`}
          min-h-full
          flex
          w-full
          ${messageOnHover || descriptionOnly ? `p-0` : 'p-4 xl:p-[23px]'}
          ${styles.direction === 'col' ? 'flex-col' : 'flex-col-reverse'}
          ${styles.direction === 'col' && !styles.textPositionHorizontal && 'justify-start'} 
          ${styles.direction === 'col-reverse' && !styles.textPositionHorizontal && 'justify-end'} 
          ${styles?.color === 'white' ? 'text-white' : 'text-black'}
          ${styles.textPositionHorizontal === 'start' && 'items-start'}
          ${styles.textPositionHorizontal === 'center' && 'items-center'}
          ${styles.textPositionHorizontal === 'end' && 'items-end'}
          ${styles.textPositionVertical === 'start' ? 'justify-start' : 'justify-center'}
        `}
        style={containerStyles}
      >
        {children}
      </div>
    </div>
  );
};

const MainGraphic = ({ imageUrl }) => (
  <div className="w-1/2 h-1/2 m-auto">
    <Image url={imageUrl} alt="" height="100%" width="100%" layout="responsive" />
  </div>
);

const TitleComponent = ({ text, description, showButton, styles, id, isLight }) => {
  return description ? (
    <div
      className={`transition-[background-color] duration-500 bg-primary-black bg-opacity-0 lg:group-hover:bg-opacity-50 md:p-2 md:pt-4 lg:p-8 xl:p-11 w-full`}
    >
      <h1
        className={`${styles.direction === 'col-reverse' ? 'min-h-[4rem]' : 'min-h-fit'} text-s2 group-hover:transition-colors group-hover:duration-500 pb-4 font-bold ${isLight ? 'text-primary-black lg:group-hover:text-primary-white' : 'text-primary-white lg:group-hover:text-primary-white'}`}
      >
        {text}
      </h1>
      {showButton && (
        <Link href={'/cases/' + id}>
          <BasicButton theme={isLight ? "light" : "dark"}>View Case</BasicButton>
        </Link>
      )}
      <div
        className={`transition-[max-height] overflow-hidden duration-1000 max-h-0 lg:group-hover:max-h-[180px]`}
      >
        <p className="lg:hidden text-primary-white mb-4">{description}</p>
        <Link href={'/cases/' + id}>
          <BasicButton theme="dark">View Case</BasicButton>
        </Link>
      </div>
    </div>
  ) : (
    <h1
      className={`
        w-full
        ${styles.textStyles.align === 'start' && 'text-start'}
        ${styles.textStyles.align === 'center' && 'text-center'}
        ${styles.textStyles.align === 'end' && 'text-end'}
        ${
          styles.textStyles?.height === 'title' &&
          'text-b1 font-bold'
        }
        ${
          styles.textStyles?.height === 'subtitle' &&
          'text-s1 md:text-b4 font-bold'
        }
        ${styles.textStyles?.height === 'paragraph' && 'text-s2 font-bold'}
      `}
    >
      {text}
    </h1>
  );
};

export const DescriptionComponent = ({ text, description, styles, id }) => {
  return (
    <div
      className={`flex flex-col justify-center bg-primary-black bg-opacity-50 p-[72px] w-full h-full`}
    >
      <h1 className={`mb-2 font-bold text-primary-white`}>{text}</h1>
      <p className="text-primary-white mb-4">{description}</p>
      <Link href={'/cases/' + id}>
        <BasicButton theme="dark">View Case</BasicButton>
      </Link>
    </div>
  );
};
