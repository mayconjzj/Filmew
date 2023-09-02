import { Theme } from '@/models';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
${({ theme }: { theme: Theme }) => css`
  * {
    margin: 0;
    padding: 0;
    border-box: box-sizing;
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
