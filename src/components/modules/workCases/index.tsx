import React, { useEffect, useRef, useState } from 'react';
import WorkCase from '@elements/WorkCase/WorkCase';
import useSWR from 'swr';
import { environment } from '@environments/index';
import useScrollOffset from '@hooks/useScrollOffset';
import smoothscroll from 'smoothscroll-polyfill';

const WorkCases: React.FC = (): JSX.Element => {
  const { scrollOffset } = useScrollOffset();
  const workCaseRefs = useRef<HTMLDivElement[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    const tops = workCaseRefs.current.map((i, _) => i.getBoundingClientRect().top);
    const current = tops[0] < 400 ? tops.findIndex((i) => i >= -200) : -1;

    setCurrentPage(current);
  }, [scrollOffset]);

  const { data: event } = useSWR(environment.OUR_WORK_URL);
  if (!event) return null;

  const cases = event.data.attributes.body[0].cases
  const quotes = event.data.attributes.body.find(i => i.__component === 'workcases.quotes').quotes

  const handleSmoothScroll = (caseIndex) => {
    smoothscroll.polyfill();
    workCaseRefs.current[caseIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section>
      <div className="w-full flex overflow-x-clip md:mb-0">
        <div className="flex flex-col min-w-full">
          {cases.map((project, index) => {
            return (
              <div
                key={'project-' + index}
                id={'project-' + index}
                className={`z-0 w-full flex flex-col justify-center items-center`}
              >
                <WorkCase
                  caseRef={(el: HTMLDivElement) => (workCaseRefs.current[index] = el)}
                  quote={quotes?.find((quoteItem, quoteIndex) => quoteItem.position === index && quoteIndex !== quotes.length - 1)?.body}
                  project={project}
                  inverted={index % 2 !== 0}
                  key={project.title + index}
                  alignImage={'center'}
                />
              </div>
            );
          })}
          <p className="md:hidden text-m1 font-bold max-w-md text-center mb-36 px-[72px]">
            We got plenty of space to put your brand here.
          </p>
        </div>

        <div className="hidden lg:flex h-screen w-8 sticky top-0 right-8 flex-col justify-center items-end space-y-6 xl:space-y-8">
          {cases.map((caseItem, caseIndex) => (
            <div key={'indicator-' + caseIndex} className="group relative">
              <div
                className={`w-2 h-2 rounded-full ${caseIndex === currentPage ? 'bg-secondary-50' : 'bg-secondary-20'
                  }`}
              />
              {/* Negative right offset 17px = 34px (from indicator container margin) - 16px (from label padding) - 1px (from border width) */}
              <button
                style={{ backgroundColor: '#fff' }}
                className={`absolute flex -top-[200%] xl:-top-[300%] -right-[17px] border border-secondary-10 rounded-full py-3 px-4 space-x-2 justify-center items-center opacity-0 group-hover:opacity-100`}
                onClick={() => handleSmoothScroll(caseIndex)}
              >
                <span className="whitespace-nowrap origin-right transition-[max-width] duration-1000 max-w-0 group-hover:max-w-[150px] group-hover:xl:max-w-[200px] overflow-hidden text-s3">
                  {caseItem.title}
                </span>
                <div
                  className={`w-2 h-2`}
                  style={{
                    backgroundColor: caseItem.backgroundColor
                  }}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      {quotes.length && <div className="hidden md:flex py-40 lg:py-[200px] xl:py-60 flex-col justify-center items-center">
        <p className="text-m1 font-bold max-w-md xl:max-w-[600px] text-center">{quotes[quotes.length - 1].body}</p>
      </div>}
    </section>
  );
};

export default WorkCases;
