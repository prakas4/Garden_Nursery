import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import { createContext } from 'react'


export const ProductContext = createContext();



export const ProductProvider = ({ children }) => {
  const [CartItems, setCartItems] = useState([]);
  const location = useLocation();

  const showHeader = ["/about", "/service", "/cart", "/contact"].includes(location.pathname);


  // ========================== add to cart with api post ===========================

  const addCart = async (product) => {
    try {
      const existingCartItem = CartItems.find((item) => item.productId === product._id);

      if (existingCartItem) {
        await axios.put(`http://127.0.0.1:5000/cart/${existingCartItem._id}`, {
          quantity: existingCartItem.quantity + 1,
        });

        setCartItems((prevCart) =>
          prevCart.map((item) =>
            item._id === existingCartItem._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        const response = await axios.post("http://127.0.0.1:5000/cart", {
          productId: product._id,
          quantity: 1,
        });

        setCartItems([...cart, response.data]);
      }
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

  // ================ Fetch or Get the items in the cart ================

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/cart")
      setCartItems(response.data)
      console.log("Cart Items", response);

    } catch (error) {
      console.error("Error fetching items", error);
    }
  }

  useEffect(() => {
    fetchCartItems()
  }, [])

  // ================== Update the Cart quantity =========================

  const updateCartQuantity = async (id, newQuantity) => {
    try {
      await axios.put(`http://127.0.0.1:5000/cart/${id}`, { quantity: newQuantity });
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item._id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating cart quantity", error);
    }
  };


  // ==================== Remove item from the cart =============================
  const removeFromCart = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/cart/${id}`);

      // Remove from state after successful deletion
      setCartItems((prevCart) => prevCart.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting cart item", error);
    }
  };

  // ====================== Remove All Cart in the Cart Page =====================

  const clearCart = async () => {
    try {
      await axios.delete("http://127.0.0.1:5000/cart")
      setCartItems([])
    } catch (error) {
      console.error("Error deleting cart item", error);
    }
  }


  return (
    <ProductContext.Provider
      value={{ CartItems, setCartItems, addCart, removeFromCart, showHeader, fetchCartItems, updateCartQuantity, clearCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};
