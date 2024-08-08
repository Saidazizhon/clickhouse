import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Category from './components/Category';
import Products from './components/Products';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [categories, setCategories] = useState([]);
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://dummyjson.com/products/categories');
      setCategories(response.data);
    };

    const fetchProducts = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      const products = response.data.products;

      const discounted = products.filter(product => product.discountPercentage > 0);
      setDiscountedProducts(discounted);

      setAvailableProducts(products);
    };

    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Banner />
      <Category categories={categories} />
      <Products products={discountedProducts} title="Скидки %" />
      <Products products={availableProducts} title="Товары в наличии" />
      <Footer />
    </div>
  );
}

export default App;
