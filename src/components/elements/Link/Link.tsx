import React from 'react';
import type { LinkProps } from '@type/components/Link';
import Link from 'next/link';

const customLink: React.FC<LinkProps> = ({url, name, onClick}) => {
    
    return (
        <Link href={url}>
            <a onClick={onClick} className={`pr-4 pl-3`}>{name}</a>
        </Link>
    )
}
export default customLink;
