import React from "react";
import { useNavigate } from "react-router-dom";
import { ImagesContext } from '../../index';

import './CartEmpty.css';

const CartEmpty = () => {

    const { state: imagesState } = React.useContext(ImagesContext);
    const navigate = useNavigate();

    const heroImage = imagesState?.images?.find(({ imageHeading }) => imageHeading === 'emptycart');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';

    return (
        <>
            <div className="cart-empty">
                <div className="cart-empty__image">
                    <img className="cart-empty__image-src" src={imageUrl} alt="Empty Cart Visual" />
                </div>
                <div className="cart-empty__content">
                    <h2 className="cart-empty__heading poppins-semibold">
                        Your Cart is Empty!
                    </h2>
                    <p className="cart-empty__text poppins-regular">
                        No items in the cart yet. Start shopping and get everything you want!
                    </p>
                    <button className="cart-empty__button poppins-semibold" onClick={() => navigate("/productsListing")}>
                        Start Shopping
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartEmpty;
