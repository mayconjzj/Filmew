import styled from 'styled-components';

import theme from '@/styles/theme';

export const Movies = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  justify-content: space-around;
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.span`
  color: ${theme.colors.yellow};
`;

export const SearchName = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;
