import styled from 'styled-components';

export const CardContainer = styled.ul`
    display: flex;
    width: 100%;
    overflow-x: auto;
    gap: 15px;

    li {
        min-width: 250px;
        max-width: 300px;
        max-height: 350px;

        display: flex;
        flex-direction: column;

        border: 2.5px solid var(--gray-20);
        border-radius: 4px;
    }
    .headerCard {
        width: 100%;
        height: 50%;

        display: flex;
        justify-content: center;

        background-color: var(--gray-0);
        align-self: center;
    }

    img {
        width: 50%;
    }

    .bodyCard {
        display: flex;
        flex-direction: column;
        gap: 15px;

        padding: 10px;
    }

    p {
        color: var(--color-primary);
        font-weight: 600;
    }

    button {
        align-self: flex-start;
        background-color: var(--color-primary);
        color: var(--gray-0);

        padding: 12px 18px;
        margin: 4px;

        border: green;
        border-radius: 8px;
    }

    @media (min-width: 798px) {
        display: grid;
        grid-template-columns: auto auto;
    }
    @media (min-width: 1200px) {
        grid-template-columns: auto auto auto;
    }
`;
