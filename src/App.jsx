import { GlobalStyle, ResetStyle, Typography } from './styles';
import { Header, Card, Navbar, Cart, Main } from './components';
import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState('');
    const [productCart, setProductCart] = useState([]);

    useEffect(() => each(), [search]);

    function each() {
        const product = products.filter((product) => {
            const productName = product?.name
                .toLowerCase()
                .includes(search.toLowerCase());

            const productCategory = product?.category
                .toLowerCase()
                .includes(search.toLowerCase());

            if (productName || productCategory) return product;
        });
        setFilter(product);
    }

    return (
        <div className="App">
            <ResetStyle />
            <Typography />
            <GlobalStyle />
            <Header
                each={each}
                search={search}
                setSearch={setSearch}
                setProducts={setProducts}
            />

            <ToastContainer />
            <Main className="container">
                <Navbar
                    search={search}
                    setSearch={setSearch}
                    products={products}
                />
                <section>
                    <Card
                        toast={toast}
                        productCart={productCart}
                        setProductCart={setProductCart}
                        products={filter.length === 0 ? products : filter}
                        setProducts={setProducts}
                    />
                </section>
                <Cart
                    toast={toast}
                    productCart={productCart}
                    setProductCart={setProductCart}
                />
            </Main>
        </div>
    );
}

export default App;
