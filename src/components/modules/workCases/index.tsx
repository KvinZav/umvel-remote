import React from "react"
import WorkCase from "@elements/WorkCase/WorkCase";
import useSWR from "swr";
import { environment } from "@environments/index";

const WorkCases: React.FC = (): JSX.Element => {
    const { data: event } = useSWR(environment.OUR_WORK_URL)
    if (!event) return null;
    const cases = event.data.attributes.body[0].cases;
    return (
        <>
            {
                cases.map((project, index) => 
                (<WorkCase project={project} inverted={index % 2 === 0} key={project.title+index} alignImage={'left'} />)
                )
            }
        </>
    )
}

export default WorkCases;