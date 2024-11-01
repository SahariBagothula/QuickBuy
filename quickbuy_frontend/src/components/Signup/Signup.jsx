import React, { useContext } from "react";
import { ImagesContext } from '../../index';
import './Signup.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SignUp = () => {


    const { state: imagesState } = useContext(ImagesContext);

    const heroImage = imagesState?.images?.find(({ imageHeading }) => imageHeading === 'signup');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';
    console.log(imageUrl)

    return (
        <>
            <Header />
            <div className="signup">
                <div className="signup__image">
                    <img
                        className="signup__image-src"
                        src={imageUrl}
                        alt="Signup visual"
                    />
                </div>
                <div className="signup__form-container">
                    <h2 className="signup__heading">Create Your Account</h2>
                    <form className="signup__form">
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="username">Username</label>
                            <input className="signup__input" type="text" id="username" />
                        </div>
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="email">Email</label>
                            <input className="signup__input" type="email" id="email" />
                        </div>
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="password">Password</label>
                            <input className="signup__input" type="password" id="password" />
                        </div>
                        <button className="signup__button" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SignUp;
