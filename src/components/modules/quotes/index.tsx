import React from "react";
import { environment } from "@environments/index";
import { FETCHER } from '@fetcher/clients';
import { BlockNameEnum } from "@enums/BlockName";
import useSWR from "swr";
import BasicButton from "@elements/button";
import { isColorLight } from "@utils/colorUtils";

const Quotes = (): JSX.Element => {

    const { data: event } = useSWR(environment.HOME_URL)
    if (!event) return null;

    const {quote} = FETCHER(event, BlockNameEnum.quotes)

    return (
        <div className={`h-[180vw] sm:h-[200vw] w-full overflow-hidden overflow-x-scroll snap-x lg:h-[50vw]`}>
            <section className="h-[180vw] flex flex-col flex-wrap sm:h-[200vw] lg:h-[50vw] snap-x">
                <article className="bg-primary-white p-[4vw] h-[50%] sm:h-1/4 aspect-square snap-center overflow-hidden lg:h-1/2 lg:w-auto lg:text-2xl">
                    <h2 className="text-4xl font-bold leading-snug mb-4 xl:text-4xl">Our projects speak for themselves.</h2>
                    <p className="text-base">{'Millions of people used products we\'ve built.  And we just got started.'}</p>
                </article>
                {
                    quote.map((item)=>{
                        return (
                            <SquareQuotes key={item.id} title={item.title} subtitle={item.hoverClientHeading} 
                            description={item.hoverDescription} color={item.backgroundColor} primaryColor={item.primaryColor} />
                        )
                    })
                }
            </section>
        </div>
    );
}
type SquareQuotesProps = {
    title: string;
    subtitle: string;
    description: string;
    color?: string;
    clientName?: string;
    primaryColor?: string;
}

const SquareQuotes:React.FC<SquareQuotesProps> = ({title='',subtitle='',description='',color='', primaryColor}):JSX.Element => {
    const backgroundIsLight = isColorLight(color)    
    return (
        <article
            className={`group overflow-hidden h-[50%] sm:h-1/4 aspect-square snap-center lg:h-1/2 lg:w-auto`}
            style={{backgroundColor: color}}
        >
            <div className={`h-full w-full p-4 sm:p-12 lg:p-8 overflow-ellipsis ${backgroundIsLight ? 'text-primary-black' : 'text-primary-white'}`}>
                <p>{description}</p>
                <h3 className="font-bold mt-4 lg:mb-2">{title}</h3>
                <h4>{subtitle}</h4>
            </div>
            <div className={'h-1/4 w-auto hidden bg-primary-black bg-opacity-20 lg:flex justify-end items-center px-8 transition ease-in-out duration-700 group-hover:-translate-y-[100%] group-hover:scale-1 translate-y-[100%] '}>
                <div>
                    <BasicButton theme={backgroundIsLight ? "light" : "dark"} small>View Case</BasicButton>
                </div>
            </div>
        </article>
    )
}

export default Quotes;