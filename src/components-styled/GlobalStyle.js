import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --color-background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(229,229,229,1) 100%);
  --color-dark: #252629;
  --color-light: white;
  --color-accent: #ff1158;
  --color-matched: green;
}
  
body {
  font-family: 'Concert One', cursive;
  display: flex;
  justify-content: center;
  color: var(--color-dark);
  background: var(--color-background);
}

`;

export default GlobalStyle;
