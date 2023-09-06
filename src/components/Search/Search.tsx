import { AiOutlineSearch } from 'react-icons/ai';

import * as S from './styles';

export const Search = () => {
  return (
    <>
      <S.Search>
        <S.Icon htmlFor="search">
          <AiOutlineSearch />
        </S.Icon>
        <S.Input type="text" placeholder="Procurar..." />
      </S.Search>
    </>
  );
};
