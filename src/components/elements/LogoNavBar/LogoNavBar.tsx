import type { LogoPorps } from "@type/components/LogoNavBar"

const Logo: React.FC<LogoPorps> = ({ imgUrl, alt, caption, url }) => {
    return (
        <a href={url ? url : '#'} className="flex items-center">
            <img src={imgUrl} className="mr-3 h-6 sm:h-9" alt={alt} />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{caption}</span>
        </a>
    )
}
export default Logo;