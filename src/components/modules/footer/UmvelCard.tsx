import { CustomCard } from "@elements/card/card"
import CustomImage from "@elements/image-component/CustomImage"
import React, { FC } from "react"

const UmvelCard: FC<{ children?: React.ReactNode, darkTheme: boolean }> = ({ children, darkTheme = false }) => {
    return (
        <div className={`grid md:grid-cols-2 ${darkTheme ? 'bg-primary-black' : ''}`}>
            <CustomCard customStyles={`flex flex-col items-center justify-center ${!darkTheme ? 'border border-[#ccc]' : ''}`} borderless>
                <div className={`flex flex-col ${darkTheme ? ' text-primary-white' : ''}`}>
                    {children}
                </div>
            </CustomCard>
            <CustomCard customStyles="relative grid grid-cols-12 h-full" borderless>
                {
                    [...new Array(144)].map((_, n) => <div key={n + ''} className={`border ${darkTheme ? 'border-[#333]' : 'border-[#ccc]'}`} />)
                }
                <div className="absolute w-full p-[24vw] md:p-[12vw]">
                    <CustomImage
                        src={`/assets/images/${darkTheme ? 'umvelLogo.svg' : 'umvelLogoDark.svg'}`}
                        alt={'logo-umvel'}
                        className="w-full" />
                </div>
            </CustomCard>
        </div>
    )
}

export default UmvelCard