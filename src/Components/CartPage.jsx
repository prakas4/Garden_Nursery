import React, { useContext } from 'react';
import { ProductContext } from './Context'; // Correct import path
import Header from './Header';

const CartPage = () => {
  const { CartItems, setCartItems, removeFromCart } = useContext(ProductContext);

  const handleQuantityChange = (item, e) => {
    const newQuantity = parseInt(e.target.value, 10) || 1;

    setCartItems(prevCartItems => {
      return prevCartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      );
    });
  };

  const calculateTotalPrice = () => {
    return CartItems.reduce(
      (total, item) => total + item.offerPrice * item.quantity,
      0
    );
  };

  const handleClearCart = () =>{
    setCartItems([])
  }

  return (
    <>
    <Header />
      <div className="container my-5">
        <h2 className="text-center mb-4">Your Shopping Cart</h2>
        {CartItems.length === 0 ? (
          <p className="text-center">Your cart is empty!</p>
        ) : (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {CartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '50px', marginRight: '10px' }}
                        />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td>₹{item.offerPrice}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity || 1}
                        onChange={(e) => handleQuantityChange(item, e)}
                        className="form-control"
                        style={{ width: '70px' }}
                      />
                    </td>
                    <td>₹{(item.offerPrice * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Total Price */}
            <div className="text-end">
              <h4>Total Price: ₹{calculateTotalPrice().toFixed(2)}</h4>
            </div>

            <div className="text-center mt-4">
              <button className="btn btn-danger" onClick={handleClearCart}><i class="fa-solid fa-trash"></i> Clear All</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
