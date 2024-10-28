import React from "react";
import "./About.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {
    return (
        <>
            <Header />
            <section className="about">
                <div className="about__header">
                    <img
                        src="/"
                        alt="About QuickBuy"
                        className="about__header-image"
                    />
                    <h1 className="about__header-text">About QuickBuy</h1>
                </div>

                <div className="about__product-showcase">
                    <div className="about__product">
                        <img src="path_to_product_image1.jpg" alt="Product 1" className="about__product-image" />
                        <button className="about__product-button">Buy Now</button>
                    </div>
                    <div className="about__product">
                        <img src="path_to_product_image2.jpg" alt="Product 2" className="about__product-image" />
                        <button className="about__product-button">Buy Now</button>
                    </div>
                </div>

                <div className="about__description">
                    <p>
                        Welcome to QuickBuy! We offer a wide range of stylish and trendy clothing for both men and women. Our collection is updated with the latest trends to keep you looking fashionable at all times.
                    </p>
                </div>

                <div className="about__testimonials">
                    <div className="about__testimonial">
                        <img src="path_to_employee_image1.jpg" alt="Employee 1" className="about__testimonial-image" />
                        <div className="about__testimonial-content">
                            <p className="about__testimonial-message">
                                "Working at QuickBuy has been a fantastic experience! The team is dedicated to providing the best shopping experience for our customers."
                            </p>
                            <p className="about__testimonial-name">John Doe</p>
                        </div>
                    </div>

                    <div className="about__testimonial">
                        <img src="path_to_employee_image2.jpg" alt="Employee 2" className="about__testimonial-image" />
                        <div className="about__testimonial-content">
                            <p className="about__testimonial-message">
                                "I love being a part of QuickBuy. The environment is energetic and driven towards continuous improvement."
                            </p>
                            <p className="about__testimonial-name">Jane Smith</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;
