import React, { useRef, useState } from 'react';

const sections = [
  {
    id: 1,
    title: "Project 1",
    background:'bg-prisma-red',
  },
  {
    id: 2,
    title: "Project 2",
    background:'bg-prisma-orange',
  },
  {
    id: 3,
    title: "Project 3",
    background:'bg-prisma-yellow',
  },
  {
    id: 4,
    title: "Project 4",
    background:'bg-prisma-lime',
  },
  {
    id: 5,
    title: "Project 5",
    background:'bg-prisma-green',
  },
  {
    id: 6,
    title: "Project 6",
    background:'bg-prisma-aqua',
  },
]

const OurWorkPage = () => {

  const workCaseRefs = useRef<HTMLDivElement[]>([])
  const mainContainerRef = useRef<HTMLDivElement>(null)
  const [sectionPages, setSectionPages] = useState<Array<any>>(sections)
  const [currentPage, setCurrentPage] = useState<number>(0)
  
  const handleScroll = event => setCurrentPage(Math.round(event.currentTarget.scrollTop / event.currentTarget.offsetHeight))

  return(
    <main
      className="relative h-screen w-screen overflow-scroll snap-proximity snap-y"
      ref={mainContainerRef}
      onScroll={handleScroll}
    >
      {
        sectionPages.map((section, index) => {
          return(
          <div 
            ref={el => workCaseRefs.current[index] = el}
            key={'project-'+section.id}
            id={'project-'+section.id}
            className={`z-0 h-full w-full ${section.background} flex justify-center items-center snap-start`}
          >
            <h1 className="text-6xl text-primary-white">{section.id}</h1>
          </div>
        )})
      }
      <div className="h-full fixed top-0 right-0 z-50 flex flex-col justify-center space-y-10 px-[34px]">
        {
          sections.map((section, index) => (
            <div key={'indicator-'+index} className="group relative">
              <div className={`w-3 h-3 rounded-full ${index === currentPage ? 'bg-secondary-50' : 'bg-secondary-20'}`}/>
              <button
                //Negative right offset 19px = 34px (from indicator container margin) - 16px (from label padding) + 1px (from border width)
                className={`absolute flex -top-[160%] -right-[19px] border border-secondary-10 rounded-full py-3 px-4 space-x-4 justify-center items-center transition duration-500 opacity-0 group-hover:opacity-100`}
                onClick={() => workCaseRefs.current[index].scrollIntoView({behavior: 'smooth'})}
              >
                <span className="whitespace-nowrap origin-right transition-[max-width] duration-1000 max-w-0 group-hover:max-w-[85px] overflow-hidden">{section.title}</span>
                <div className={`w-4 h-4 ${section.background}`}/>
              </button>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default OurWorkPage;
