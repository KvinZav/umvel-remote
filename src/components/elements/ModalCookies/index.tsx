import CustomImage from "@elements/image-component/CustomImage"
import Link from "next/link"
import { FC, useState } from "react"
import { animated, config, useSpring } from "react-spring"

const CookiesModal:FC<{showModal: boolean}> = ({showModal=false }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const childrenStyle = useSpring({
        delay: 0,
        transform: isExpanded ?
            `translateY(100%)` :
            `translateY(0%)`,
        config: config.slow,
    })
    const handleLeave = () => {
        setIsExpanded(true);
        sessionStorage.setItem('consent', 'false');
        // const windowGlobal = typeof window !== 'undefined' && window;
        // windowGlobal.close();
    }
    const handleAccept = () => {
        setIsExpanded(true);
        sessionStorage.setItem('consent', 'true');
    }
    return showModal && (
        <animated.div
            style={childrenStyle} 
            className="isolate z-[999] fixed bottom-0 w-full lg:h-20 min-h-20 md:pr-4 pb-4 md:pb-0 bg-primary-black flex flex-col md:flex-row items-center justify-between text-primary-white"
        >
            <div className="flex items-center">
                <div className="hidden bg-prisma-cookie h-20 aspect-square lg:grid lg:grid-cols-3 lg:grid-rows-3 gap-2 p-2">
                    {[... new Array(9)].map((_, index) => 
                        <div key={''+index} className="w-full h-full bg-primary-black opacity-20"/>
                    )}
                </div>
                <div className="flex flex-col justify-center p-4">
                    <p className="text-xl font-bold text-prisma-cookie">We use cookies</p>
                    <p className="text-base">By clicking “Accept cookies” you consent to the use of the cookies for this website.</p>
                </div>
            </div>
            <div className="flex flex-row items-center md:text-sm lg:text-base ">
                <Link href="about:blank">
                    <button className="border rounded-full px-6 py-3 mr-4 lg:hover:bg-primary-white lg:hover:text-primary-black" onClick={handleLeave}>Leave website</button>
                </Link>
                <button className="border rounded-full px-6 py-3 bg-prisma-cookie text-primary-black lg:hover:bg-[#FAE9D4]" onClick={handleAccept}>Accept cookies</button>
            </div>
        </animated.div>
    )
}

export default CookiesModal