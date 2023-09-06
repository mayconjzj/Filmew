import styled, { css } from 'styled-components';
import theme from '@/styles/theme';

export const Content = styled.a<{ isActive: boolean }>`
  ${({ isActive }) => css`
    text-decoration: none;
    color: ${isActive ? theme.colors.yellow : theme.colors.white};
    padding: ${theme.box.padding};
    transition: color ${theme.transition.default};

    &:hover {
      color: ${theme.colors.yellow};
      cursor: pointer;
    }
  `}
`;
