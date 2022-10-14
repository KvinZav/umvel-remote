import { BasicButtonProps } from '@interfaces/button.interface';
import React, { MutableRefObject } from 'react';

//eslint-disable-next-line react/display-name
const BasicButton = React.forwardRef(
  (
    { children, onClick, theme = 'light', small = false }: BasicButtonProps,
    ref: MutableRefObject<any>
  ) => {
    return (
      <button
        ref={ref}
        className={`whitespace-nowrap self-baseline border rounded-full outline-none leading-tight ${
          small ? 'text-s3 py-2 px-4 xl:py-4 xl:px-6' : 'text-s2 px-6 py-4 lg:py-3 lg:px-6'
        } ${
          theme === 'light'
            ? 'lg:hover:bg-primary-black text-primary-black lg:hover:text-primary-white lg:hover:border-primary-black'
            : 'text-primary-white lg:hover:bg-primary-white lg:hover:text-primary-black lg:hover:border-primary-white'
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

export default BasicButton;
