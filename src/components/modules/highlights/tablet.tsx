import Image from "@elements/image-component";
import CustomImage from "@elements/image-component/CustomImage";
import PrismButton from "@elements/square-colors";
import { HighlightsTabletPorps } from "@type/modules/highlights";
import Link from "next/link";
const HighlightsTablet:React.FC<HighlightsTabletPorps> = ({project,handleNext,handlePrevious,title}):JSX.Element => {
    const imgAttribute = project.attributes.image.data.attributes
;    if(project){
        return (
            <div className={`bg-${project.attributes.primaryColor} w-full h-[150vw] grid grid-cols-2 grid-rows-3`}>
                <div className="col-start-1 col-span-1 row-start-1 row-span-1">
                    <div className="h-full p-8 bg-secondary-70/50">
                        <h3 className="text-xl font-bold text-primary-white mb-4">{project.attributes.title}</h3>
                        <p className="text-sm font-bold text-primary-white mb-4">{project.attributes.portfolioDataOfInterest}</p>
                        <p className="text-sm font-bold text-primary-white mb-4">{project.attributes.portfolioDescription}</p>
                        <p className="text-sm text-primary-white mb-4">{project.attributes.caseDescription}</p>
                        <button className="border-2 rounded-full px-4 py-1 text-primary-white" >View Case</button>
                    </div>
                </div>
                <div className="col-start-2 col-span-1 row-start-1 row-span-1 bg-primary-white">
                    <div className="h-full flex flex-col justify-center ">
                        <div>
                            <h3 className="text-xl font-bold mb-4 mx-8 mt-8">{title}</h3>
                            <p className="font-sm mx-8 mb-4">Explore more cases:</p>
                        </div>
                        <div className="h-1/2 flex flex-row justify-center items-center ">
                            <button className="mr-16 text-4xl" onClick={()=>handlePrevious()}>
                                <CustomImage
                                    src="/assets/icons/chevronLeft.svg"
                                    alt="icon-chevron-right"
                                />
                            </button>
                            <div>
                                <Link href="/our-work">
                                    <PrismButton>View all cases</PrismButton>
                                </Link>
                            </div>
                            <button className="ml-16 text-4xl" onClick={()=>handleNext()}>
                                <CustomImage
                                    src="/assets/icons/chevronRight.svg"
                                    alt="icon-chevron-right"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-span-2 row-start-2 row-span-2 flex justify-center items-center">
                    {imgAttribute.url&&<Image url={imgAttribute.url} alt="proyect" layout="intrinsic" height={imgAttribute.height} width={imgAttribute.height}/>}
                </div>
            </div>
        )
    }
}

export default HighlightsTablet;