import React from "react"
import { LinkProps } from "@types/components/Link";
import Link from "next/link"
const customLink: React.FC<LinkProps> = ({url, name,}) => {
    
    return (
        <Link href={url}>
            <a className={`block pr-4 pl-3 hover:text-zinc-400`}>{name}</a>
        </Link>
    )
}
export default customLink;