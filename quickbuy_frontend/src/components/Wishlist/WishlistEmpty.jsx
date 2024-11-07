import React from "react";
import { useNavigate } from "react-router-dom";
import { ImagesContext } from '../../index';

import './WishlistEmpty.css';

const WishlistEmpty = () => {

    const { state: imagesState } = React.useContext(ImagesContext);
    const navigate = useNavigate();

    const heroImage = imagesState?.images?.find(({ imageHeading }) => imageHeading === 'emptywishlist');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';

    return (
        <>
            <div className="wishlist-empty">
                <div className="wishlist-empty__image">
                    <img className="wishlist-empty__image-src" src={imageUrl} alt="Empty wishlist Visual" />
                </div>
                <div className="wishlist-empty__content">
                    <h2 className="wishlist-empty__heading poppins-semibold">
                        Your wishlist is Empty!
                    </h2>
                    <p className="wishlist-empty__text poppins-regular">
                        No items in the wishlist yet. Start shopping and get everything you want!
                    </p>
                    <button className="wishlist-empty__button poppins-semibold" onClick={() => navigate("/productsListing")}>
                        Start Shopping
                    </button>
                </div>
            </div>
        </>
    );
};

export default WishlistEmpty;
