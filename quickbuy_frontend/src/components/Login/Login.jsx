import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { ImagesContext, RegistrationContext } from '../../index';
import './Login.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Login = () => {

    const location = useLocation();

    const { state: imagesState } = useContext(ImagesContext);

    const { state, dispatch, loginUser } = useContext(RegistrationContext);

    const handleInputChange = (field, value) => {
        dispatch({ type: "SET_FIELD_VALUE", field, value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser();
    }

    const heroImage = imagesState?.images?.find(({ imageHeading }) => imageHeading === 'login');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';
    // console.log(imageUrl)

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
                    <h2 className="login__heading poppins-semibold">Welcome Back!</h2>
                    <form className="login__form poppins-semibold">
                        <div className="login__form-group">
                            <label className="login__label" htmlFor="email">Email/Username</label>
                            <input className="login__input" type="email" id="email" value={state.identifier} onChange={(e) => handleInputChange("identifier", e.target.value)} />
                        </div>
                        <div className="login__form-group">
                            <label className="login__label" htmlFor="password">Password</label>
                            <input className="login__input" type="password" id="password" value={state.password} onChange={(e) => handleInputChange("password", e.target.value)} />
                        </div>
                        <button className="login__button poppins-semibold" type="submit" onClick={handleSubmit}>Log In</button>
                    </form>
                    <p className="login__signup-text poppins-semibold">
                        Not a registered user? <Link to="/signup" state={{ from: location.state?.from }} className="login__signup-link">Sign up</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
