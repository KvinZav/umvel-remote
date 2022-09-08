import React from "react";
import { environment } from "@environments/index";
import { FETCHER } from '@fetcher/clients';
import { BlockNameEnum } from "@enums/BlockName";
import useSWR from "swr";

const Quotes = (): JSX.Element => {

    const { data: event } = useSWR(environment.HOME_URL)
    if (!event) return null;

    const {quote} = FETCHER(event, BlockNameEnum.quotes)

    return (
        <div className={`h-[180vw] sm:h-[200vw] w-screen overflow-hidden overflow-x-scroll snap-x lg:h-[50vw]`}>
            <section className="h-[180vw] flex flex-col flex-wrap sm:h-[200vw] lg:h-[50vw] snap-x">
                <article className="bg-primary-white p-[4vw] h-[50%] sm:h-1/4 aspect-square border snap-center overflow-hidden lg:h-1/2 lg:w-auto lg:text-2xl">
                    <h2 className="text-4xl font-bold leading-snug mb-4 xl:text-4xl">Our projects speak for themselves.</h2>
                    <p className="text-base">Millions of people used products we’ve built.  And we just got started.</p>
                </article>
                {
                    quote.map((item)=>{
                        return (
                            <SquareQuotes key={item.id} title={item.title} subtitle={item.hoverClientHeading} description={item.hoverDescription} color={item.backgroundColor} />
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
}

const SquareQuotes:React.FC<SquareQuotesProps> = ({title='',subtitle='',description='',color=''}):JSX.Element => {
    return (
        <article className={`bg-${color} group overflow-hidden h-[50%] sm:h-1/4 aspect-square border snap-center lg:h-1/2 lg:w-auto`}>
            <div className="h-full w-full p-9 text-primary-white">
                <p className="mb-4">{description}</p>
                <h3 className="font-bold mb-4">{title}</h3>
                <h4 className="mb-4">{subtitle}</h4>
            </div>
            <div className={'h-1/4 w-auto hidden bg-secondary-70/50 lg:flex justify-end px-9 transition ease-in-out duration-500 group-hover:-translate-y-[100%] group-hover:scale-1 translate-y-[100%] '}>
                <button className=" text-primary-white border-2 px-4 rounded-full my-auto">View Case</button>
            </div>
        </article>
    )
}

export default Quotes;