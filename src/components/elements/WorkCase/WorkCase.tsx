import React from "react";
import { WorkCaseProps } from "@interfaces/components/WorkCase";
import Image from '@elements/image-component/index';

const WorkCase: React.FC<WorkCaseProps> = ({ project, inverted, alignImage, caseRef }): JSX.Element => {
    return (
        <>
           {project.quote && <div className="hidden md:flex w-full h-[30vw] flex-col justify-center items-center text-lg">
                <p>{project.quote}</p>
            </div>}
            <article ref={caseRef} className={inverted ? `w-full flex flex-col md:flex-row` : `w-full flex flex-col md:flex-row-reverse`}>
                <div className="w-full md:w-1/2 md:aspect-square bg-primary-white flex justify-center p-4 flex-col md:p-16 lg:p-32">
                    <p className="text-3xl font-bold mb-4 mt-[6rem] md:mt-0">{project.title}</p>
                    <p className="text-xl font-bold mb-4">{project.hoverClientName}</p>
                    <p className="mb-8">{project.hoverDescription}</p>
                    <div className="border rounded-full w-min px-4 py-3">
                        <a href={project.callToAction}>
                            <p className="inline-block whitespace-nowrap">View Case</p>
                        </a>
                    </div>
                </div>
                <div className={`w-full md:w-1/2 aspect-square bg-${project.backgroundColor} flex justify-center items-center overflow-hidden`}>
                    <div className={alignImage === 'right' ? "translate-x-[20%]" : alignImage === 'left' ? "-translate-x-[20%]" : ""}>
                        <Image url={project.image.data.attributes.url} alt="project" layout="intrinsic" height={'673'} width={'977'} />
                    </div>
                </div>
            </article>
        </>
    )
}

export default WorkCase;