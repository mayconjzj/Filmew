import { createGlobalStyle, css } from 'styled-components';

import { Theme } from '@/models';

const GlobalStyles = createGlobalStyle` 
  ${({ theme }: { theme: Theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Montserrat';
    }

    svg {
      border: none;
    }

    svg:focus {
      outline: none;
    }

    ::-webkit-scrollbar {
      display: none;
    }

    body {
      color: ${theme.colors.white};
      background-color: ${theme.colors.black};
    }
  `}
`;

export default GlobalStyles;
