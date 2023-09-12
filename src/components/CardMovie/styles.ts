import styled from 'styled-components';

import theme from '@/styles/theme';

export const CardMovie = styled.div`
  display: flex;
  min-width: 160px;
  max-width: 160px;
  position: relative;
  box-shadow: ${theme.box.shadow};
  transition: ${theme.transition.fast};
  cursor: pointer;

  box-sizing: border-box;
  &:hover {
    border: 2px solid white;
  }
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const NoPoster = styled.div`
  margin: auto;
`;
