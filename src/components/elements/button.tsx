import { BasicButtonProps } from '@interfaces/button.interface';
import React from 'react';

const BasicButton = ({children, onClick, theme = 'light'} : BasicButtonProps) => {
  return(
    <button
      className={`self-baseline border-2 rounded-full py-3 px-6 ${theme === 'light' ? 'lg:hover:bg-primary-black text-primary-black lg:hover:text-primary-white lg:hover:border-primary-black' : 'text-primary-white lg:hover:bg-primary-white lg:hover:text-primary-black lg:hover:border-primary-white'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default BasicButton;