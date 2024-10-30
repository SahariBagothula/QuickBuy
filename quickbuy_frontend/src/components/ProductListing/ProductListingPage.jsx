import { useContext } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

import { ProductsContext, ImagesContext } from '../../index';
import './ProductListingPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ProductListingPage = () => {

    const { state: productsState } = useContext(ProductsContext);
    // console.log(`products: ${productsState?.data} `)

    const { state: imagesState } = useContext(ImagesContext);

    const heroImage = imagesState.images.find(({ imageHeading }) => imageHeading === 'women');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';

    return (
        <>
            <Header />
            <div className="product-listing-page">
                {/* <div className="product-listing-page__hero">
                    <img
                        src={imageUrl}
                        alt="Women Clothing"
                        className="product-listing-page__hero-image"
                    />
                    <div className="product-listing-page__hero-text">Women</div>
                </div> */}


                <div className="product-listing-page__content">
                    <aside className="product-listing-page__sidebar">
                        <div className="product-listing-page__sidebar__price-slider">
                            <h4>Price</h4>
                            <input type="range" min="0" max="1000" />
                        </div>

                        <div className="product-listing-page__sidebar__brands">
                            <h4>Brands</h4>
                            <label>
                                <input type="checkbox" name="brand" value="Puma" /> Puma
                            </label>
                            <label>
                                <input type="checkbox" name="brand" value="USPolo" /> USPolo
                            </label>
                            <label>
                                <input type="checkbox" name="brand" value="Gap" /> Gap
                            </label>
                            <label>
                                <input type="checkbox" name="brand" value="Vermo Moda" /> Vermo Moda
                            </label>
                        </div>

                        <div className="product-listing-page__sidebar__categories">
                            <h4>Categories</h4>
                            <label>
                                <input type="checkbox" name="category" value="Shirts" /> Shirts
                            </label>
                            <label>
                                <input type="checkbox" name="category" value="Tshirts" /> Tshirts
                            </label>
                            <label>
                                <input type="checkbox" name="category" value="Jackets" /> Jackets
                            </label>
                            <label>
                                <input type="checkbox" name="category" value="Dresses" /> Dresses
                            </label>
                        </div>
                    </aside>


                    <div className="product-listing-page__divider"></div>

                    <section className="product-listing-page__products">
                        {productsState?.data?.map(product => (
                            <Link to={`/productDetails/${product.id}`} className="product-listing-page__products-link" key={product.id}>
                                <div className="product-card">
                                    <img
                                        src={`http://localhost:8080${product.imageUrl}`}
                                        alt={product.name}
                                        className="product-card__image"
                                    />
                                    <h3 className="product-card__name">{product.name}</h3>
                                    <p className="product-card__price">${product.price}</p>
                                    {/* <button className="product-card__add-to-cart">Add to Cart</button> */}
                                </div>
                            </Link>
                        ))}
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductListingPage;
