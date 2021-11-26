import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }

    :root {
    --black: #000000;
    --yellow-light: #ffd51a;
     --yellow-dark: #f3b90e;
    --grey-dark: #231f20;    }

    body {
  margin: 0;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--black);
}

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export default GlobalStyles;
