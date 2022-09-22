import PrismButton from "@elements/square-colors";
import { HighlightsPhonePorps } from "@type/modules/highlights"
import Image from "@elements/image-component";
import { Attributes2 } from "@interfaces/home-data/home.interface";

const HighlightsPhone: React.FC<HighlightsPhonePorps> = ({ projects }): JSX.Element => {
    if (projects) {
        return (
            <>
                <hr className="mx-12 text-secondary-10"></hr>
                <div className="h-full aspect-[2/1] flex justify-center items-center">
                    <h3 className="text-3xl font-bold">If you can dream it,<br /> we can make it.</h3>
                </div>
                <div className="w-full h-[180vw] overflow-hidden overflow-x-scroll snap-x">
                    <div className="h-full flex flex-row">
                        {
                            projects.map((project) => {
                                return <ProjectCard
                                    title={project.attributes.title}
                                    portfolioDataOfInterest={project.attributes.portfolioDataOfInterest}
                                    portfolioDescription={project.attributes.portfolioDescription}
                                    description={project.attributes.caseDescription}
                                    key={project.id}
                                    button={true}
                                    imgAttributes={project?.attributes?.image?.data?.attributes}
                                    backgroundColor={project.attributes.primaryColor}
                                />
                            })
                        }
                    </div>
                </div>
                <div className="aspect-[3/2] flex justify-center items-center">
                    <div className="w-1/3">
                        <PrismButton>View all cases</PrismButton>
                    </div>
                </div>
                <hr className="mx-12 text-secondary-10"></hr>
            </>
        )
    }
}
type PorjectsCardPropsTypes = {
    title: string,
    description?: string,
    portfolioDataOfInterest?: string,
    portfolioDescription?: string,
    button?: boolean,
    imgAttributes?: Attributes2,
    handleClick?: () => void,
    backgroundColor?: string
}
const ProjectCard: React.FC<PorjectsCardPropsTypes> = ({ title, description,backgroundColor, button = false, handleClick, imgAttributes, portfolioDataOfInterest, portfolioDescription }): JSX.Element => {
    return (
        <article className={`w-full aspect-[1/2] h-full grid grid-rows-2 border snap-center bg-${backgroundColor}`}>
            <div className="row-start-1 row-span-1">
                <div className="h-full p-8 bg-secondary-70/50">
                    <h3 className="text-xl font-bold text-primary-white mb-4">{title}</h3>
                    {portfolioDataOfInterest && <p className="text-sm font-bold text-primary-white mb-4">{portfolioDataOfInterest}</p>}
                    {portfolioDescription && <p className="text-sm font-bold text-primary-white mb-4">{portfolioDescription}</p>}
                    {description && <p className="text-sm text-primary-white mb-4">{description}</p>}
                    {button && <button className="border-2 rounded-full px-4 py-1 text-primary-white" >View Case</button>}
                </div>
            </div>
            {imgAttributes.url && <div className="row-start-2 row-span-1 flex justify-center items-center">
                <Image url={imgAttributes.url} alt="proyect" layout="intrinsic" width={imgAttributes.width} height={imgAttributes.height} />
            </div>}
        </article>
    )
}
export default HighlightsPhone;