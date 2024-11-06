import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ProductsContext, ProductsProvider } from './contexts/ProductsContext';
import { ImagesContext, ImagesProvider } from './contexts/ImagesContext';
import { TestimonialsContext, TestimonialsProvider } from './contexts/TestimonialsContext';
import { InfoDataContext, InfoDataProvider } from './contexts/InfoDataContext';
import { AddressContext, AddressProvider } from './contexts/AddressContext';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import { RegistrationContext, RegistartionProvider } from './contexts/RegistrationContext';
import { ProfileContext, ProfileProvider } from './contexts/ProfileContext';
import { CartContext, CartProvider } from './contexts/CartContext';

import './ToastStyles.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export { ProductsContext, ImagesContext, TestimonialsContext, InfoDataContext, AddressContext, AuthContext, RegistrationContext, ProfileContext, CartContext };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <ProductsProvider>
        <ImagesProvider>
          <TestimonialsProvider>
            <InfoDataProvider>
              <AddressProvider>
                <AuthProvider>
                  <RegistartionProvider>
                    <ProfileProvider>
                      <CartProvider>
                        <App />
                        <ToastContainer
                          position="bottom-right"
                          autoClose={3000} // Auto close after 3 seconds
                          hideProgressBar={false}
                          closeOnClick
                          pauseOnHover
                          draggable
                          pauseOnFocusLoss
                        />
                      </CartProvider>
                    </ProfileProvider>
                  </RegistartionProvider>
                </AuthProvider>
              </AddressProvider>
            </InfoDataProvider>

          </TestimonialsProvider>
        </ImagesProvider>
      </ProductsProvider>
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
