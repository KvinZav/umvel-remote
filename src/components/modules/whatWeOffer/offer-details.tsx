import useWindowSize from "@hooks/useWindowSize";
import { Close, ArrowBack, ArrowForward, ArrowDownwardRounded } from '@mui/icons-material';
import Logo from '@elements/LogoNavBar/LogoNavBar';
import Icon from '@elements/Icon';
import { IconNameType } from '@type/components/Icons.type';
import useMediaQuery from "@hooks/useMediaQuery";
import { Card } from "@elements/card/card";
import PrismButton from "@elements/square-colors";
import { FC, useRef } from "react";
import smoothscroll from 'smoothscroll-polyfill';
import { DetailHighlightsProps } from "@type/modules/offers";

const OfferDetails = ({ detail, onPreviousClick, onNextClick, onClose, servicesSelected }) => {

  const highlightsContainerRef = useRef<HTMLDivElement>(null)
  
  const { height } = useWindowSize()

  const { id, name, description, valuePropositions, icon, cases } = detail

  const dark = servicesSelected.includes(id)

  const handleSmoothScroll = () => {
    smoothscroll.polyfill();
    highlightsContainerRef.current.scrollIntoView({ behavior: 'smooth', block: "start" })    
  }

  return (
    <div className={`z-[99] w-full h-[100vh] ${dark ? "bg-primary-black" : "bg-primary-white"} fixed top-0 overflow-hidden overflow-y-scroll`}>
      <section style={{ minHeight: height - 32 }}>
      <section className={`z-50 flex justify-between px-8 mt-6 ${dark ? "text-primary-white" : "text-primary-black"}`}>
        <div className="w-8 h-8">
          {dark ?
            <Logo imgUrl={`/assets/images/umvelLogo.svg`} alt={'Logo Umvel'} /> :
            <Logo imgUrl={`/assets/images/umvelLogoDark.svg`} alt={'Logo Umvel'} />
          }
        </div>
        <button onClick={onClose}>
          <Close />
        </button>
      </section>
        <section className="relative flex w-full px-7 lg:px-32 md:pt-10 lg:pt-12 flex-grow">
          <button
            className={`absolute top-0 left-3 md:left-8 lg:left-[134px] h-full lg:opacity-30 lg:hover:opacity-100 ${dark ? "text-primary-white" : "text-primary-black"}`}
            onClick={onPreviousClick}
          >
            <ArrowBack />
          </button>
          <div className="flex w-full flex-col items-center px-9">
            <div className="md:px-24 lg:px-0 lg:max-w-[640px] space-y-12">
              <div className={`flex space-x-2 ${dark ? "text-primary-white" : "text-primary-black"}`}>
                <Icon name={icon as IconNameType} size={32} />
                <h1 className={`text-2xl md:text-[28px] leading-tight font-bold`}>{name}</h1>
              </div>
              <p className={`${dark ? "text-primary-white" : "text-primary-black"}`}>{description}</p>
              <ul className="flex flex-wrap">
                {
                  valuePropositions?.map((valueItem, valueIndex) =>
                    <li
                      className={`w-full lg:w-auto lg:flex-[1_1_50%] mb-4 before:content-['•'] before:mr-2 ${dark ? "text-primary-white" : "text-primary-black"}`}
                      key={"value-" + valueIndex}
                    >
                      {valueItem}
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
          <button
            className={`absolute z-10 top-0 right-3 md:right-8 lg:right-[134px] h-full lg:opacity-30 lg:hover:opacity-100 ${dark ? "text-primary-white" : "text-primary-black"}`}
            onClick={onNextClick}
          >
            <ArrowForward />
          </button>
        </section>
        <section className="flex flex-col items-center">
          <div className="w-32 h-32 flex items-center justify-center mb-4">
            <PrismButton onClick={handleSmoothScroll}>
              <p className={`${dark ? "text-primary-white" : "text-primary-black"}`}>
                <ArrowDownwardRounded />
              </p>
            </PrismButton>
          </div>
          <p className={`${dark ? "text-primary-white" : "text-primary-black"} mb-10`}>See related projects</p>
        </section>
      </section>
      <section ref={highlightsContainerRef} className="w-full">
        <ServiceDetailHighlights cases={cases} />
      </section>
    </div>
  )
}

export default OfferDetails

const ServiceDetailHighlights : FC<DetailHighlightsProps> = ({cases}) => {

  const desktop = useMediaQuery('(min-width: 1024px)');
  const tablet = useMediaQuery('(max-width: 1023px) and (min-width: 640px)');
  
  return (
    <section className="md:grid md:grid-cols-2 lg:grid-cols-3">
      {
        cases.slice(0, tablet ? 4 : 3).map((caseItem, caseIndex) => {
          const { title, caseDescription, primaryColor, image } = caseItem.data.attributes

          return (
            <Card
              styles={{
                textPositionVertical: 'start',
                textPositionHorizontal: 'start',
                bg: primaryColor,
                textColor: 'black',
                textStyles: {
                  height: 'paragraph',
                  align: 'left'
                },
                direction: tablet ? "col" : "col-reverse"
              }}
              text={title}
              description={caseDescription}
              imageUrl={image.data.attributes.url}
              showButton={!desktop}
              caseId={caseItem.data.id}
              key={"case-"+caseItem.data.id}
            />
          )
        })
      }
    </section>
  )
}
