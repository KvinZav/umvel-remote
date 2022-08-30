import { HighlighsPhonePorps } from "@types/modules/highlights"

const HighlightsPhone:React.FC<HighlighsPhonePorps> = ({projects}):JSX.Element => {
    if(projects){
        return (
            <div className=" bg-cases-viva w-screen h-[300vw] grid grid-rows-6">
                <div className="row-start-1 row-span-1 bg-primary-white">
                    <div className="h-full flex flex-col justify-center ">
                        <div>
                            <h3 className="text-3xl font-bold mb-4 mx-8 mt-8">If you can dream it,<br/> we can make it.</h3>
                        </div>
                    </div>
                </div>
                <div className="row-start-2 row-span-4 overflow-x-scroll flex flex-row snap-x">
                    {
                        projects.map((project)=>{
                            return <ProjectCard
                                title={project.title}
                                subtitle={project.subtitle}
                                description={project.description}
                                key={project.id}
                                imgUrl={project.imgUrl}
                                button={true}
                            />
                        })
                    }
                </div>
                <div className="row-start-6 row-span-1 flex justify-center items-center bg-primary-white">
                    <img src="https://picsum.photos/500/500" alt="show all" className="w-1/4"/>
                </div>
            </div>
        )
    }
}
type PorjectsCardPropsTypes = {
    title:string,
    subtitle?:string,
    description?:string,
    button?:boolean,
    imgUrl:string,
    handleClick?:()=>void
}
const ProjectCard: React.FC<PorjectsCardPropsTypes> = ({title,subtitle,description,button=false,handleClick,imgUrl}):JSX.Element => {
    return (
        <article className="min-w-[90vw] h-full grid grid-rows-2 border snap-start">
            <div className="row-start-1 row-span-1">
                <div className="h-full p-8 bg-secondary-70/50">
                    <h3 className="text-xl font-bold text-primary-white mb-4">{title}</h3>
                    {subtitle&&<p className="text-sm font-bold text-primary-white mb-4">{subtitle}</p>}
                    {description&&<p className="text-sm text-primary-white mb-4">{description}</p>}
                    {button&&<button className="border-2 rounded-full px-4 py-1 text-primary-white" >View Case</button>}
                </div>
            </div>
            {imgUrl&&<div className="row-start-2 row-span-1 flex justify-center items-center">
                <img src={imgUrl} alt="proyect" className="h-[80%] max-w-[30%] rounded-3xl opacity-50 z-0 relative left-12"/>
                <img src={imgUrl} alt="proyect" className="h-[90%] max-w-[40%] rounded-3xl z-10"/>
            </div>}
        </article>
    )
}
export default HighlightsPhone;