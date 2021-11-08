import { createGlobalStyle } from 'styled-components';

export const colors = {
  brandColorPrimary: '#1B31A8',
  brandColorSecondary: '#0079FF',
  blueGray10: '#F4F8FA',
  blueGray50: '#E9EEF2',
  blueGray400: '#708797',
  blueGray600: '#4D6475',
  blueGray900: '#1E2A32',
  white: '#FFF',
};

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      outline: 0;
      color: inherit;
    }

    body, html {
      font-family: 'Work Sans', sans-serif;
      font-size: 10px;
      background: ${colors.blueGray10};
    }
`;

export default GlobalStyle;
