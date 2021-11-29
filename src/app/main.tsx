import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './GlobalStyles';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  document.querySelector('#app')
);
