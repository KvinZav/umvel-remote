import type { LogoPorps } from "@type/components/LogoNavBar"
import Image from 'next/image'

const Logo: React.FC<LogoPorps> = ({ imgUrl, alt, caption, url }) => {
    return (
        <a href={url ? url : '#'} className="flex items-center">
            <Image src={imgUrl} width='100%' height='100%' alt={alt}/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{caption}</span>
        </a>
    )
}
export default Logo;