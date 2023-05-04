import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: auto;
    padding: 15px 0;
    background-color: var(--gray-0);

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        margin: auto;
    }

    .container div + div {
        position: relative;
    }

    input {
        width: 350px;
        height: 52px;
        border: 2px solid var(--gray-20);
        border-radius: 8px;
        text-indent: 20px;
    }

    button {
        top: 2.5px;
        left: 245px;
        position: absolute;

        background-color: var(--color-primary);
        color: var(--gray-0);

        padding: 12px 18px;
        margin: 4px;

        border: green;
        border-radius: 8px;
    }

    @media (min-width: 498px) {
        .container {
            flex-direction: row;
            justify-content: space-between;
        }
    }
`;
