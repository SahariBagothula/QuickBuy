import { useContext } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

import { ProductsContext, ImagesContext } from '../../index';
import './ProductListingPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ProductListingPage = () => {

    const { state: productsState, dispatch } = useContext(ProductsContext);
    // console.log(`products: ${productsState?.data} `)

    const { state: imagesState } = useContext(ImagesContext);

    const heroImage = imagesState.images.find(({ imageHeading }) => imageHeading === 'women');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';

    const searchHandler = () => {
        dispatch({ type: "SEARCH_PRODUCTS", payload: productsState.enteredText });
        dispatch({ type: "ENTERED_TEXT", payload: "" });
    }

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

                        <div className="product-listing-page__sidebar__search">
                            <label>
                                <input type="text" value={productsState.enteredText} onChange={(event) => dispatch({ type: 'ENTERED_TEXT', payload: event.target.value })} />
                            </label>
                            <button onClick={searchHandler}>search</button>
                        </div>

                        <div className="product-listing-page__sidebar__price-slider">
                            <h4>Price</h4>
                            <input type="range" min="0" max="1000" />
                            <label>
                                <input type="radio" name="price" value="lth" onChange={() => dispatch({ type: 'SORT_LOW_TO_HIGH' })} /> Low to high
                            </label>
                            <label>
                                <input type="radio" name="price" value="htl" onChange={() => dispatch({ type: 'SORT_HIGH_TO_LOW' })} /> High to low
                            </label>
                        </div>

                        <div className="product-listing-page__sidebar__brands">
                            <h4>Brands</h4>
                            <label>
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="puma"
                                    checked={productsState?.selectedBrands?.includes("puma")}
                                    onChange={(event) =>
                                        dispatch({ type: "TOGGLE_BRAND_FILTER", payload: event.target.value.toLowerCase() })
                                    }
                                />{" "}
                                Puma
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="uspolo"
                                    checked={productsState?.selectedBrands?.includes("uspolo")}
                                    onChange={(event) =>
                                        dispatch({ type: "TOGGLE_BRAND_FILTER", payload: event.target.value.toLowerCase() })
                                    }
                                />{" "}
                                U.S. Polo Assn.
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="nike"
                                    checked={productsState?.selectedBrands?.includes("nike")}
                                    onChange={(event) =>
                                        dispatch({ type: "TOGGLE_BRAND_FILTER", payload: event.target.value.toLowerCase() })
                                    }
                                />{" "}
                                Nike
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    name="brand"
                                    value="denim"
                                    checked={productsState?.selectedBrands?.includes("denim")}
                                    onChange={(event) =>
                                        dispatch({ type: "TOGGLE_BRAND_FILTER", payload: event.target.value.toLowerCase() })
                                    }
                                />{" "}
                                Denim
                            </label>
                        </div>


                        <div className="product-listing-page__sidebar__categories">
                            <h4>Categories</h4>
                            <label>
                                <input type="checkbox" name="category" value="Shirt" checked={productsState?.selectedCategory?.includes("shirts")} onChange={(event) => dispatch({ type: "TOGGLE_CATEGORY_FILTER", payload: event.target.value.toLowerCase() })} /> Shirts
                            </label>
                            <label>
                                <input type="checkbox" name="category" value="Tshirt" checked={productsState?.selectedCategory?.includes("tshirts")} onChange={(event) => dispatch({ type: "TOGGLE_CATEGORY_FILTER", payload: event.target.value.toLowerCase() })} /> Tshirts
                            </label>
                            <label>
                                <input type="checkbox" name="category" value="Jacket" checked={productsState?.selectedCategory?.includes("jackets")} onChange={(event) => dispatch({ type: "TOGGLE_CATEGORY_FILTER", payload: event.target.value.toLowerCase() })} /> Jackets
                            </label>
                            <label>
                                <input type="checkbox" name="category" value="Dress" checked={productsState?.selectedCategory?.includes("dresses")} onChange={(event) => dispatch({ type: "TOGGLE_CATEGORY_FILTER", payload: event.target.value.toLowerCase() })} /> Dresses
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
                                    {product.brand}
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
