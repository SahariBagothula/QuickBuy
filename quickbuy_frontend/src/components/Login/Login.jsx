import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

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

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const saveDetails = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/user/login", {
                identifier: identifier,
                password: password
            });
            Swal.fire({
                icon: 'success',
                title: 'Login successful!',
                text: 'You can now shop.',
                customClass: {
                    popup: 'swal-popup'
                }
            })
                .then(() => {
                    navigate(location?.state?.from?.pathname);
                });
        } catch (error) {
            console.log(`Error response: ${error.response}`);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data || "An error occurred. Please try again.",
                customClass: {
                    popup: 'swal-popup'
                }
            });
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
                    <h2 className="login__heading poppins-semibold">Welcome Back!</h2>
                    <form className="login__form poppins-semibold">
                        <div className="login__form-group">
                            <label className="login__label" htmlFor="email">Email/Username</label>
                            <input className="login__input" type="email" id="email" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
                        </div>
                        <div className="login__form-group">
                            <label className="login__label" htmlFor="password">Password</label>
                            <input className="login__input" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="login__button poppins-semibold" type="submit" onClick={saveDetails}>Log In</button>
                    </form>
                    <p className="login__signup-text poppins-semibold">
                        Not a registered user? <a href="/signup" className="login__signup-link">Sign up</a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
