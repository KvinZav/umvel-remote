import { ClientsSubTitle, ClientsText, ClientsTitle } from '@elements/text/TextComponents';
import { environment } from '@environments/index';
import { FETCHER } from '@fetcher/clients';
import { BlockNameEnum } from '@enums/BlockName';
import useSWR from 'swr';
import { useState } from 'react';
import CustomImage from '@elements/image-component/CustomImage';
import { useIsSizeScreen } from '@hooks/useIsSizeScreen';

export const Clients = () => {
  const { data: event } = useSWR(environment.HOME_URL);
  const [isExpanded, setIsExpanded] = useState(false);

  const { isSm } = useIsSizeScreen();

  const formatToXLinesText = (text: string): string => {
    return text.replace(' ', '<br/>');
  }

  const { title, subtitle, clients } = FETCHER(event, BlockNameEnum.clients);

  return (
    <div className="grid place-content-center py-[104px] md:py-[219px] lg:pt-80 lg:pb-[120px] xl:pb-[160px] xl:pt-[360px] px-[72px] md:px-36 cursor-default">
      <div className="grid gap-y-4 mb-20">
        <ClientsTitle>{title}</ClientsTitle>
        <ClientsSubTitle>{subtitle}</ClientsSubTitle>
      </div>
      <div className="grid items-baseline grid-cols-2 gap-10 gap-y-8 md:gap-x-6 lg:grid-cols-3 lg:gap-x-60 lg:gap-y-10">
        {clients.data.map(({ id, attributes }, index) => (
          <div
            key={id}
            data-info={attributes.name}
            className="group lg:hover:text-primary-white flex items-end"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <div
              className={
                (index + 1) % 3 !== 0
                  ? 'hidden lg:block lg:max-h-0 lg:group-hover:max-h-[384px] transition-[max-height] duration-500 origin-bottom overflow-hidden absolute -z-10 w-96 h-96 translate-y-8 -translate-x-8'
                  : 'hidden lg:block lg:max-h-0 lg:group-hover:max-h-[384px] transition-[max-height] duration-500 origin-bottom overflow-hidden absolute -z-10 w-96 h-96 translate-y-8 -translate-x-[60%]'
              }
            >
              <div
                // style={{ ...childrenStyle }}
                className={
                  (index + 1) % 3 !== 0
                    ? 'lg:group-hover:flex bg-cover -z-10 w-96 h-96'
                    : 'lg:group-hover:flex bg-cover -z-10 w-96 h-96'
                }
              >
                <CustomImage
                  src={attributes.image.data.attributes.url}
                  alt={attributes.image.data.attributes.alternativeText}
                  height="100%"
                  width="100%"
                  layout="responsive"
                />
              </div>
            </div>
            <ClientsText>
              {
                isSm  
                ? <span dangerouslySetInnerHTML={{__html: formatToXLinesText(attributes.name)}}></span>
                : attributes.name
              }
              </ClientsText>
          </div>
        ))}
      </div>
    </div>
  );
};
