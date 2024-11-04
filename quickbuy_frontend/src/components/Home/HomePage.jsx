import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProductsContext, InfoDataContext } from '../../index';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import './HomePage.css';

const HomePage = () => {

    const { state: productsState } = useContext(ProductsContext);
    // console.log(`products: ${productsState?.data} `)
    const { state: dataState } = useContext(InfoDataContext);
    // console.log(`products2: ${dataState?.data} `)

    return (
        <>
            <Header />
            <Hero />
            <div>
                <div className="home-page__new-arrivals poppins-medium">
                    <h2 className="home-page__new-arrivals-title">Discover NEW Arrivals</h2>
                    <h3 className="home-page__new-arrivals-subtitle ">Recently added clothes!</h3>
                    <ul className="home-page__product-list">
                        {
                            productsState?.data?.map(({ id, category, description, name, price, imageUrl, gender, newlyArrived, topSeller, brand }) =>
                                newlyArrived ? ( // Use a ternary operator
                                    <Link to={`/productDetails/${id}`} className="home-page__product" key={id}>
                                        <li className="home-page__product-item">
                                            <img className="home-page__product-image" src={`http://localhost:8080${imageUrl}`} alt={name} />
                                            <h3 className="home-page__product-name">{name}</h3>
                                            <p className="home-page__product-price">{`$${price}`}</p>
                                        </li>
                                    </Link>
                                ) : null // Return null if newlyArrived is false
                            )
                        }
                    </ul>

                </div>
                <section className="home-page__info-section poppins-medium ">
                    {dataState?.data?.map(({ id, imageUrl, title, description }) => (
                        <div className="home-page__info-item" key={id}>
                            <div className="home-page__info-left">
                                <img className="home-page__info-icon" src={`http://localhost:8080${imageUrl}`} alt="icons" />
                            </div>
                            <div className="home-page__info-right">
                                <h4 className="home-page__info-title">{title}</h4>
                                <p className="home-page__info-description poppins-regular">{description}</p>
                            </div>
                        </div>
                    ))}
                </section>
                <div className="home-page__new-arrivals poppins-medium">
                    <h2 className="home-page__new-arrivals-title">Top Sellers</h2>
                    <h3 className="home-page__new-arrivals-subtitle">Browse our top-selling products</h3>
                    <ul className="home-page__product-list">
                        {
                            productsState?.data?.map(({ id, category, description, name, price, imageUrl, gender, newlyArrived, topSeller, brand }) =>
                                topSeller ? (
                                    <Link to={`/productDetails/${id}`} className="home-page__product" key={id}>
                                        <li className="home-page__product-item" key={id}>
                                            <img className="home-page__product-image" src={`http://localhost:8080${imageUrl}`} alt={name} />
                                            <h3 className="home-page__product-name">{name}</h3>
                                            <p className="home-page__product-price">{`$${price}`}</p>
                                        </li>
                                    </Link>
                                ) : null
                            )
                        }
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
