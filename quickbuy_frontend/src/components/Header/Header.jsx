import React, { useContext } from "react";
import { ImagesContext } from '../../index';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {

    const { state: imagesState } = useContext(ImagesContext);

    const loveImage = imagesState.images.find(({ imageHeading }) => imageHeading === 'love');
    const imageUrl1 = loveImage ? `http://localhost:8080${loveImage?.imageUrl}` : '/';
    // console.log(imageUrl)

    const cartImage = imagesState.images.find(({ imageHeading }) => imageHeading === 'cart');
    const imageUrl2 = cartImage ? `http://localhost:8080${cartImage?.imageUrl}` : '/';
    // console.log(imageUrl)

    const userImage = imagesState.images.find(({ imageHeading }) => imageHeading === 'user');
    const imageUrl3 = userImage ? `http://localhost:8080${userImage?.imageUrl}` : '/';

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
                    <li className="header__nav-item"><Link to="/wishlist" className="header__nav-link"><img src={imageUrl1} alt='icon' /></Link></li>
                    <li className="header__nav-item"><Link to="/cart" className="header__nav-link"><img src={imageUrl2} alt='icon' /></Link></li>
                    <li className="header__nav-item"><Link className="header__nav-link"><img src={imageUrl3} alt='icon' /></Link></li>
                </ul>
            </header>
        </>
    )
}

export default Header;
