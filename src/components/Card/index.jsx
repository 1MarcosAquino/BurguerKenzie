import { CardContainer } from './style';
import { useEffect } from 'react';

import { request } from '../../request';

export const Card = ({
    toast,
    products,
    setProducts,
    productCart,
    setProductCart,
}) => {
    useEffect(() => {
        (async () => {
            try {
                const response = await request
                    .get('products')
                    .then((res) => res.data);
                setProducts(response);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const addProducts = (currentProduct) => {
        const verify = productCart.some(
            (product) => product.id === currentProduct.id
        );
        if (!verify) {
            setProductCart([...productCart, currentProduct]);
            toast.success('Produto adicionado');
        } else toast.error('OPS! Este produto já foi adicionado');
    };

    const ThisCard = () => {
        return (
            <>
                {products?.map((product) => {
                    const { name, category, price, img, id } = product;
                    return (
                        <li key={id}>
                            <div className="headerCard">
                                <img src={img} alt={name || 'não encontrado'} />
                            </div>
                            <div className="bodyCard">
                                <h3>{name || 'não encontrado'}</h3>
                                <h4 className="title4">
                                    {category || 'não encontrado'}
                                </h4>
                                <p>
                                    {price?.toLocaleString('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL',
                                    })}
                                </p>
                                <button onClick={() => addProducts(product)}>
                                    Adicionar
                                </button>
                            </div>
                        </li>
                    );
                })}
            </>
        );
    };

    return <CardContainer>{ThisCard()}</CardContainer>;
};
