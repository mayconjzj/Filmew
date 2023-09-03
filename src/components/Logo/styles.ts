import styled, { css } from "styled-components";

export const Logo = styled.a`
   font-weight: 900;
   font-size: 2rem;
`;

export const W = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.yellow};
  `}
`;

export const Container= styled.div`
  
`;