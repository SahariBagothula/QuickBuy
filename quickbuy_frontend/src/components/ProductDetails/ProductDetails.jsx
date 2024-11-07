import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ProductsContext, CartContext } from '../../index';
import './ProductDetails.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import axiosInstance from '../../api/axios';

const ProductDetails = () => {

    const { state: productsState } = useContext(ProductsContext);
    const { state: cartState, dispatch } = useContext(CartContext);
    const { productId } = useParams();

    const product = productsState?.data?.find(({ id }) => Number(productId) === Number(id));
    console.log(product);

    const handleCart = async () => {

        if (cartState.cartItemsId.includes(product.id)) {
            toast("Product is in cart");
        }

        try {
            await axiosInstance.post(`/cart/products/${Number(productId)}`);
            dispatch({ type: "ADD_TO_CART", payload: product });
            toast("Added to cart");
        } catch (error) {
            console.error("Error adding product to cart:", error.response || error.message);
            toast.error("Failed to add product to cart");
        }
    }


    return (
        <>
            <Header />
            <div className="product-listing">
                <div className="product-listing__content">
                    <div className="product-listing__image">
                        <img src={`http://localhost:8080${product?.imageUrl}`} alt={product?.name} className="product-listing__image-src" />
                    </div>
                    <div className="product-listing__details">
                        <h1 className="product-listing__name poppins-bold">{product?.name}</h1>
                        <p className="product-listing__price poppins-regular">{`$${product?.price}`}</p>
                        <p className="product-listing__description poppins-regular">{product?.description}</p>
                        <div className="product-listing__size-select">
                            <select id="size-select" className="product-listing__size-dropdown poppins-regular">
                                <option value="">Select Size</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                            </select>
                        </div>
                        <button className="product-listing__add-to-cart poppins-semibold" onClick={() => handleCart()}>{cartState.cartItemsId.includes(product.id) ? <p>Added to Cart</p> : <p>Add to Cart</p>}</button>
                        {/* <button className="product-listing__add-to-cart poppins-semibold" onClick={() => handleAddToWishlist(product.id)}>Add to Wishlist</button> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
