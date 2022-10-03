import Icon from '@elements/Icon';
import { IconNameType } from '@type/components/Icons.type';
import React from 'react';
import { FC } from 'react';
import BasicButton from '@elements/button';
import { ServicePropsTypes } from '@type/modules/offers';

export const Service: FC<ServicePropsTypes> = ({
  icon,
  description,
  dark = false,
  onDetailClick,
}) => {
  return (
    <button
      onClick={onDetailClick}
      className={
        dark
          ? 'aspect-square w-1/2 md:w-1/4 lg:min-w-[200px] border border-primary-black flex flex-col p-6 overflow-hidden text-primary-white justify-between bg-primary-black group'
          : 'aspect-square w-1/2 md:w-1/4 lg:min-w-[200px] border border-secondary-10 flex flex-col p-6 overflow-hidden justify-between group'
      }
    >
      <div>
        <div className="w-8 aspect-square mb-1">
          <Icon name={icon as IconNameType} size={32} />
        </div>
        <div className="flex">
          <p className="text-left font-bold">{description}</p>
        </div>
      </div>
      <div className="hidden lg:group-hover:flex">
        <BasicButton theme={dark ? 'dark' : 'light'} small>
          <a href="#">
            <p>See Details</p>
          </a>
        </BasicButton>
      </div>
    </button>
  );
};
