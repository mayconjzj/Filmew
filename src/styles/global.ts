import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
      url('/fonts/montserrat-v15-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
      url('/fonts/montserrat-v15-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
      url('/fonts/montserrat-v15-latin-600.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    border-box: box-sizing;
    font-family: 'Montserrat';
  }

  ${({ theme }: { theme: any }) => css`
    body {
      color: ${theme.colors.font};
      background-color: ${theme.colors.bg};
    }
  `}
`;

export default GlobalStyles;
