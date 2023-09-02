import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    padding: ${theme.box.padding};
  `}
`;
