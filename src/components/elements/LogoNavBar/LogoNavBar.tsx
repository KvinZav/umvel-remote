import type { LogoPorps } from "@type/components/LogoNavBar"
import Image from '@elements/image-component/index';
import Link from "next/link";

const Logo: React.FC<LogoPorps> = ({ imgUrl, alt, caption, url}) => {
    return (
        <Link href="/">
            <a className="flex items-center k">
                <Image url={imgUrl} width='100%' height='100%' alternativeText={alt} layout="intrinsic"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{caption}</span>
            </a>
        </Link>
    )
}
export default Logo;