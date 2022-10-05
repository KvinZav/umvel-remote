import Image from '@elements/image-component';
import CustomImage from '@elements/image-component/CustomImage';
import PrismButton from '@elements/square-colors';
import { HighlightsTabletPorps } from '@type/modules/highlights';
import Link from 'next/link';
const HighlightsTablet: React.FC<HighlightsTabletPorps> = ({
    project,
    handleNext,
    handlePrevious,
    title,
}): JSX.Element => {
    const imgAttribute = project.attributes.image.data.attributes;
    if (project) {
        return (
            <div
                className={`w-full h-[150vw] grid grid-cols-2 grid-rows-3`}
                style={{
                    backgroundColor: project.attributes.primaryColor
                }}
            >
                <div className="col-start-1 col-span-1 row-start-1 row-span-1">
                    <div className="h-full p-8 bg-secondary-70/50">
                        <h3 className="text-m3 font-bold text-primary-white mb-4">
                            {project.attributes.title}
                        </h3>
                        <p className="text-s2 font-bold text-primary-white mb-4">
                            {project.attributes.portfolioDataOfInterest}
                        </p>
                        <p className="text-s2 font-bold text-primary-white mb-4">
                            {project.attributes.portfolioDescription}
                        </p>
                        <p className="text-s2 text-primary-white mb-4">{project.attributes.caseDescription}</p>
                        <div className="flex">
                            <div className="flex border rounded-full px-4 py-2 text-primary-white text-s2">
                                <Link href={`/cases/${project.id}`}>View Case</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-start-2 col-span-1 row-start-1 row-span-1 bg-primary-white">
                    <div className="h-full flex flex-col justify-center ">
                        <div>
                            <h3 className="text-m3 font-bold mb-4 mx-8 mt-8">{title}</h3>
                            <p className="text-s2 mx-8 mb-4">Explore more cases:</p>
                        </div>
                        <div className="h-1/2 flex flex-row justify-center items-center ">
                            <button className="mr-16 text-m1" onClick={() => handlePrevious()}>
                                <CustomImage src="/assets/icons/chevronLeft.svg" alt="icon-chevron-right" />
                            </button>
                            <div>
                                <Link href="/our-work">
                                    <PrismButton>View all cases</PrismButton>
                                </Link>
                            </div>
                            <button className="ml-16 text-m1" onClick={() => handleNext()}>
                                <CustomImage src="/assets/icons/chevronRight.svg" alt="icon-chevron-right" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-span-2 row-start-2 row-span-2 flex justify-center items-center">
                    {imgAttribute.url && (
                        <Image
                            url={imgAttribute.url}
                            alt="project"
                            layout="intrinsic"
                            height={imgAttribute.height}
                            width={imgAttribute.height}
                        />
                    )}
                </div>
            </div>
        );
    }
};

export default HighlightsTablet;
