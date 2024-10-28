import './Header.css';
import { love, shoppingCart, user } from '../../assets/index';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__heading">
                    QuickBuy
                </div>
                <ul className="header__nav">
                    <li className="header__nav-item"><a className="header__nav-link">Home</a></li>
                    <li className="header__nav-item"><a className="header__nav-link">About</a></li>
                    <li className="header__nav-item"><a className="header__nav-link">Contact us</a></li>
                </ul>
                <ul className="header__nav header__nav--secondary">
                    <li className="header__nav-item"><a className="header__nav-link"><img src={love} alt='icon' /></a></li>
                    <li className="header__nav-item"><a className="header__nav-link"><img src={shoppingCart} alt='icon' /></a></li>
                    <li className="header__nav-item"><a className="header__nav-link"><img src={user} alt='icon' /></a></li>
                </ul>
            </header>
        </>
    )
}

export default Header;
