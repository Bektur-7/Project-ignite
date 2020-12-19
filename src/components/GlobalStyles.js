import { createGlobalStyle } from "styled-components";



const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background:white;
        }  

    }
    body {
        width: 100%
    }

    h2 {
        font-size: 3rem;
        font-weight: lighter;
        color: #333;
    }

    h3 {
        font-size: 1rem;
        color: #333;
        padding: 20px 1rem;

    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    img {
        display: block;
    }

`;

export default GlobalStyles