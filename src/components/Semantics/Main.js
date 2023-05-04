import styled from 'styled-components';

export const Main = styled.main`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 938px) {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto;

        grid-template-areas:
            'nave aside'
            'section aside'
            'section aside';

        nav {
            grid-area: nave;
        }

        section {
            grid-area: section;
        }

        aside {
            grid-area: aside;
        }
    }
`;
