import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const CardMovie = styled.article`
  display: flex;
  height: 240px;
  position: relative;
  box-shadow: ${theme.box.shadow};
  transition: ${theme.transition.fast};
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    border: 2px solid white;
  }
`;
