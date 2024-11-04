import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                {/* Company Info Section */}
                <div className="footer__section footer__section--company-info">
                    <h3 className="footer__heading poppins-bold">Company Info</h3>
                    <ul className="footer__list poppins-semibold">
                        <li className="footer__list-item"><Link to="/about-us">About Us</Link></li>
                        <li className="footer__list-item"><Link to="/latest-posts">Latest Posts</Link></li>
                        <li className="footer__list-item"><Link to="/contact-us">Contact Us</Link></li>
                        <li className="footer__list-item"><Link to="/shop">Shop</Link></li>
                    </ul>
                </div>

                {/* Services Section */}
                <div className="footer__section footer__section--services">
                    <h3 className="footer__heading poppins-bold">Services</h3>
                    <ul className="footer__list poppins-semibold">
                        <li className="footer__list-item"><Link to="/consulting">Consulting</Link></li>
                        <li className="footer__list-item"><Link to="/support">Support</Link></li>
                        <li className="footer__list-item"><Link to="/customer-service">Customer Service</Link></li>
                        <li className="footer__list-item"><Link to="/training">Training</Link></li>
                    </ul>
                </div>

                {/* Resources Section */}
                <div className="footer__section footer__section--resources">
                    <h3 className="footer__heading poppins-bold">Resources</h3>
                    <ul className="footer__list poppins-semibold">
                        <li className="footer__list-item"><Link to="/blog">Blog</Link></li>
                        <li className="footer__list-item"><Link to="/faqs">FAQs</Link></li>
                        <li className="footer__list-item"><Link to="/documentation">Documentation</Link></li>
                        <li className="footer__list-item"><Link to="/community">Community</Link></li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div className="footer__section footer__section--legal">
                    <h3 className="footer__heading poppins-bold">Legal</h3>
                    <ul className="footer__list poppins-semibold">
                        <li className="footer__list-item"><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li className="footer__list-item"><Link to="/terms-conditions">Terms & Conditions</Link></li>
                        <li className="footer__list-item"><Link to="/cookie-policy">Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>

            <hr className="footer__divider" />

            <div className="footer__bottom poppins-regular ">
                <p className="footer__copyright">
                    &copy; 2024 Your Company Name. All rights reserved.
                </p>
                <div className="footer__links">
                    <Link to="/privacy-policy" className="footer__link">Privacy Policy</Link>
                    <Link to="/terms-conditions" className="footer__link">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
