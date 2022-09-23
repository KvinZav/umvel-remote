import { BasicButtonProps } from '@interfaces/button.interface';
import React, { MutableRefObject } from 'react';

//eslint-disable-next-line react/display-name
const BasicButton = React.forwardRef(({children, onClick, theme = 'light'} : BasicButtonProps, ref : MutableRefObject<any>) => {
  return(
    <button
      ref={ref}
      className={`whitespace-nowrap self-baseline border-2 rounded-full py-3 px-6 ${theme === 'light' ? 'lg:hover:bg-primary-black text-primary-black lg:hover:text-primary-white lg:hover:border-primary-black' : 'text-primary-white lg:hover:bg-primary-white lg:hover:text-primary-black lg:hover:border-primary-white'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
})

export default BasicButton;