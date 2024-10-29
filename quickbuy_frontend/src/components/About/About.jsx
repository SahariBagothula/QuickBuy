import React, { useContext } from "react";
import { ImagesContext, TestimonialsContext } from '../../index';

import "./About.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {

    const { state: imagesState } = useContext(ImagesContext);
    const { state: testimonialsState } = useContext(TestimonialsContext);

    const heroImage = imagesState.images.find(({ imageHeading }) => imageHeading === 'heroAbout');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';

    const menImage = imagesState.images.find(({ imageHeading }) => imageHeading === 'menAbout');
    const imageUrl2 = menImage ? `http://localhost:8080${menImage.imageUrl}` : '/';

    const womenImage = imagesState.images.find(({ imageHeading }) => imageHeading === 'womenAbout');
    const imageUrl3 = womenImage ? `http://localhost:8080${womenImage.imageUrl}` : '/';

    return (
        <>
            <Header />
            <section className="about">
                <div className="about__header">
                    <img
                        src={imageUrl}
                        alt="About QuickBuy"
                        className="about__header-image"
                    />
                    <h1 className="about__header-text">About QuickBuy</h1>
                </div>

                <div className="about__product-showcase">
                    <div className="about__product">
                        <img src={imageUrl2} alt="Product 1" className="about__product-image" />
                        <button className="about__product-button">Buy Now</button>
                    </div>
                    <div className="about__product">
                        <img src={imageUrl3} alt="Product 1" className="about__product-image" />
                        <button className="about__product-button">Buy Now</button>
                    </div>
                </div>

                <div className="about__description">
                    <p>
                        Welcome to QuickBuy! We offer a wide range of stylish and trendy clothing for both men and women. Our collection is updated with the latest trends to keep you looking fashionable at all times.
                    </p>
                </div>

                <div className="about__testimonials">
                    <h1 className="about__testimonials-heading">Testimonials</h1>
                    {
                        testimonialsState?.data?.map(({ id, imageUrl, message, name }) => {
                            return (
                                <div className="about__testimonial" key={id}>
                                    <img src={`http://localhost:8080${imageUrl}`} alt="Testimonial" className="about__testimonial-image" />
                                    <div className="about__testimonial-content">
                                        <p className="about__testimonial-message">
                                            {message}
                                        </p>
                                        <p className="about__testimonial-name">{name}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;
