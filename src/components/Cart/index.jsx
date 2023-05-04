import { CartContainer } from './style';
import { useEffect, useState } from 'react';

export const Cart = ({ productCart, setProductCart, toast }) => {
    const [soma, setSoma] = useState(0);

    useEffect(() => {
        const somaTotal = productCart?.reduce(
            (acc, curr) => acc + curr.price,
            0
        );
        setSoma(somaTotal);
    }, [soma, productCart]);

    const removeProducts = (name) => {
        toast.info('Produto removido.');
        const myProducts = productCart?.filter((product) => {
            if (product.name !== name) return product;
        });
        setProductCart(myProducts);
    };

    const removeAllProducts = () => {
        toast.info('Todos os produtos foram removidos');
        setProductCart([]);
    };

    const CartHeader = () => {
        return (
            <div className="headerCart">
                <h3 className="title3">Carrinho de compras</h3>
            </div>
        );
    };

    const CartWithItens = () => {
        return productCart?.map((product) => {
            const { id, img, name, category } = product;

            return (
                <li key={id}>
                    <div className="image">
                        <img src={img} alt={name} />
                    </div>

                    <div>
                        <h3>{name}</h3>
                        <h4 className="title4">{category}</h4>
                    </div>
                    <button
                        className="remove"
                        onClick={() => removeProducts(name)}
                    >
                        Remover
                    </button>
                </li>
            );
        });
    };

    const CartHollow = () => {
        return (
            <li className="CardHollow">
                <h3>Sua Sacola está vazia</h3>
                <span>Adicione itens</span>
            </li>
        );
    };

    const CartFooter = () => {
        return (
            <div className="footerCart">
                <div className="total">
                    <h3 className="title3">Total</h3>
                    <h3 className="valorTotal">
                        {soma?.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })}
                    </h3>
                </div>
                <button
                    className="removeAll"
                    onClick={() => removeAllProducts()}
                >
                    Remove Todos
                </button>
            </div>
        );
    };

    return (
        <CartContainer>
            {CartHeader()}
            <ul className="cartContainer">
                {productCart.length < 1 ? CartHollow() : CartWithItens()}{' '}
            </ul>
            {productCart.length < 1 ? null : CartFooter()}
        </CartContainer>
    );
};
