import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ProductsContext } from '../../index';
import './ProductDetails.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ProductDetails = () => {

    const { state: productsState, dispatch } = useContext(ProductsContext);


    const { productId } = useParams();

    const product = productsState?.data?.find(({ id }) => Number(productId) === Number(id));
    console.log(product);

    const handleAddToCart = (productId) => {
        dispatch({ type: "ADD_TO_CART", payload: productId });
        toast.success('Added to cart!');
    }

    const handleAddToWishlist = (productId) => {
        dispatch({ type: "ADD_TO_WISHLIST", payload: productId });
        toast.success('Added to wishlist!');
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
                        <h1 className="product-listing__name">{product?.name}</h1>
                        <p className="product-listing__price">{`$${product?.price}`}</p>
                        <p className="product-listing__description">{product?.description}</p>
                        <div className="product-listing__size-select">
                            <select id="size-select" className="product-listing__size-dropdown">
                                <option value="">Select Size</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                            </select>
                        </div>
                        <button className="product-listing__add-to-cart" onClick={() => handleAddToWishlist(product.id)}>Add to Wishlist</button>
                        <button className="product-listing__add-to-cart" onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
