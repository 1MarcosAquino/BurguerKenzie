import styled from 'styled-components';

export const NavBar = styled.nav`
    width: 100%;
    margin: auto;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5px;

    h2 {
        font-size: 1.43rem;
    }

    div {
        width: 350px;
        display: flex;
        gap: 20px;
    }

    button {
        background-color: var(--color-primary);
        color: var(--gray-0);

        padding: 12px 18px;

        border: green;
        border-radius: 8px;
        height: 39px;
    }

    span {
        color: var(--gray-50);
    }

    @media (min-width: 560px) {
        div {
            width: 50%;
            height: 50px;
        }
        h2 {
            margin-left: 11%;
            font-size: 1.23rem;
        }
        flex-direction: row;
        justify-content: space-between;
    }

    @media (min-width: 777px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;
