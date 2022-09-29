import CustomImage from "@elements/image-component/CustomImage"
import { useState } from "react"
import { animated, config, useSpring } from "react-spring"

const CookiesModal = ({refWindow,showModal=false }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const childrenStyle = useSpring({
        delay: 0,
        transform: isExpanded ?
            `sccale(0)` :
            `scale(1)`,
        config: config.wobbly,
    })
    const handleLeave = () => {
        setIsExpanded(true);
        sessionStorage.setItem('consent', 'false');
        refWindow.close();
    }
    const handleAccept = () => {
        setIsExpanded(true);
        sessionStorage.setItem('consent', 'true');
    }
    return showModal && (
        <animated.div
            style={childrenStyle} 
            className="isolate z-[999] fixed bottom-0 w-full min-h-20 md:pr-4 bg-primary-black flex flex-col md:flex-row items-center justify-between text-primary-white"
        >
            <div className="flex items-center">
                <div className="hidden bg-prisma-cookie h-20 aspect-square lg:flex justify-center items-center">
                    <CustomImage
                        src={"/assets/images/menu-icon.svg"}
                        alt="menu"
                        width="60"
                        height="60"
                        className="opacity-50"
                    />
                </div>
                <div className="flex flex-col justify-center p-4">
                    <p className="text-xl font-bold text-prisma-cookie">We use cookies</p>
                    <p className="text-base">By clicking “Accept cookies” you consent to the use of the cookies for this website.</p>
                </div>
            </div>
            <div className="flex flex-row items-center md:text-sm lg:text-base ">
                <button className="border rounded-full px-6 py-3 mr-4" onClick={handleLeave}>Leave website</button>
                <button className="border rounded-full px-6 py-3 bg-prisma-cookie text-primary-black" onClick={handleAccept}>Accept cookies</button>
            </div>
        </animated.div>
    )
}

export default CookiesModal