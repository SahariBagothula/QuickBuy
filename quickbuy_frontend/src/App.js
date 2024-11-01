import { Routes, Route } from 'react-router-dom';

import HomePage from './components/Home/HomePage';
import AboutUs from './components/FooterLinks/AboutUs.jsx';
import LatestPosts from "./components/FooterLinks/LatestPosts";
import ContactUs from "./components/FooterLinks/ContactUs";
import Shop from "./components/FooterLinks/Shop";
import Consulting from "./components/FooterLinks/Consulting";
import Support from "./components/FooterLinks/Support";
import CustomerService from "./components/FooterLinks/CustomerService";
import Training from "./components/FooterLinks/Training";
import Blog from "./components/FooterLinks/Blog";
import FAQs from "./components/FooterLinks/FAQs";
import Documentation from "./components/FooterLinks/Documentation";
import Community from "./components/FooterLinks/Community";
import PrivacyPolicy from "./components/FooterLinks/PrivacyPolicy";
import TermsConditions from "./components/FooterLinks/TermsConditions";
import CookiePolicy from "./components/FooterLinks/CookiePolicy";
import './App.css';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import ProductListingPage from './components/ProductListing/ProductListingPage.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Wishlist from './components/Wishlist/Wihslist.jsx';
import Cart from './components/Cart';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path="/productsListing" element={<ProductListingPage />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/latest-posts" element={<LatestPosts />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/support" element={<Support />} />
        <Route path="/customer-service" element={<CustomerService />} />
        <Route path="/training" element={<Training />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/community" element={<Community />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
