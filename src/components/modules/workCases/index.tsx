import React, { useEffect, useRef, useState } from "react"
import WorkCase from "@elements/WorkCase/WorkCase";
import useSWR from "swr";
import { environment } from "@environments/index";
import { useAppState } from "@hooks/customHooks";

const WorkCases: React.FC = (): JSX.Element => {

    const { scrollOffset } = useAppState()
    const workCaseRefs = useRef<HTMLDivElement[]>([])
    const [currentPage, setCurrentPage] = useState<number>(0)
    
    useEffect(() => {
        const tops = workCaseRefs.current.map((i, n) => i.getBoundingClientRect().top)        
        const current = tops.findIndex(i => i > 0)

        setCurrentPage(current - 1)
    }, [scrollOffset])
    
    const { data: event } = useSWR(environment.OUR_WORK_URL)
    if (!event) return null;
    const cases = event.data.attributes.body[0].cases;

    return (
        <section
            className="w-screen"
        >
            {
                cases.map((project, index) => {
                    return (
                        <div
                            ref={el => workCaseRefs.current[index] = el}
                            key={'project-' + index}
                            id={'project-' + index}
                            className={`z-0 w-full flex flex-col justify-center items-center`}
                        >
                            <WorkCase project={project} inverted={index % 2 === 0} key={project.title+index} alignImage={'left'} />
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
                    cases.map((caseItem, caseIndex) => (
                        <div key={'indicator-' + caseIndex} className="group relative">
                            <div className={`w-3 h-3 rounded-full ${caseIndex === currentPage ? 'bg-secondary-50' : 'bg-secondary-20'}`} />
                            <button
                                //Negative right offset 19px = 34px (from indicator container margin) - 16px (from label padding) + 1px (from border width)
                                className={`absolute flex -top-[160%] -right-[19px] border border-secondary-10 rounded-full py-3 px-4 space-x-4 justify-center items-center transition duration-500 opacity-0 group-hover:opacity-100`}
                                onClick={() => workCaseRefs.current[caseIndex].scrollIntoView({ behavior: 'smooth' })}
                            >
                                <span className="whitespace-nowrap origin-right transition-[max-width] duration-1000 max-w-0 group-hover:max-w-[150px] overflow-hidden">{caseItem.title}</span>
                                <div className={`w-4 h-4 bg-${caseItem.backgroundColor}`} />
                            </button>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default WorkCases;