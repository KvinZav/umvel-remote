import { ClientsSubTitle, ClientsText, ClientsTitle } from "@elements/text/TextComponents";
import { environment } from "@environments/index";
import { FETCHER } from '@fetcher/clients';
import { BlockNameEnum } from "@enums/BlockName";

import useSWR from "swr";

export const Clients = () => {    

    const { data: event } = useSWR(environment.HOME_URL)
    if (!event) return null;
    const { title, subtitle, clients } = FETCHER(event, BlockNameEnum.clients)


    return (
        <div className="grid place-content-center py-[104px] md:py-[219px] lg:pt-80 px-[72px] md:px-36">
            <div className="grid gap-y-4 mb-20">
                <ClientsTitle>{title}</ClientsTitle>
                <ClientsSubTitle>{subtitle}</ClientsSubTitle>
            </div>
            <div className="grid grid-cols-2 gap-10 gap-y-8 md:gap-x-6 lg:grid-cols-3 lg:gap-x-60 lg:gap-y-10">
                {clients.data.map(({ id, attributes },index) => (
                    <div key={id}
                        data-info={attributes.name}
                        className="group lg:hover:text-primary-white"
                    >
                            <div 
                                className={(index+1)%3!==0
                                    ?"hidden lg:group-hover:flex bg-cover absolute -z-10 w-96 h-96 -translate-y-80 -translate-x-8"
                                    :"hidden lg:group-hover:flex bg-cover absolute -z-10 w-96 h-96 -translate-y-80 -translate-x-[60%]"
                                }
                                style={{backgroundImage: `url(${attributes.image.data.attributes.url})`}}
                            />
                            <ClientsText>{attributes.name}</ClientsText>
                    </div>
                ))}
            </div>
        </div>
    );
};