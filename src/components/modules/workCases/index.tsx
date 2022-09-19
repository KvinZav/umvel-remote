import React, { useRef, useState } from "react"
import WorkCase from "@elements/WorkCase/WorkCase";
import useSWR from "swr";
import { environment } from "@environments/index";

const WorkCases: React.FC = (): JSX.Element => {

    const workCaseRefs = useRef<HTMLDivElement[]>([])
    const mainContainerRef = useRef<HTMLDivElement>(null)
    // const [sectionPages, setSectionPages] = useState<Array<any>>(sections)
    const [currentPage, setCurrentPage] = useState<number>(0)

    const handleScroll = event => setCurrentPage(Math.round(event.currentTarget.scrollTop / event.currentTarget.offsetHeight))

    return (
        <main
            className="relative h-screen w-screen overflow-scroll snap-proximity snap-y"
            ref={mainContainerRef}
            onScroll={handleScroll}
        >
            {
                [...new Array(6)].map((_, index) => {
                    return (
                        <div
                            ref={el => workCaseRefs.current[index] = el}
                            key={'project-' + index}
                            id={'project-' + index}
                            className={`z-0 w-full flex flex-col justify-center items-center snap-center`}
                        >
                            <WorkCase inverted={index % 2 === 0} />
                        </div>
                    )
                })
            }
            <div className="w-full h-[30vw] flex flex-col justify-center items-center">
                <p>We deliver what</p>
                <p>we promise.</p>
            </div>

            <div className="h-full fixed top-0 right-0 z-50 flex flex-col justify-center space-y-10 px-[34px]">
                {
                    [...new Array(6)].map((_, index) => (
                        <div key={'indicator-' + index} className="group relative">
                            <div className={`w-3 h-3 rounded-full ${index === currentPage ? 'bg-secondary-50' : 'bg-secondary-20'}`} />
                            <button
                                //Negative right offset 19px = 34px (from indicator container margin) - 16px (from label padding) + 1px (from border width)
                                className={`absolute flex -top-[160%] -right-[19px] border border-secondary-10 rounded-full py-3 px-4 space-x-4 justify-center items-center transition duration-500 opacity-0 group-hover:opacity-100`}
                                onClick={() => workCaseRefs.current[index].scrollIntoView({ behavior: 'smooth' })}
                            >
                                <span className="whitespace-nowrap origin-right transition-[max-width] duration-1000 max-w-0 group-hover:max-w-[85px] overflow-hidden">{index}</span>
                                <div className={`w-4 h-4 bg-prisma-blue`} />
                            </button>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default WorkCases;