import { HeaderContainer } from './style';
import { Logo } from '../';

export const Header = ({ search, setSearch, each }) => {
    return (
        <HeaderContainer>
            <div className="container">
                <Logo />

                <div>
                    <input
                        placeholder={search === '' ? 'Pesquisar' : search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                    />
                    <button onClick={() => each()}>Pesquisar</button>
                </div>
            </div>
        </HeaderContainer>
    );
};
