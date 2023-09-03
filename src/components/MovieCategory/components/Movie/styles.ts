import styled, { css } from 'styled-components';

export const CardMovie = styled.article`
  ${({ theme }) => css`
    display: flex;
    height: 240px;
    position: relative;
    box-shadow: ${theme.box.shadow};
  `}
`;
