import React, { useEffect, useState } from 'react'
import Header from './Components/Header';
import Products from './Components/Products';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])
  console.log(products);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="product" element={<Products products={products} />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App