import PrismButton from "@elements/square-colors"
import { environment } from "@environments/index"
import useScrollOffset from "@hooks/useScrollOffset"
import { HighlightsDesktopPorps } from "@type/modules/highlights"
import React, { useEffect, useRef, useState } from "react"
import useSWR from "swr"
import Image from "@elements/image-component";
import CustomImage from "@elements/image-component/CustomImage"
import Link from "next/link"

const HighlightsDesktop:React.FC<HighlightsDesktopPorps> = ({project,handleNext,handlePrevious, title}):JSX.Element => {
    const isBrowser = typeof window !== "undefined"
    const innerHeight = isBrowser ? window.innerHeight : 0
    const container = useRef<HTMLDivElement>()
    const { scrollOffset } = useScrollOffset()
    const [scaleValue, setScaleValue] = useState<number>()
    const [topPosition, setTopPosition] = useState(Number.MAX_SAFE_INTEGER)
    const { data: event } = useSWR(environment.HOME_URL)

    useEffect(() => {
        const { bottom, top } = container.current.getBoundingClientRect()
        setTopPosition(top)
        setScaleValue(bottom - innerHeight > 0 ? bottom - innerHeight : 0)
    }, [scrollOffset, container])
    if (!event) return null;
    const imgAttributes = project.attributes.image.data.attributes;
    const positionInfo = scaleValue * (2.5 / 10)
    const positionCase = scaleValue * (3.5 / 10)
    const positionImagen = scaleValue * (3.5 / 10)

    return (
        <section className="w-full h-[400vh]" ref={container}>
            <div className="w-full h-screen bg-primary-black sticky top-0 flex justify-center items-center text-4xl text-primary-white">
                <p style={{ opacity: topPosition * -1 / 500 < 1 ? topPosition * -1 / 500 : 2 - (topPosition * -1 / 500), display: topPosition * -1 / 500 >= 2 ? 'none' : 'flex' }}>Let us show you some great cases!</p>
                <div className={`w-full grid grid-cols-4 grid-rows-4 bg-${project.attributes.primaryColor} sticky bottom-0 aspect-square `} style={{ display: topPosition * -1 / 500 <= 2 ? 'none' : 'grid', opacity: (topPosition * -1 / 500) - 2 }}>
                    <div className="col-start-1 col-span-1 row-start-2 row-span-1 aspect-square w-full " style={{ transform: `translateY(${positionCase}px)`, transformOrigin: 'top left' }}>
                        <div className="h-full p-8 bg-secondary-70/50">
                            <h3 className="text-xl font-bold text-primary-white mb-4">{project.attributes.title}</h3>
                            <p className="text-sm font-bold text-primary-white mb-4">{project.attributes.portfolioDataOfInterest}</p>
                            <p className="text-sm font-bold text-primary-white mb-4">{project.attributes.portfolioDescription}</p>
                            <p className="text-sm text-primary-white mb-4">{project.attributes.caseDescription}</p>
                            <button className="border-2 rounded-full px-4 py-1 text-base text-primary-white" >View Case</button>
                        </div>
                    </div>
                    <div className="col-start-1 col-span-1 row-start-3 row-span-1 bg-primary-white w-full aspect-square text-primary-black" style={{ transform: `translateY(${positionInfo}px)`, transformOrigin: 'top left' }}>
                        <div className="h-full flex flex-col justify-center">
                            <div>
                                <h3 className="text-xl font-bold mb-4 mx-8 mt-8">{title}</h3>
                                <p className="font-sm mx-8 mb-4 text-base">Explore more cases:</p>
                            </div>
                            <div className="h-1/2 flex flex-row justify-between items-center px-11">
                                <button className="mr-4" onClick={() => handlePrevious()}>
                                    <CustomImage
                                        src="/assets/icons/chevronLeft.svg"
                                        alt="icon-chevron-left"
                                    />
                                </button>
                                <Link href="/our-work">
                                    <PrismButton>Show more</PrismButton>
                                </Link>
                                <button className="mr-4" onClick={() => handlePrevious()}>
                                    <CustomImage
                                        src="/assets/icons/chevronRight.svg"
                                        alt="icon-chevron-right"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-2 col-span-3 row-start-2 row-span-2 flex justify-center items-center" style={{ transform: `translateY(${positionImagen}px)`, transformOrigin: 'top left', opacity: (topPosition * -1 / 500) - 3 }}>
                        {imgAttributes.url&&<Image url={imgAttributes.url} alt="proyect" layout="intrinsic" height={imgAttributes.height} width={imgAttributes.width}/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HighlightsDesktop