import styled, { css } from "styled-components";

export const Container = styled.header`
  height: 50px;
  display: flex; 
  justify-content: space-between;
  align-items: center;

  ${({ theme }: { theme: any }) => css`
    background-color: rgba(0, 0, 0, 0);
    padding: ${theme.box.padding};
  `}
`;
