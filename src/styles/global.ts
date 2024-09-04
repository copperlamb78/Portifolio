import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colors.background};
        font-size: 1rem;
        color: ${props => props.theme.colors.bw};
        font-family: "Bebas Neue", sans-serif;
        transition: background-color 0.3s;
    }
`