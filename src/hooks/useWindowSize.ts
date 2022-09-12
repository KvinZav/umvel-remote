import { useState, useEffect } from "react";
// Define general type for useWindowSize hook, which includes width and height
interface Size {
    width: number | undefined;
    height: number | undefined;
    screen: 'sm'|'md'|'lg'|'xl'|'2xl'|undefined,
}
// Hook
function useWindowSize(): Size {
    const [windowSize, setWindowSize] = useState<Size>({
        width: undefined,
        height: undefined,
        screen: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            const width = window.innerWidth;
            const height = window.innerHeight;
            if(width < 640){
                setWindowSize({
                    width,
                    height,
                    screen: 'sm',
                });
            }
            else if(width < 768){
                setWindowSize({
                    width,
                    height,
                    screen: 'md',
                });
            }
            else if(width < 1024){
                setWindowSize({
                    width,
                    height,
                    screen: 'lg',
                });
            }
            else if(width < 1280){
                setWindowSize({
                    width,
                    height,
                    screen: 'xl',
                });
            }else if (width >= 1280){
                setWindowSize({
                    width,
                    height,
                    screen: '2xl',
                });
            }
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export default useWindowSize;