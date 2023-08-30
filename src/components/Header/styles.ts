import styled, { css } from "styled-components";

export const Container = styled.header`
  padding: 10px 15px;
  height: 50px;
  display: flex; 
  justify-content: space-between;
  align-items: center;

  ${({ theme }: { theme: any }) => css`
    background-color: ${theme.colors.ctn};
  `}
`;
