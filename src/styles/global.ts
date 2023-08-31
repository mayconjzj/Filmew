import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
* {
  margin: 0;
  padding: 0;
  border-box: box-sizing;
  font-family: 'Montserrat';
}

  ${({ theme }: { theme: any }) => css`
    body {
      color: ${theme.colors.white};
      background-color: ${theme.colors.gray};
    }
  `}
`;

export default GlobalStyles;
