import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    :root {
        /**
         Color
         */ 
        --main-background-color: black;
        --main-color: #e900ff;
        --reverse-color: #008fff;

        /** 
        Font Style
         */
        // Google Fonts
        // font-family: 'Bangers', cursive;
        // font-family: 'Black Han Sans', sans-serif;
        // font-family: 'Caveat', cursive;
        // font-family: 'Cinzel', serif;
        // font-family: 'DM Serif Display', serif;
         font-family: 'Orbitron', sans-serif;
        // font-family: 'Permanent Marker', cursive;
        // font-family: 'Press Start 2P', cursive;

        --main-text-shadow: 0px 0px 3px #fc00ff;

        /**
        Margin
         */
        --entire-limit: 1000px;
        --main-padding: 20px;

    }

    * {
    box-sizing: border-box;
    }

    ${reset}
    
    
`;

export default GlobalStyles;
