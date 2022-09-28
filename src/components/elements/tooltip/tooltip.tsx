import React from "react";

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
      className="relative flex items-center lg:block hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute bg-primary-black bottom-7 right-0 w-[120px] h-[120px]
        	pointer-events-none	
          text-white justify-center
          flex items-center transition-all duration-150 opacity-0"
        ref={createRef}
      >
        <div
          className="bg-black absolute rotate-45"
        />
        <p className="text-primary-white">{tooltipText}</p>
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
