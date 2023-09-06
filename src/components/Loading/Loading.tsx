import BeatLoader from 'react-spinners/BeatLoader';

import theme from '@/styles/theme';

import * as S from './styles';

export const Loading = ({ loading }: { loading: boolean }) => {
  return (
    <>
      <S.Loading>
        <BeatLoader
          color={theme.colors.yellow}
          loading={loading}
          size={10}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </S.Loading>
    </>
  );
};
