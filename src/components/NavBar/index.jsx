import { useEffect } from 'react';
import { NavBar } from './style';

export const Navbar = ({ products, search, setSearch }) => {
    useEffect(() => {});

    const categorys = new Set();
    products.map((produt) => categorys.add(produt.category));

    function renderCategory(category) {
        setSearch(category);
    }
    return (
        <NavBar>
            <div>
                <button onClick={() => renderCategory('')}>Todos</button>
                {[...categorys].map((category) => {
                    return (
                        <button
                            key={Math.random()}
                            onClick={() => renderCategory(category)}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
            {search !== '' && (
                <h2>
                    Ressultados para: <span>{search}</span>
                </h2>
            )}
        </NavBar>
    );
};
