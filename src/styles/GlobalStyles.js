import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        font-family: sans-serif;
        color: #333;
        margin: 0;
    }

    header {
        text-align: center;
        font-size: 30px;
        font-style: italic;
        
        a {
            color: inherit;
            text-decoration: none;
        }
    }
`;

export default GlobalStyles;
