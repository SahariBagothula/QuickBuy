import React, { useContext } from "react";
import { ImagesContext } from '../../index';
import { NavLink } from 'react-router-dom';

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
                    <NavLink to="/" className="header__heading-text poppins-semibold">QuickBuy</NavLink>
                </div>
                <ul className="header__nav poppins-black">
                    <li className="header__nav-item"><NavLink to='/' className="header__nav-link" style={({ isActive }) => ({
                        color: isActive ? "#024E82" : "#1D1D1D"
                    })}>Home</NavLink></li>
                    <li className="header__nav-item"><NavLink to='/about' className="header__nav-link" style={({ isActive }) => ({
                        color: isActive ? "#024E82" : "#1D1D1D"
                    })} >About</NavLink></li>
                    <li className="header__nav-item"><NavLink to='/contact' className="header__nav-link" style={({ isActive }) => ({
                        color: isActive ? "#024E82" : "#1D1D1D"
                    })}>Contact us</NavLink></li>
                </ul>
                <ul className="header__nav header__nav--secondary">
                    <li className="header__nav-item"><NavLink to="/wishlist" className="header__nav-link"><img src={imageUrl1} alt='icon' /></NavLink></li>
                    <li className="header__nav-item"><NavLink to="/cart" className="header__nav-link"><img src={imageUrl2} alt='icon' /></NavLink></li>
                    <li className="header__nav-item"><NavLink to="/login" className="header__nav-link"><img src={imageUrl3} alt='icon' /></NavLink></li>
                </ul>
            </header>
        </>
    )
}

export default Header;
