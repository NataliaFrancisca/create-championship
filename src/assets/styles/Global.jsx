import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --pink: #F94892;
        --orange: #FF7F3F;
        --yellow: #FBDF07;
        --blue: #89CFFD;
        --white: #FEFBF6;
        --title: 'Bree Serif', serif;
        --subtitle: 'Sanchez', serif;
    }

    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
    }

    body, label, input, span, p, button {
        /* font-family: 'Open Sans', sans-serif; */
        font-family: var(--subtitle);
    }

    body{
        background-color: var(--white);
    }

`