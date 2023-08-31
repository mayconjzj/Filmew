import styled, { css } from 'styled-components';

export const ListItem = styled.li`
  ${({ theme }: { theme: any }) => css`
    padding: ${theme.box.padding};
    transition: color ${theme.transition.default};

    &:hover {
      color: ${theme.colors.yellow};
    }
  `}
`;
