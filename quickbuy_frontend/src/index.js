import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsContext, ProductsProvider } from './contexts/ProductsContext';
import { ImagesContext, ImagesProvider } from './contexts/ImagesContext';
import { TestimonialsContext, TestimonialsProvider } from './contexts/TestimonialsContext';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

export { ProductsContext, ImagesContext, TestimonialsContext };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <ProductsProvider>
        <ImagesProvider>
          <TestimonialsProvider>
            <App />
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
