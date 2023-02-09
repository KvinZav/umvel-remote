import { CustomCard } from '@elements/card/card';
import Image from '@elements/image-component';
import React, { FC } from 'react';
import { BlockNameEnum } from '@enums/BlockName';
import { FETCHER } from '@fetcher/clients';
import useSWR from 'swr';
import { environment } from '@environments/index';
import { get } from '@fetcher/get';

const UmvelCard: FC<{ children?: React.ReactNode; darkTheme: boolean, text?:string, is404?: boolean }> = ({
  children,
  darkTheme = false,
  text = '',
  is404 = false
}) => {
  const { data: event } = useSWR(environment.HOME_URL, get, {
    revalidateOnFocus: false,
  });
  if (!event) return null;

  const { socialNetworks } = FETCHER(event, BlockNameEnum.menu);

  return (
    <div className={`grid ${is404 ? 'lg:grid-cols-2' : 'md:grid-cols-2'}  ${darkTheme ? 'bg-primary-black' : ''}`}>
      <CustomCard
        customStyles={`flex flex-col items-center  ${
          !darkTheme ? 'border border-[#ccc]' : ''
        } ${is404 ? 'md:justify-center':'lg:justify-center'}`
      }
        borderless
      >
        <div className={`flex flex-col ${darkTheme ? ' text-primary-white' : ''} ${is404 ? 'md:w-[75%] md:h-[70%]' : ''}`}>{children}</div>
      </CustomCard>
      <CustomCard customStyles="relative grid grid-cols-12 h-full" borderless>
        {[...new Array(144)].map((_, n) => (
          <div key={n + ''} className={`border ${darkTheme ? 'border-[#333]' : 'border-[#ccc]'}`} />
        ))}
        <div className={`absolute w-full p-[15vw] md:p-[12vw] ${is404 ? 'pt-[50px] flex flex-col items-center':'' } `}>
          <div className={`${is404 ? 'w-[130px] md:w-[220px] md:mt-[10%] lg:mt-0 lg:w-[300px]':''}`}>
          <Image
            url={`/assets/images/${darkTheme ? 'umvelLogo.svg' : 'umvelLogoDark.svg'}`}
            alt={'logo-umvel'}
            width="100%"
            height="100%"
            layout="responsive"
          />
          </div>
          {is404 && 
          <div className='text-primary-white mt-[20px] md:mt-[30%] '>
          <h1 className='text-center text-s2'>{text}</h1>
          <div className="mt-0 md:mt-[30px] text-s4 md:text-s5 flex lg:justify-around justify-between md:flex-row  lg:border-0 py-8 lg:py-0 lg:min-w-[336px] xl:min-w-[521px]">
            {socialNetworks.map((socialNetwork, index) => (
              <a
                className="leading-tight transform transition duration-150 hover:scale-105 hover:font-semibold"
                key={`menu-item-footer-${index}`}
                href={socialNetwork.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Umvel's ${socialNetwork.name}`}
              >
                {socialNetwork.name}
              </a>
            ))}
          </div>
          </div>}
        </div>
      </CustomCard>
    </div>
  );
};

export default UmvelCard;
