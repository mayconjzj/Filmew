import { useCallback, useState } from 'react';

export const useNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsOpenMenu((prevState) => !prevState);
  }, [isOpenMenu]);

  return {
    isOpenMenu,
    handleToggleMenu
  };
};
