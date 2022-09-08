import { BasicButtonProps } from '@interfaces/button.interface';
import React from 'react';

const BasicButton = ({children, onClick, theme = 'light'} : BasicButtonProps) => {
  return(
    <button
      className={`self-baseline border-2 rounded-full py-3 px-6 ${theme === 'light' ? 'hover:bg-primary-black text-primary-black hover:text-primary-white hover:border-primary-black' : 'text-primary-white hover:bg-primary-white hover:text-primary-black hover:border-primary-white'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default BasicButton;