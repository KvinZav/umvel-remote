import React from "react";
import { WorkCaseProps } from "@interfaces/components/WorkCase";
import Image from '@elements/image-component/index';
import BasicButton from "@elements/button";
import Link from "next/link";

const WorkCase: React.FC<WorkCaseProps> = ({ project, inverted, alignImage, caseRef }): JSX.Element => (
    <>
        <article ref={caseRef} className={inverted ? `w-full flex flex-col-reverse md:flex-row` : `w-full flex flex-col-reverse md:flex-row-reverse`}>
            <div className="md:w-1/2 aspect-square bg-primary-white flex md:justify-center py-6 px-12 flex-col md:px-16 md:py-16 lg:px-32 lg:py-32">
                <p className="text-3xl font-bold mb-2 md:mb-4 md:mt-0">{project.title}</p>
                <p className="text-xl font-bold mb-2 md:mb-4">{project.hoverClientName}</p>
                <p className="mb-4 md:mb-8">{project.hoverDescription}</p>
                <Link href={project.callToAction || `/cases/${project.id}`}>
                    <BasicButton>View Case</BasicButton>
                </Link>
            </div>
            <div className={`w-full md:w-1/2 aspect-square bg-${project.backgroundColor} overflow-hidden`}>
                <div className="w-full h-full">
                    <Image url={project.image?.data.attributes.url || '/assets/images/generic_mockup.svg'} alt="project" layout="responsive" height={'100%'} width={'100%'} />
                </div>
            </div>
        </article>
        {project.quote && <div className="hidden md:flex w-full py-40 lg:py-[200px] flex-col justify-center items-center">
            <p className="text-4xl font-bold max-w-md text-center">{project.quote}</p>
        </div>}
    </>
)


export default WorkCase;