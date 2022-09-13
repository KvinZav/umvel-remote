import React from "react"
import WorkCase from "@elements/WorkCase/WorkCase";

const WorkCases:React.FC = ():JSX.Element => {
    
    return (
        <>
            
            <WorkCase />
            <WorkCase inverted/>
            <div className="w-full h-[30vw] flex flex-col justify-center items-center">
                <p>We deliver what</p>
                <p>we promise.</p>
            </div>
        </>
    )
}

export default WorkCases;