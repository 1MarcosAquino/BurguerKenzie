import styled from 'styled-components';

export const CartContainer = styled.aside`
    margin: 0 auto;
    width: 100%;
    max-width: 370px;
    min-width: 350px;

    margin-bottom: 10px;

    .cartContainer {
        max-height: 370px;
        overflow-y: auto;
    }

    .headerCart {
        background-color: var(--color-primary);
        color: var(--gray-0);

        min-width: 100%;
        height: 65px;

        display: flex;
        align-items: center;
        justify-content: flex-start;

        padding-left: 15px;
    }

    .CardHollow {
        padding: 50px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        background-color: var(--gray-0);
    }
    span {
        color: var(--gray-50);
    }

    li {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;

        position: relative;

        margin: 15px 0;
    }

    .image {
        width: 70px;
        background-color: var(--gray-20);
        padding: 5px;
        border-radius: 4px;
    }

    .image img {
        width: 100%;
    }

    .remove {
        float: right;
        background-color: transparent;
        border: transparent;
        right: 15px;
        top: 22px;
        color: var(--gray-50);

        position: absolute;
    }
    .total {
        border-top: 2px solid var(--gray-20);
        padding: 15px 5px;
        display: flex;
        justify-content: space-between;
    }

    .valorTotal {
        color: var(--gray-50);
    }

    .removeAll {
        color: var(--gray-50);
        background-color: var(--gray-20);

        height: 60px;
        width: 100%;

        font-weight: 600;
        font-size: 1.2rem;

        border-radius: 4px;
        border: transparent;
    }

    @media (min-width: 1000px) {
        min-width: 250px;
    }
`;
