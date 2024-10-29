import React, { useContext, useRef } from "react";
import { ImagesContext } from '../../index';
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import './Contact.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_43573sq', 'template_411j42o', form.current, {
                publicKey: 'daRwsWJm90jaoGJOA',
            })
            .then(
                () => {
                    alert('Email sent successfully!');
                    form.current.reset();
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send email. Please try again.');
                },
            );
    }

    const { state: imagesState } = useContext(ImagesContext);

    const heroImage = imagesState.images.find(({ imageHeading }) => imageHeading === 'heroContact');
    const imageUrl = heroImage ? `http://localhost:8080${heroImage.imageUrl}` : '/';


    return (
        <>
            <Header />
            <div className="contact">
                <div className="contact__hero" style={{
                    background: `url(${imageUrl})`, backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <h1 className="contact__hero-text">Contact Us</h1>
                </div>
                <div className="contact__content">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contact__content-left">
                            <h2 className="contact__heading">We would love to hear from you</h2>
                            <p className="contact__text">
                                If you have any query or any type of suggestion, you can contact us here.
                            </p>
                            <div className="contact__form">
                                <div className="contact__form-group">
                                    <label className="contact__label" htmlFor="name">Name</label>
                                    <input className="contact__input" type="text" id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="contact__form-group">
                                    <label className="contact__label" htmlFor="email">Email</label>
                                    <input className="contact__input" type="email" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="contact__form-group--full">
                                    <label className="contact__label" htmlFor="message">Message</label>
                                    <textarea className="contact__textarea" id="message" rows="10" cols="100" placeholder="Enter your message" required></textarea>
                                </div>

                            </div>
                            <button type="submit" value="Send" className="contact__button">Send Message</button>
                        </div>
                    </form>
                    <div className="contact__content-right">
                        <h3 className="contact__subheading">Visit Us</h3>
                        <p className="contact__address">12th Street Miyapur, Hyderabad, Telangana</p>
                        <h3 className="contact__subheading">Get in Touch</h3>
                        <p className="contact__text">You can get in touch with us on this provided email.</p>
                        <p className="contact__email">Email: quickbuy@gmail.com</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;

