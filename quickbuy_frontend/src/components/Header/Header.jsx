import './Header.css';
import { Link } from 'react-router-dom';
import { love, shoppingCart, user } from '../../assets/index';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__heading">
                    <Link to="/" className="header__heading-text">QuickBuy</Link>
                </div>
                <ul className="header__nav">
                    <li className="header__nav-item"><Link to='/' className="header__nav-link">Home</Link></li>
                    <li className="header__nav-item"><Link to='/about' className="header__nav-link">About</Link></li>
                    <li className="header__nav-item"><Link to='/contact' className="header__nav-link">Contact us</Link></li>
                </ul>
                <ul className="header__nav header__nav--secondary">
                    <li className="header__nav-item"><Link className="header__nav-link"><img src={love} alt='icon' /></Link></li>
                    <li className="header__nav-item"><Link className="header__nav-link"><img src={shoppingCart} alt='icon' /></Link></li>
                    <li className="header__nav-item"><Link className="header__nav-link"><img src={user} alt='icon' /></Link></li>
                </ul>
            </header>
        </>
    )
}

export default Header;
