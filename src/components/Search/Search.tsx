import { AiOutlineSearch } from 'react-icons/ai';

import { useSearch } from './hooks';
import * as S from './styles';

export const Search = () => {
  const { handleSearch, searchQuery, setSearchQuery } = useSearch();

  return (
    <>
      <S.Search onSubmit={handleSearch}>
        <S.Icon type="submit">
          <AiOutlineSearch />
        </S.Icon>
        <S.Input
          type="text"
          placeholder="Procurar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </S.Search>
    </>
  );
};
