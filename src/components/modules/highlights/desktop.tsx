import { HighlightsDesktopPorps } from "@types/modules/highlights";
import { useEffect, useState } from "react";
import { useSpring, animated, config , useSpringRef} from 'react-spring';
import SheetAnimation from "./sheetAnimation";

const HighlighsDesktop:React.FC<HighlightsDesktopPorps> = ({project,handlePrevious,handleNext}):JSX.Element => {
    const [startAnimation, setStartAnimation] = useState(false);
    const [overScreen,setOverScreen] = useState(true);
    const refAnimation = useSpringRef();
    const white = useSpring({ 
        from: {
            background: 'rgba(255, 255, 255, 1)',
            opacity: 1,
        },
        to: {
            opacity: .5,
        },
        delay: 3500,
        config:{
            duration: 1000,
        },
        reverse: true,
        ref: refAnimation
    });

    const squares= useSpring({ 
        from: {
            opacity:1,
            y: '-100%'
        },
        to: [{opacity:1},{y: '0'}],
        delay: 4000,
        config:{
            duration: 1000,
        },
        ref: refAnimation
    });
    const info= useSpring({ 
        from: {
            opacity:0,
            y: '100%'
        },
        to: [{opacity:1, y: '0'}],
        delay: 3000,
        config:{
            duration: 1000,
        },
        ref: refAnimation,
        onResolve:()=>setOverScreen(false)
    });

    useEffect (()=>{
        if(startAnimation){
            refAnimation.start();
        }
    },[startAnimation])


    if(project){
        return (
            <div className="w-screen h-[100vw]">
                <animated.div className="bg-cases-viva w-screen h-[100vw] grid grid-cols-4 grid-rows-4 absolute">
                    <div className="col-start-1 col-span-1 row-start-2 row-span-1">
                        <animated.div style={info} className="h-full p-8 bg-secondary-70/50">
                            <h3 className="text-xl font-bold text-primary-white mb-4">{project.title}</h3>
                            <p className="text-sm font-bold text-primary-white mb-4">{project.subtitle}</p>
                            <p className="text-sm text-primary-white mb-4">{project.description}</p>
                            <button className="border-2 rounded-full px-4 py-1 text-primary-white" >View Case</button>
                        </animated.div>
                    </div>
                    <animated.div style={white} className="col-start-1 col-span-1 row-start-3 row-span-1 bg-primary-white">
                        <div className="h-full flex flex-col justify-center ">
                            <div>
                                <h3 className="text-xl font-bold mb-4 mx-8 mt-8">If you can dream it, we ca make it</h3>
                                <p className="font-sm mx-8 mb-4">Explore more cases:</p>
                            </div>
                            <div className="h-1/2 flex flex-row justify-center items-center ">
                                <button className="mr-4" onClick={()=>handlePrevious()}>{'<'}</button>
                                    <animated.div  style={squares} className="black grid grid-cols-4 grid-rows-4 bg-primary-white">
                                        <animated.div className="w-4 h-4 bg-prisma-red"></animated.div>
                                        <animated.div className="w-4 h-4 bg-prisma-organge"></animated.div>
                                        <animated.div className="w-4 h-4 bg-prisma-ellow"></animated.div>
                                        <animated.div className="w-4 h-4 bg-prisma-lemon"></animated.div>
                                        <animated.div className="w-4 h-4 bg-prisma-green"></animated.div>
                                        <animated.div className="w-4 h-4 bg-prisma-aqua"></animated.div>
                                        <animated.div className="w-4 h-4 bg-prisma-blue"></animated.div>
                                        <animated.div className="w-4 h-4 bg-prisma-navy"></animated.div>
                                        <animated.div className="w-4 h-4 bg-prisma-purple"></animated.div>
                                        <animated.div className="w-4 h-4 bg-prisma-pink"></animated.div>
                                        <animated.div className="w-4 h-4 bg-cases-capa"></animated.div>
                                        <animated.div className="w-4 h-4 bg-cases-prevue"></animated.div>
                                        <animated.div className="w-4 h-4 bg-cases-argo"></animated.div>
                                        <animated.div className="w-4 h-4 bg-cases-campaign"></animated.div>
                                        <animated.div className="w-4 h-4 bg-cases-viva"></animated.div>
                                        <animated.div className="w-4 h-4 bg-prisma-red"></animated.div>
                                    </animated.div>
                                <button className="ml-4" onClick={()=>handleNext()}>{'>'}</button>
                            </div>
                        </div>
                    </animated.div>
                    <div className="col-start-2 col-span-3 row-start-2 row-span-2 flex justify-center items-center">
                        <img src="https://picsum.photos/500/1200" alt="proyect" className="h-[80%] rounded-3xl opacity-50 z-0 relative left-12"/>
                        <img src="https://picsum.photos/500/1200" alt="proyect" className="h-[90%] rounded-3xl z-10"/>
                    </div>
                </animated.div>
                {overScreen&&<SheetAnimation  startAnimation={startAnimation} toggle={setStartAnimation}/>}
            </div>
        )
    }
}

export default HighlighsDesktop;