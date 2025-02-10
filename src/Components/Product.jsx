import React, { useContext, useEffect, useState } from 'react'
import products from '../../product.json'
import { ProductContext } from './Context';

const Product = () => {
  const {CartItems,addToCart} = useContext(ProductContext)
  const [groupedItem, setGroupedItem] = useState([]);

const groupProducts = () => {
  let itemsPerRow = 4; // Default (Desktop)

  if (window.innerWidth < 576) {
    itemsPerRow = 1; // Mobile
  } else if (window.innerWidth < 768) {
    itemsPerRow = 2; // Tablet
  } else if (window.innerWidth < 992) {
    itemsPerRow = 3; // Small Laptops
  }

  const newGroupedItems = [];
  for (let i = 0; i < products.length; i += itemsPerRow) {
    newGroupedItems.push(products.slice(i, i + itemsPerRow));
  }

  setGroupedItem(newGroupedItems);
};

useEffect(() => {
  groupProducts();
  window.addEventListener("resize", groupProducts);
  return () => window.removeEventListener("resize", groupProducts);
}, [products]); 
  return (
   <>
 <div className="container my-5">
  <div
    className="text-center mx-auto wow fadeInUp"
    data-wow-delay="0.1s"
    style={{ maxWidth: 500 }}
  >
    <p className="fs-5 fw-bold text-primary">Our Offers</p>
    <h1 className="display-5 mb-5">Offers That We Provide For You</h1>
  </div>
  <h2 className="text-center mb-4">Value For Money - Up to 50% Off</h2>
  <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
    <div
      id="product-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {groupedItem.map((item3, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="d-flex justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 h-100">
              {item3.map((item) => (
                <div className="col-md-3 d-flex align-items-stretch" key={item.id}>
                <div className="card h-100">
                  <div className="position-relative">
                    <img
                      src={item.image}
                      className="card-img-top w-100"
                      alt="Product Image"
                    />
                    <span className="discount-badge">{item.discount}</span>
                  </div>
                  <div className="card-body d-flex flex-column h-100">
                    <h5 className="card-title price">
                      ₹{item.offerPrice} <span className="original-price">₹{item.originalPrice}</span>
                    </h5>
                    <p className="card-text flex-grow-1">
                      {item.name}
                    </p>
                    <p className="mb-1">
                      <i className="bi bi-star-fill text-warning" />
                      <i className="bi bi-star-fill text-warning" />
                      <i className="bi bi-star-fill text-warning" /> {item.reviewes}
                    </p>
                    <p className="text-muted">{item.offer}</p>
                    <button className="btn add-to-cart-btn w-100 mt-auto" onClick={() =>addToCart(item)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              
              ))}
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#product-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#product-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>



   </>
  )
}

export default Product