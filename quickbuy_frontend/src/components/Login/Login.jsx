import React, { useContext } from "react";
import { ImagesContext } from '../../index';
import './Login.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Login = () => {

    const { state: imagesState } = useContext(ImagesContext);

    const heroImage = imagesState?.images?.find(({ imageHeading }) => imageHeading === 'login');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';
    console.log(imageUrl)

    return (
        <>
            <Header />
            <div className="login">
                <div className="login__image">
                    <img
                        className="login__image-src"
                        src={imageUrl}
                        alt="Login visual"
                    />
                </div>
                <div className="login__form-container">
                    <h2 className="login__heading">Welcome Back!</h2>
                    <form className="login__form">
                        <div className="login__form-group">
                            <label className="login__label" htmlFor="email">Email</label>
                            <input className="login__input" type="email" id="email" />
                        </div>
                        <div className="login__form-group">
                            <label className="login__label" htmlFor="password">Password</label>
                            <input className="login__input" type="password" id="password" />
                        </div>
                        <button className="login__button" type="submit">Log In</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
