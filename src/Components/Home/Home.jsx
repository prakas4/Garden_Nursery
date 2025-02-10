// import React, { useState } from 'react'
// import Topbar from '../Top-bar/Topbar'
// import  Navbar  from '../Navbar/Navbar'
// import About from '../About'
// import Product from '../Product'
// import Footer from '../Footer'
// import Service from '../Service'
// import Projects from '../Projects'
// import { ProductContext } from '../Context'
// import CartPage from '../CartPage'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import HomePage from '../HomePage'
// import Contact from '../Contact'

// const Home = () => {
//   const [CartItems, setCartItems] = useState([]);

//   const removeFromCart = (id) => {
//     setCartItems(CartItems.filter((item) => item.id !== id));
//   };
//   const addToCart = (item) => {
//     const existingItem = CartItems.find((cartItem) => cartItem.id === item.id);
//     if (existingItem) {
//       // If the item is already in the cart, update the quantity
//       const updatedCart = CartItems.map((cartItem) =>
//         cartItem.id === item.id
//           ? { ...cartItem, quantity: cartItem.quantity + 1 }
//           : cartItem
//       );
//       setCartItems(updatedCart);
//     } else {
//       // If the item is not in the cart, add it
//       setCartItems([...CartItems, { ...item, quantity: 1 }]);
//     }
//   };
//   return (
//    <>
//    <BrowserRouter>
//    <Topbar />
//    <Navbar />
//    <ProductContext.Provider value={{CartItems,addToCart,removeFromCart}}>
//     <Routes>
//       <Route path='/' element={<HomePage />} />
//       <Route path='about' element={<About />} />
//       <Route path='service' element={<Service />} />
//       <Route path='project' element={<Projects />} />
//       <Route path='cart' element={<CartPage />} />
//       <Route path='product' element={<Product />} />
//       <Route path='contact' element={<Contact />} />
//     </Routes>
//    </ProductContext.Provider>
//    <Footer />
//    </BrowserRouter>
//    </>
//   )
// }

// export default Home

import { useState } from "react";
import { ProductContext } from "../Context";
import { useLocation } from "react-router-dom";
import Header from "../Header";

export const ProductProvider = ({ children }) => {
  const [CartItems, setCartItems] = useState([]);
  const location = useLocation();

  const showHeader = ["/about", "/service", "/cart","/contact"].includes(location.pathname);

  // Add item to the cart
  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id)
    );
  };


  return (
    <ProductContext.Provider
      value={{ CartItems, setCartItems, addToCart, removeFromCart,showHeader }}
    >
      {children}
    </ProductContext.Provider>
  );
};
