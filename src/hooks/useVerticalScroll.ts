import { useEffect, useState } from "react";

const useVerticalScroll = (offset:number) => {
    const [scroll, setScroll] = useState(false);
    useEffect(function onFirstMount() {
        const changeNavbar = () => {
            if (window.scrollY>=offset) {
                setScroll(false);
            }else{
                setScroll(true);
            }
        }
        window.addEventListener("scroll", changeNavbar);
        return () => {
            window.removeEventListener("scroll",changeNavbar);
        }
    }, [offset]);

    return (
        scroll
    )
} 
export default useVerticalScroll;