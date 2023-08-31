import styled, { css } from 'styled-components';

export const Content = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    padding: ${theme.box.padding};
    transition: color ${theme.transition.default};

    &:hover {
      color: ${theme.colors.yellow};
      cursor: pointer;
    }
  `}
`;
