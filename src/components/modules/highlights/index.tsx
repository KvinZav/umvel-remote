import useMediaQuery from "@hooks/useMediaQuery"
import React,{useState} from "react"
import HighlightsPhone from "./phone";
import HighlightsTablet from "./tablet";
import HighlightsDesktop from "./desktop";

const CasesHighlights:React.FC = ():JSX.Element => {
    const [project,setProject] = useState();
    const phone= useMediaQuery('(max-width: 640px)');
    const tablet= useMediaQuery('(max-width: 1024px) and (min-width: 640px)');
    const desktop= useMediaQuery('(min-width: 1024px)');

    if(project===undefined){
        setProject(projects[0]);
    }

    const handleNext = () => {
        if(project.id<projects.length){
            setProject(projects[(project.id)])
        }
        if(project.id>=projects.length){
            setProject(projects[0])
        }
    }
    const handlePrevious = () => {
        console.log(project.id);
        if(project.id>1){
            setProject(projects[(project.id-2)])
        }
        if(project.id===1){
            setProject(projects[projects.length-1])
        }
    }

    if(phone){return <HighlightsPhone projects={projects}/>}
    if(tablet){return <HighlightsTablet project={project} handleNext={handleNext} handlePrevious={handlePrevious}/>}
    if(desktop){return <HighlightsDesktop project={project} handleNext={handleNext} handlePrevious={handlePrevious} />} 
}

export default CasesHighlights

const projects = [
    {
        id:1,
        title:"Viva aerobus1",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        imgUrl:"https://picsum.photos/500/1200",
    },
    {
        id:2,
        title:"Viva aerobus2",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        imgUrl:"https://picsum.photos/500/1200",
    },
    {
        id:3,
        title:"Viva aerobus3",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        imgUrl:"https://picsum.photos/500/1200",
    },
    {   
        id:4,
        title:"Viva aerobus4",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        imgUrl:"https://picsum.photos/500/1200",
    },
    {
        id:5,
        title:"Viva aerobus5",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        imgUrl:"https://picsum.photos/500/1200",
    },
    {   
        id:6,
        title:"Viva aerobus6",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        imgUrl:"https://picsum.photos/500/1200",
    }
]