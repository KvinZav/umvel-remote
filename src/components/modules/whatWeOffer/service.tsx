import Icon from '@elements/Icon';
import { IconNameType } from '@type/components/Icons.type';
import React from 'react';
import { FC } from 'react';
import BasicButton from '@elements/button';
import { ServicePropsTypes } from '@type/modules/offers';
import useWindowSize from '@hooks/useWindowSize';

export const Service: FC<ServicePropsTypes> = ({
  icon,
  description,
  dark = false,
  onDetailClick,
}) => {
  const { screen } = useWindowSize();

  return (
    <article
      onClick={screen !== 'xl' && screen !== '2xl' ? onDetailClick : null}
      className={
        `aspect-square w-1/2 md:w-1/4 border flex flex-col p-6 overflow-hidden group
        ${dark ?
          'border-primary-black text-primary-white bg-primary-black' :
          'border-secondary-10'
        }`
      }
    >
      <div className="mb-4">
        <div className="w-8 aspect-square mb-1">
          <Icon name={icon as IconNameType} size={32} />
        </div>
        <div className="flex">
          <p className="text-s3 select-none text-left font-bold">{description}</p>
        </div>
      </div>
      <div className="hidden lg:group-hover:flex">
        <BasicButton theme={dark ? 'dark' : 'light'} small onClick={onDetailClick}>
          <a href="#">
            <p>See Details</p>
          </a>
        </BasicButton>
      </div>
    </article>
  );
};
