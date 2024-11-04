import React, { useContext, useState } from "react";
import axios from 'axios';

import { ImagesContext } from '../../index';
import './Login.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Login = () => {

    const { state: imagesState } = useContext(ImagesContext);

    const heroImage = imagesState?.images?.find(({ imageHeading }) => imageHeading === 'login');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';
    // console.log(imageUrl)

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    const saveDetails = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/user/login", {
                identifier: identifier,
                password: password
            });
            alert("Registration successful, you can now shop.")
        } catch (error) {
            console.log(`Error response: ${error.response}`);
            alert(error.response?.data || "An error occurred. Please try again.");
        }
    }


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
                            <label className="login__label" htmlFor="email">Email/Username</label>
                            <input className="login__input" type="email" id="email" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
                        </div>
                        <div className="login__form-group">
                            <label className="login__label" htmlFor="password">Password</label>
                            <input className="login__input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="login__button" type="submit" onClick={saveDetails}>Log In</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
