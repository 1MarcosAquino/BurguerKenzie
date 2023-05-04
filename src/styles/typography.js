import { createGlobalStyle } from 'styled-components';

export const Typography = createGlobalStyle`
    .title1 {
        font-size: 1.625rem;
    }
    .title2 {
        font-size: 1.375rem;
    }
    .title3 {
        font-size: 1.125rem;
    }        
    .title4 {
        font-size: 0.875rem;
        color: var(--gray-50);
        font-weight: 400;
    }
`;
