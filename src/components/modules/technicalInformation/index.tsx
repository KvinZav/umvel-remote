import { CaseAttributes } from "@interfaces/cases-data/cases.interface";
import React, { FC } from "react"

type TechnicalInformationProps = {
    caseData: CaseAttributes;
}

const TechnicalInformation:FC<TechnicalInformationProps> = ({caseData}) => {

    const {services, platforms , technicalInformation} = caseData.technicalInformationGroup;

    console.log(services, platforms , technicalInformation);
    
    return (
        <>
            <div className="flex justify-center ">
                <p className="font-bold text-4xl mb-20 mt-36 sm:mt-40 lg:mt-48">Technical information</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
                <div className="aspect-square w-auto border-secondary-10 bg-cover bg-center hidden lg:flex" style={{backgroundImage: 'url(https://picsum.photos/700)'}} />
                <div className="aspect-square w-auto border border-secondary-10 p-8 lg:p-12 flex flex-col space-y-10">
                    {
                        technicalInformation.map(infoItem => infoItem.title.toLowerCase() !== "client" ?
                            <div key={'tech-info-'+infoItem.id}>
                                <h3>{infoItem.title}</h3>
                                <p className="font-bold">{infoItem.content}</p>
                            </div> : null
                        )
                    }
                    <div>
                        <h3>Platforms</h3>
                        <p className="font-bold">{platforms.map(platform => platform.name).join('/')}</p>
                    </div>
                </div>
                <div className="aspect-square w-auto border border-secondary-10 p-8 lg:p-12 flex flex-col overflow-y-scroll overflow-hidden">
                    <h3 className="mb-4">Services</h3>
                    <div className="flex flex-wrap mb-6">
                        {
                            services.map(item=>{
                                return(
                                    <div className="rounded-full bg-secondary-10 mb-4 mr-4 px-6 py-2" key={'info'+item.id}>
                                        <p className="text-primary-black inline">{item.name}</p>
                                    </div>
                                ) 
                            })
                        }
                    </div>
                    <div className="flex">
                        <a href="#">
                            <div className="flex border rounded-full py-3 px-6">
                                <p>See all services</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    ) 
}

export default TechnicalInformation