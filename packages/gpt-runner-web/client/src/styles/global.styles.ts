import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  #root {
      width: 100%;
      height: 100%;
  }
  body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      user-select: none;
      -webkit-user-select: none;
      -webkit-user-drag: none;
      background: var(--background);
      color: var(--foreground);
      font-family: var(--font-family);
  }

  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }
`