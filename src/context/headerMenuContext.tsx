import React, { createContext, useState } from 'react';

const initialState = {
  mainMenuVisible: false,
  handleToggleMenu: (value: boolean) => null,
};

export const HeaderMenuContext = createContext(initialState);

export function HeaderMenuContextProvider(props) {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleMenu = (value) => setIsVisible(value);

  const value = {
    handleToggleMenu,
    mainMenuVisible: isVisible,
  };

  return <HeaderMenuContext.Provider value={value} {...props} />;
}
