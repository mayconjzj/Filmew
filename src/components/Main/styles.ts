import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    padding: ${theme.box.padding};
  `}
`;
