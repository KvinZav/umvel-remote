import React from "react";
import { WorkCaseProps } from "@interfaces/components/WorkCase";
import Image from '@elements/image-component/index';
import BasicButton from "@elements/button";
import Link from "next/link";

const WorkCase: React.FC<WorkCaseProps> = ({ project, inverted, alignImage }): JSX.Element => {
    return (
        <article className={inverted?`w-full bg-prisma-navy flex flex-col sm:flex-row`:`w-full flex flex-col sm:flex-row-reverse`}>
            <div className="w-full sm:w-1/2 sm:aspect-square bg-primary-white flex justify-center p-4 flex-col sm:p-16 lg:p-32">
                <p className="text-3xl font-bold mb-4 mt-[6rem] sm:mt-0">Viva Aerobus</p>
                <p className="text-xl font-bold mb-4">Mobile App</p>
                <p className="mb-4">You love flying. Now you’ll love getting tickets too.</p>
                <Link href="#">
                    <BasicButton>View Cases</BasicButton>
                </Link>
            </div>
            <div className="w-full sm:w-1/2 aspect-square bg-prisma-lemon flex justify-center items-center">
                <Image url="https://raw.githubusercontent.com/franciscojagarcia/assets-umvel/main/Property%201%3DDefault.svg" alternativeText="project" layout="intrinsic" height={'673'} width={'977'} />
            </div>
        </article>
    )
}

export default WorkCase;