import React, { useContext } from 'react';
import { Banner } from '@components/index.js'
import { ProductContext } from '@context/Context';

const index = () => {
  const { CartItems, removeFromCart, clearCart, updateCartQuantity } = useContext(ProductContext);

  const calculateTotalPrice = () => {
    return CartItems.reduce(
      (total, item) => total + item.productId.price * item.quantity,
      0
    );
  };


  return (
    <>
      <Banner />
      <div className="container my-5">
        <h2 className="text-center mb-4">Your Shopping Cart</h2>
        {Array.isArray(CartItems) && CartItems.length === 0 ? (
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
                  <tr key={item.productId._id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={item.productId.image}
                          alt={item.productId.name}
                          style={{ width: '50px', marginRight: '10px' }}
                        />
                        <span>{item.productId.name}</span>
                      </div>
                    </td>
                    <td>₹{item.productId.price}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity || 1}
                        onChange={(e) => updateCartQuantity(item._id, parseInt(e.target.value, 10))}
                        className="form-control"
                        style={{ width: '70px' }}
                      />
                    </td>
                    <td>₹{(item.productId.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(item._id)}
                      >
                        <i className="fa-solid fa-trash"></i>
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
              <button className="btn btn-danger" onClick={clearCart}><i className="fa-solid fa-trash"></i> Clear All</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default index;
