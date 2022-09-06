import { BasicButtonProps } from '@interfaces/button.interface';
import React from 'react';

const BasicButton = ({children, onClick, theme = 'light'} : BasicButtonProps) => {
  return(
    <button
      className={`self-baseline border-2 rounded-full py-3 px-6 ${theme === 'light' ? 'bg-primary-white hover:bg-primary-black text-primary-black hover:text-primary-white' : 'text-primary-white bg-primary-black hover:bg-primary-white hover:text-primary-black'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default BasicButton;