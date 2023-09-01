import { Theme } from '@/models';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle` 
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

  ${({ theme }: { theme: Theme }) => css`
    body {
      color: ${theme.colors.white};
      background-color: ${theme.colors.black};
    }
  `}
`;

export default GlobalStyles;
