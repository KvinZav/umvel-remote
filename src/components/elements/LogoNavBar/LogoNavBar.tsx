import type { LogoPorps } from "@type/components/LogoNavBar"
import Image from '@elements/image-component/index';
import Link from "next/link";

const Logo: React.FC<LogoPorps> = ({ imgUrl, alt, caption, url}) => {
    return (
        <Link href={url || '/'}>
            <a className="flex items-center">
                <Image url={imgUrl} width='100%' height='100%' alt={alt} layout="intrinsic" className="bg-primary-white bg-clip-text"/>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{caption}</span>
            </a>
        </Link>
    )
}
export default Logo;