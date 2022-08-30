import { HighlightsTabletPorps } from "@types/modules/highlights";

const HighlightsTablet:React.FC<HighlightsTabletPorps> = ({project,handleNext,handlePrevious}):JSX.Element => {
    if(project){
        return (
            <div className="bg-cases-viva w-screen h-[150vw] grid grid-cols-2 grid-rows-3 ">
                <div className="col-start-1 col-span-1 row-start-1 row-span-1">
                    <div className="h-full p-8 bg-secondary-70/50">
                        <h3 className="text-xl font-bold text-primary-white mb-4">{project.title}</h3>
                        <p className="text-sm font-bold text-primary-white mb-4">{project.subtitle}</p>
                        <p className="text-sm text-primary-white mb-4">{project.description}</p>
                        <button className="border-2 rounded-full px-4 py-1 text-primary-white" >View Case</button>
                    </div>
                </div>
                <div className="col-start-2 col-span-1 row-start-1 row-span-1 bg-primary-white">
                    <div className="h-full flex flex-col justify-center ">
                        <div>
                            <h3 className="text-xl font-bold mb-4 mx-8 mt-8">If you can dream it, we ca make it</h3>
                            <p className="font-sm mx-8 mb-4">Explore more cases:</p>
                        </div>
                        <div className="h-1/2 flex flex-row justify-center items-center ">
                            <button className="mr-4" onClick={()=>handlePrevious()}>{'<'}</button>
                            <img src="https://picsum.photos/400/400" alt="show all" className=" max-h-[80%] max-w-[30%]"/>
                            <button className="ml-4" onClick={()=>handleNext()}>{'>'}</button>
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-span-2 row-start-2 row-span-2 flex justify-center items-center">
                    <img src="https://picsum.photos/500/1200" alt="proyect" className="h-[80%] rounded-3xl opacity-50 z-0 relative left-12"/>
                    <img src="https://picsum.photos/500/1200" alt="proyect" className="h-[90%] rounded-3xl z-10"/>
                </div>
            </div>
        )
    }
}

export default HighlightsTablet;