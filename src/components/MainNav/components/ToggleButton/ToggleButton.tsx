import { FaBars, FaTimes } from 'react-icons/fa';

import { ToggleButtonProps } from '@/models';

import * as S from './styles';

export const ToggleButton = ({
  isOpenMenu = false,
  handleToggleMenu
}: ToggleButtonProps) => {
  const title = isOpenMenu ? 'Fechar' : 'Abrir';

  return (
    <>
      <S.Content onClick={handleToggleMenu} title={title}>
        {isOpenMenu && <FaTimes />}
        {!isOpenMenu && <FaBars />}
      </S.Content>
    </>
  );
};
 