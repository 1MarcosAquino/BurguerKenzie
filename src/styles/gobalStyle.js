import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    :root{
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;
        
        --gray-100: #333333;
        --gray-50: #828282;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;

        --color-negative: #E60000;
        --color-warning: #FFCD07;
        --color-success: #168821;
        --color-information: #155BCB;
        
    }

    .container {
        margin: auto;
        width:90%;
    }
    
    body{
        font-family:'inter', sans-serif ;
    }

    button {
        cursor: pointer;
    }

    li{
        list-style: none;
    }

    @media (min-width:1000px){
            .container {
        margin: auto;
        width:80%;
    }
    }
`;
