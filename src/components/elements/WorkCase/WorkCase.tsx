import React from "react";
import { WorkCaseProps } from "@interfaces/components/WorkCase";
import Image from '@elements/image-component/index';

const WorkCase: React.FC<WorkCaseProps> = ({ project, inverted, alignImage }): JSX.Element => {
    return (
        <>
           {project.quote && <div className="hidden sm:flex w-full h-[30vw] flex-col justify-center items-center text-lg">
                <p>{project.quote}</p>
            </div>}
            <article className={inverted ? `w-full flex flex-col sm:flex-row` : `w-full flex flex-col sm:flex-row-reverse`}>
                <div className="w-full sm:w-1/2 sm:aspect-square bg-primary-white flex justify-center p-4 flex-col sm:p-16 lg:p-32">
                    <p className="text-3xl font-bold mb-4 mt-[6rem] sm:mt-0">{project.title}</p>
                    <p className="text-xl font-bold mb-4">{project.hoverClientName}</p>
                    <p className="mb-4">{project.hoverDescription}</p>
                    <div className="border rounded-full w-min px-4 py-3">
                        <a href={project.callToAction}>
                            <p className="inline-block whitespace-nowrap">View Cases</p>
                        </a>
                    </div>
                </div>
                <div className={`w-full sm:w-1/2 aspect-square bg-${project.backgroundColor} flex justify-center items-center overflow-hidden`}>
                    <div className={alignImage === 'right' ? "translate-x-[20%]" : alignImage === 'left' ? "-translate-x-[20%]" : ""}>
                        <Image url={project.image.data.attributes.url} alternativeText="project" layout="intrinsic" height={'673'} width={'977'} />
                    </div>
                </div>
            </article>
        </>
    )
}

export default WorkCase;