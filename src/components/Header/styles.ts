import styled, { css } from "styled-components";

export const Container = styled.header`
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;

  ${({ theme }) => css`
    padding: ${theme.box.padding};
  `}
`;
