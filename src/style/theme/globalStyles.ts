import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
*,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    background: #fff;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export default GlobalStyle
