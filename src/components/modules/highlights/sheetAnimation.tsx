import { useSpring, animated, config , useSpringRef} from 'react-spring';
import useWindowSize from '@hooks/useWindowSize';
import { useEffect } from 'react';

const  SheetAnimation = ({startAnimation,toggle}) => {

    const refAnimation = useSpringRef();
    const size = useWindowSize();

    const squares = useSpring(
        { from: { x: 0 , y: 0 ,opacity:1}, to: [{ x: -((size.width/8)*3) , y: ((size.width/8)*1) },{opacity: .9},{opacity: 0}],
        config: {
            mass:1,
            tension: 20,
            friction: 100,
            duration: 1000,
        },
        ref: refAnimation

    })

    const section = useSpring({ 
        from: {
            background: 'rgba(0, 0, 0, 0)',
        },
        to:{background: 'rgba(0, 0, 0, 1)'},
        delay: 2000,
        config:{
            duration: 2000,
        },
        reverse: true,
        ref: refAnimation
    })
    const addMargin = useSpring({
        from: {
            margin: '0rem',
            opacity: 1,
        },
        to: [{margin: '1.5rem'},{margin: '0rem'},{opacity: 0}],
        delay: 1000,
        config:{
            duration: 1000,
        },
        ref: refAnimation
    })

    useEffect(()=>{
        if(startAnimation){
            refAnimation.start();
        }
    },[startAnimation])

    return (
        <animated.div style={section} onMouseOver={()=>toggle(true)} className="w-screen h-[100vw] flex justify-center items-center z-30 absolute">
                <animated.div  style={squares} className="black grid grid-cols-4 grid-rows-4 bg-primary-white">
                    <animated.div style={addMargin} className="w-4 h-4 bg-prisma-red"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-prisma-organge"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-prisma-ellow"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-prisma-lemon"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-prisma-green"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-prisma-aqua"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-prisma-blue"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-prisma-navy"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-prisma-purple"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-prisma-pink"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-cases-capa"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-cases-prevue"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-cases-argo"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-cases-campaign"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-cases-viva"></animated.div>
                    <animated.div style={addMargin} className="w-4 h-4 bg-prisma-red"></animated.div>
                </animated.div>
        </animated.div>
    )
}

export default SheetAnimation