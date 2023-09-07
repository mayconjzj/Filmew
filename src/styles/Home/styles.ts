import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 35px;
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css``}
`;

export const Movies = styled.section`
  ${({ theme }) => css`
    display: flex;
    overflow-x: auto;
    gap: 5px;
  `}
`;
