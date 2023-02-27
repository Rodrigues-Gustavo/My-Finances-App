import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * { 
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        height: 100vh;
        background-color: #f2f2f2;
    }
`;