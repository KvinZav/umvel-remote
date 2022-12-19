import { HeaderMenuContext } from '@context/headerMenuContext';
import { useContext } from 'react';

function useMenuButton() {
  const context = useContext(HeaderMenuContext);
  if (!context) {
    throw new Error('Context should be called inside of Provider');
  }
  return context;
}

export default useMenuButton;
