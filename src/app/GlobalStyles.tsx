import { createGlobalStyle } from 'styled-components';
import CocoGooseRegular from '../assets/fonts/Cocogoose-Pro-Regular.ttf';
import CocoGooseLight from '../assets/fonts/Cocogoose-Pro-Light.ttf';

const GlobalStyles = createGlobalStyle`
    *,*::before,*::after {
        box-sizing: border-box;
    }

    
    :root {
    --black: #000000;
    --white: #ffffff;
    --yellow-light: #ffd51a;
    --yellow-dark: #f3b90e;
    --grey-dark: #231f20;    }

    @font-face {
        font-family: CocoGooseRegular;
        src: url(${CocoGooseRegular});
    
    }
    @font-face {
        font-family: CocoGooseLight;
        src: url(${CocoGooseLight});
    }

    body {
  margin: 0;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'CocoGooseRegular', 'CocoGooseLight',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--black);
  color: var(--white);

}

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

export default GlobalStyles;
