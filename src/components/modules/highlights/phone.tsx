import SqueareColors from "@elements/square-colors";
import { HighlightsPhonePorps } from "@type/modules/highlights"

const HighlightsPhone:React.FC<HighlightsPhonePorps> = ({projects}):JSX.Element => {
    if(projects){
        return (
            <>
                <hr className="mx-12 text-secondary-30"></hr>
                <div className="h-full aspect-[2/1] flex justify-center items-center">
                    <h3 className="text-3xl font-bold">If you can dream it,<br/> we can make it.</h3>
                </div>
                <div className="w-screen h-[180vw] overflow-hidden overflow-x-scroll snap-x bg-prisma-green">
                    <div className="h-full flex flex-row">
                        {
                            projects.map((project)=>{
                                return <ProjectCard
                                    title={project.attributes.title}
                                    subtitle={project.attributes.portfolioDataOfInterest}
                                    description={project.attributes.caseDescription}
                                    key={project.id}
                                    button={true}
                                />
                            })
                        }
                    </div>
                </div>
                <div className="aspect-[3/2] flex justify-center items-center">
                    <div className="w-1/3">
                        <SqueareColors text="View all cases" textSize="md"/>
                    </div>
                </div>
                <hr className="mx-12 text-secondary-30"></hr>
            </>
        )
    }
}
type PorjectsCardPropsTypes = {
    title:string,
    subtitle?:string,
    description?:string,
    button?:boolean,
    imgUrl?:string,
    handleClick?:()=>void
}
const ProjectCard: React.FC<PorjectsCardPropsTypes> = ({title,subtitle,description,button=false,handleClick,imgUrl}):JSX.Element => {
    return (
        <article className="w-full aspect-[1/2] h-full grid grid-rows-2 border snap-center">
            <div className="row-start-1 row-span-1">
                <div className="h-full p-8 bg-secondary-70/50">
                    <h3 className="text-xl font-bold text-primary-white mb-4">{title}</h3>
                    {subtitle&&<p className="text-sm font-bold text-primary-white mb-4">{subtitle}</p>}
                    {description&&<p className="text-sm text-primary-white mb-4">{description}</p>}
                    {button&&<button className="border-2 rounded-full px-4 py-1 text-primary-white" >View Case</button>}
                </div>
            </div>
            {imgUrl&&<div className="row-start-2 row-span-1 flex justify-center items-center">
                <img src={imgUrl?imgUrl:"https://picsum.photos/500/1200"} alt="proyect" className="h-[80%] max-w-[30%] rounded-3xl opacity-50 z-0 relative left-12"/>
                <img src={imgUrl?imgUrl:"https://picsum.photos/500/1200"} alt="proyect" className="h-[90%] max-w-[40%] rounded-3xl z-10"/>
            </div>}
        </article>
    )
}
export default HighlightsPhone;