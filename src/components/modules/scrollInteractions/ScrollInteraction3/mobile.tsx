import { CustomCard } from '@elements/card/card';
import PrismButton from '@elements/square-colors';
import { BlockNameEnum } from '@enums/BlockName';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

const MobileScrollInteraction3 = () => {
  const { data: event } = useSWR(environment.HOME_URL);
  if (!event) return null;
  const { step } = FETCHER(event, BlockNameEnum.scrollInteraction3);
  const { left, right } = step[0];
  const { center } = step[1];
  const labels = center.text.split('\n\n');

  return (
    <section className="grid grid-cols-2 items-start mb-[104px] md:mb-[112px] w-full overflow-x-clip">
      <CustomCard customStyles="flex justify-end items-center p-4">
        <h1 className="text-b3 font-bold text-right max-w-xs">{left.text}</h1>
      </CustomCard>
      <CustomCard customStyles="flex justify-start items-center p-4">
        <h2 className="text-b3 font-bold text-left max-w-xs">
          <br />
          {right.text.toLowerCase()}
        </h2>
      </CustomCard>
      <div className="flex flex-col justify-end items-center col-span-2 px-[72px] md:px-36 pt-12 md:pt-4">
        <ul className="flex flex-1 flex-col justify-end">
          {[...labels, ''].map((i, n) =>
            n < labels.length ? (
              <li key={'scroll3-quote-' + n + ''}>
                <div
                  className={`${
                    n !== 0 && 'border-t border-secondary-10'
                  } flex items-center py-6 md:py-8`}
                >
                  <p className={`transition-[font-size] duration-1000`}>{i.replace(/\*/g, '')}</p>
                </div>
              </li>
            ) : (
              <li key={'scroll3-quote-' + n + ''}>
                <div
                  className={`flex flex-col-reverse md:flex-row-reverse justify-between items-center self-center w-full`}
                >
                  <div className="flex justify-center items-center min-w-[120px] min-h-[120px] lg:mr-3">
                    <Link href="/our-work">
                      <a>
                        <PrismButton>Our Work</PrismButton>
                      </a>
                    </Link>
                  </div>
                  <div className="py-[104px] flex w-full">
                    <h2 className="font-bold text-m5">We seamlessly deliver<br className="md:hidden"/> business value.</h2>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default MobileScrollInteraction3;
