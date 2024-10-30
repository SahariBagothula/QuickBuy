import React from 'react';
import './ProductListingPage.css';

const ProductListingPage = ({ products }) => {

    const productsData = [];

    return (
        <div className="product-listing-page">
            {/* Hero Section */}
            <div className="product-listing-page__hero">
                <img
                    src="path-to-your-image.jpg"
                    alt="Women Clothing"
                    className="product-listing-page__hero-image"
                />
                <div className="product-listing-page__hero-text">Women</div>
            </div>

            {/* Main Content */}
            <div className="product-listing-page__content">
                {/* Sidebar */}
                <aside className="product-listing-page__sidebar">
                    {/* Add any sidebar content here if needed */}
                </aside>

                <div className="product-listing-page__divider"></div>

                <section className="product-listing-page__products">
                    {productsData.map(product => (
                        <div className="product-card" key={product.id}>
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="product-card__image"
                            />
                            <h3 className="product-card__name">{product.name}</h3>
                            <p className="product-card__price">${product.price}</p>
                            <button className="product-card__add-to-cart">Add to Cart</button>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default ProductListingPage;
