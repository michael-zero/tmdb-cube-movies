import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
      --max-width: 1100px;
      --font-mono: 'Lato', 'Abel';
      --primary-color: #116193;
      --secondary-color: #00E8E4;
      --terciary-color: #EBEBEB;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
  }

  hr {
    opacity: 0.3;
    cursor: pointer;
  }

  html, body, #__next {
    height: 100%;
  }


  body {
    padding: 0;
    margin: 0;
  }



`

export default GlobalStyles
