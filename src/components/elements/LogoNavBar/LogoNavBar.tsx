import type { LogoPorps } from "@type/components/LogoNavBar"
import Image from '@elements/Image';

const Logo: React.FC<LogoPorps> = ({ imgUrl, alt, caption, url}) => {
    return (
        <a href={url ? url : '#'} className="flex items-center">
            <Image url={imgUrl} width='100%' height='100%' alternativeText={alt}/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{caption}</span>
        </a>
    )
}
export default Logo;