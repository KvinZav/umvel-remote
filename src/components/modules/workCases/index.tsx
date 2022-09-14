import React from "react"
import WorkCase from "@elements/WorkCase/WorkCase";
import useSWR from "swr";
import { environment } from "@environments/index";
import { findDOMNode } from "react-dom";

const WorkCases:React.FC = ():JSX.Element => {
    const { data: event } = useSWR(environment.OUR_WORK_URL)
    if (!event) return null;
    const cases = event.data.attributes.body[0].cases
    const quotes = event.data.attributes.body[0].quotes
    return (
        <>
            {
                cases.map((quote,index)=>{
                    if(quotes.find(item=>item.position===index)){
                        return(
                            <>
                                <div className="hidden sm:flex w-full h-[30vw] flex-col justify-center items-center text-lg">
                                    <p>{quotes.find(item=>item.position===index).title}</p>
                                </div>
                                <WorkCase project={quote} inverted={index%2===0} key={quote.title} alignImage={'left'} />
                            </>
                        )
                    }
                    else{
                        return <WorkCase project={quote} inverted={index%2===0} key={quote.title} alignImage={'right'} />
                    }
                })
            }
            
        </>
    )
}

export default WorkCases;