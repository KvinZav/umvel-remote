import React from 'react';

export const Tooltip = ({ children, tooltipText }) => {
  const createRef: any = React.createRef();

  function handleMouseEnter() {
    createRef.current.style.opacity = 1;
  }
  function handleMouseLeave() {
    createRef.current.style.opacity = 0;
  }

  return (
    <div
      className="relative items-center lg:block hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute bg-primary-black bottom-7 right-0 w-[120px] h-[120px]
        	pointer-events-none	
          text-white justify-center
          flex items-center max-h-0 group-hover:max-h-[120px] transition-[max-height] duration-500 origin-bottom"
        ref={createRef}
      >
        <div className="bg-black absolute rotate-45" />
        <p className="text-primary-white">{tooltipText}</p>
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
