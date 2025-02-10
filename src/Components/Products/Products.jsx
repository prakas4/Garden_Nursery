import React, { useState, useContext } from 'react';
import productCards from '../../../originalProducts.json';
import { ProductContext } from '../Context';
import Header from '../Header';

const Products = () => {
  const { addToCart } = useContext(ProductContext);

  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories from products
  const categories = ['All', ...new Set(productCards.map(product => product.category))];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? productCards
    : productCards.filter(product => product.category === selectedCategory);

  return (
    <>
      <Header />

      <div className="container my-5">
        {/* Responsive Category Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Display */}
        <div className="row g-3 justify-content-center">
          {filteredProducts.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-6 p-2" key={item.id}>
              <div className="card p-3">
                <div className="position-relative">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title price">₹{item.originalPrice}</h5>
                  <p className="card-text">{item.name}</p>
                  <p className="mb-1">
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" />
                    <i className="bi bi-star-fill text-warning" /> {item.reviews}
                  </p>
                  <p className="text-muted">{item.offer}</p>
                  <button
                    className="btn add-to-cart-btn w-100"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no products match the selected category */}
        {filteredProducts.length === 0 && (
          <div className="text-center mt-4">
            <h5 className="text-muted">No products found in this category.</h5>
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
