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
      className={`h-[180vw] md:h-[200vw] w-screen overflow-hidden overflow-x-scroll snap-x lg:h-[50vw]`}
    >
      <section className="h-[180vw] flex md:flex-row flex-col flex-wrap md:h-[200vw] lg:h-[50vw] snap-x">
        <article className="bg-primary-white group overflow-hidden h-[50%] md:h-1/4 aspect-square snap-center lg:h-1/2 lg:w-auto">
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
      className={`flex flex-col group overflow-hidden h-[50%] md:h-1/4 aspect-square snap-center lg:h-1/2 lg:w-auto`}
      style={{
        backgroundColor: color
      }}
    >
      <div className={`h-full w-full p-4 md:pb-0 md:p-12 lg:p-8 xl:p-10 ${light ? 'text-primary-black' : 'text-primary-white'}`}>
        <p className="mb-4 text-s2">{description}</p>
        <h3 className="font-bold text-s1 lg:mb-2">{title}</h3>
        <h4 className="text-s3 mb-4">{subtitle}</h4>
      </div>
      {id &&
        <div className='absolute overflow-hidden h-[5vw] w-1/4 hidden lg:flex translate-y-[20vw]'>
          <div className="h-full w-full lg:flex justify-end items-center group-hover:translate-y-[0vw] translate-y-[5vw] bg-primary-black bg-opacity-50 px-8 xl:px-9 transition ease-in-out duration-300">
            <div>
              <Link href={'/cases/' + id}>
                <BasicButton theme="dark" small>View Case</BasicButton>
              </Link>
            </div>
          </div>
        </div>}
      {id && <div className='lg:hidden w-full pb-4 md:pb-12 pl-4 md:pl-12'>
        <Link href={'/cases/' + id}>
          <BasicButton theme={light ? 'light' : 'dark'}>View Case</BasicButton>
        </Link>
      </div>}
    </article>
  );
};

export default Quotes;
