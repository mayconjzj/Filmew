import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
  
  `}
`;

export const Movies = styled.section`
  ${({ theme }) => css`
    display: flex;
    overflow-x: auto;
    gap: 5px;
  `}
`;

export const Category = styled.h2`
  ${({ theme }) => css`
    font-size: 18px;
    font-weight: 600;
  `}
`;
