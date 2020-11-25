import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
      background-color: #282c34;
      text-align: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --maxWidth: 1260px;
    --white: #fff;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  body{
    margin: 0;
    padding: 0;
    h1{
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
      background-position: center;
    }
    h2{
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--white);
    }
    p{
      font-size: 1rem;
      color: var(--white);
    }
    ul{
       li{
           list-style:none;
       } 
    }
  }
`