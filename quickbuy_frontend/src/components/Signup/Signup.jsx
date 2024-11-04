import React, { useContext, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

import { ImagesContext } from '../../index';
import './Signup.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SignUp = () => {


    const { state: imagesState } = useContext(ImagesContext);

    const heroImage = imagesState?.images?.find(({ imageHeading }) => imageHeading === 'signup');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';
    // console.log(imageUrl)

    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [mobilenumber, setMobilenumber] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");

    const save = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/user/register", {
                fullname: fullname,
                username: username,
                email: email,
                mobilenumber: mobilenumber,
                gender: gender,
                password: password,
            });
            Swal.fire({
                icon: 'success',
                title: 'Registartion',
                text: "Please check your email to complete the registration",
                customClass: {
                    popup: 'signup-swal-popup',
                    title: 'signup-swal-title',
                    content: 'signup-swal-content',
                    confirmButton: 'signup-swal-button',
                },
            });
        } catch (error) {
            console.error("Error response:", error.response);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response?.data || "An error has occurred. Please try again. ",
                customClass: {
                    popup: 'signup-swal-popup',
                    title: 'signup-swal-title',
                    content: 'signup-swal-content',
                    confirmButton: 'signup-swal-button',
                },
            });
        }
    }


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
                            <label className="signup__label" htmlFor="fullname">Fullname</label>
                            <input className="signup__input" type="text" id="fullname" required value={fullname} onChange={(e) => setFullname(e.target.value)} />
                        </div>
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="username">Username</label>
                            <input className="signup__input" type="text" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="email">Email</label>
                            <input className="signup__input" type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="mobile">Mobile number</label>
                            <input className="signup__input" type="tel" id="mobile" pattern="[0-9]{10}" required value={mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} />
                        </div>

                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="gender">Gender:</label>
                            <select id="gender" name="gender" className="signup__input" value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="" disabled>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="password">Password</label>
                            <input className="signup__input" type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="signup__button" type="submit" onClick={save}>Sign Up</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SignUp;
