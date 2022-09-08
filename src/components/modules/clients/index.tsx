import { ClientsSubTitle, ClientsText, ClientsTitle } from "@elements/text/TextComponents";
import { environment } from "@environments/index";
import { FETCHER } from '@fetcher/clients';
import { BlockNameEnum } from "@enums/BlockName";

import useSWR from "swr";
import { animated, AnimatedProps, useSpringRef, useTransition, useSpring } from "react-spring";
import { CSSProperties, useCallback, useEffect, useState } from "react";

export const Clients = () => {    

    const { data: event } = useSWR(environment.HOME_URL)
    if (!event) return null;

    const handleMouseOver = (event) => {
        console.log(event.currentTarget.dataset.info);
    };


    const { title, subtitle, clients } = FETCHER(event, BlockNameEnum.clients)


    return (
        <div className="grid place-content-center py-[104px] md:py-[219px] lg:py-80 px-[72px] md:px-36">
            <div className="grid gap-y-4 mb-20">
                <ClientsTitle>{title}</ClientsTitle>
                <ClientsSubTitle>{subtitle}</ClientsSubTitle>
            </div>
            <div className="grid grid-cols-2 gap-10 gap-y-8 md:gap-x-6 lg:grid-cols-3 lg:gap-x-60 lg:gap-y-10">
                {clients.data.map(({ id, attributes }) => (
                    <div key={id}
                        data-info={attributes.name}
                        onMouseEnter={handleMouseOver}
                    >
                        <ClientsText>{attributes.name}</ClientsText>
                    </div>
                ))}
            </div>
        </div>
    );
};