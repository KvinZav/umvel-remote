import React from 'react';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import { BlockNameEnum } from '@enums/BlockName';
import useSWR from 'swr';
import BasicButton from '@elements/button';
import { isColorLight } from '@utils/colorUtils';
import Link from 'next/link';

const Quotes = (): JSX.Element => {
  const { data: event } = useSWR(environment.HOME_URL);
  if (!event) return null;

  const { quote } = FETCHER(event, BlockNameEnum.quotes);

  return (
    <div
      className={`w-full overflow-hidden overflow-x-scroll snap-x`}
    >
      <section className="w-[360%] bg-cases-smart-walk flex md:flex-row flex-row flex-wrap md:w-full">
        <article className="bg-primary-white group overflow-hidden w-[25%] md:w-1/2 aspect-square snap-center lg:w-1/4">
          <div className='p-4 md:p-12 lg:p-8 xl:p-10'>
            <h2 className="text-m2 font-bold mb-4">
              Our projects speak for themselves.
            </h2>
            <p className="text-s2">
              {"Millions of people used products we've built.  And we just got started."}
            </p>
          </div>
        </article>
        {quote.map((item) => {
          return (
            <SquareQuotes
              key={item.id}
              title={item.title}
              subtitle={item.hoverClientHeading}
              description={item.hoverDescription}
              color={item.backgroundColor}
              primaryColor={item.primaryColor}
              id={item.id}
            />
          );
        })}
      </section>
    </div>
  );
};
type SquareQuotesProps = {
  title: string;
  subtitle: string;
  description: string;
  color?: string;
  clientName?: string;
  primaryColor?: string;
  id: number | string;
};

const SquareQuotes: React.FC<SquareQuotesProps> = ({
  title = '',
  subtitle = '',
  description = '',
  color = '',
  id
}): JSX.Element => {
  const light = isColorLight(color)

  return (
    <article
      className={`flex flex-col group overflow-hidden w-[25%] md:w-1/2 aspect-square snap-center lg:w-1/4`}
      style={{backgroundColor: color}}
    >
      <div className='w-full h-full overflow-hidden '>
        <div className={`h-full w-full p-4 md:pb-0 md:p-12 lg:p-8 xl:p-10 ${light ? 'text-primary-black' : 'text-primary-white'}`}>
          <p className="mb-4 text-s2">{description}</p>
          <h3 className="font-bold text-s1 lg:mb-2">{title}</h3>
          <h4 className="text-s3 mb-4">{subtitle}</h4>
        </div>
        {id&&<div className='w-full hidden lg:flex justify-end items-center bg-primary-black bg-opacity-50 h-1/4 px-8 group-hover:-translate-y-[96%] translate-y-[200%] scale-y-0 group-hover:scale-y-100 transition ease-in-out duration-300'>
          <div>
            <Link href={'/cases/' + id}>
              <BasicButton theme="dark" small>View Case</BasicButton>
            </Link>
          </div>
        </div>}
      </div>
      {id && <div className='lg:hidden w-full pb-4 md:pb-12 pl-4 md:pl-12'>
        <Link href={'/cases/' + id}>
          <BasicButton theme={light ? 'light' : 'dark'}>View Case</BasicButton>
        </Link>
      </div>}
    </article>
  );
};

export default Quotes;
