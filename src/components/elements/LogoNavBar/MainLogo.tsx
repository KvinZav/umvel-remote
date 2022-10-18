import Link from 'next/link';
import React from 'react';

const MainLogo = () => {
  return(
    <Link href="/">
      <a>
        <img
          src="/assets/images/ntt-umvel-logo.svg"
          className="
            fixed
            top-4 left-4 w-[155] h-8
            md:top-6 md:left-6
            lg:top-8 lg:left-8
            xl:top-11 xl:left-8 xl:w-[224px] xl:h-[46px]
            z-[99]"
            alt="Umvel an NTT Data Company"
        />
      </a>
    </Link>
  )
}

export default MainLogo;