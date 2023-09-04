import styled, { css } from 'styled-components';

export const Category = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

export const Movies = styled.section`
  display: flex;
  overflow-x: auto;
  gap: 3px;
`;

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: ${theme.transition.default};

    &:hover {
      transform: scale(1.01);
    }
  `}
`;
