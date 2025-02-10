import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown">
            {location.pathname==="/about" && "About Us"}
            {location.pathname==="/service" && "Our Services"}
            {location.pathname==="/products" && "Products"}
            {location.pathname==="/cart" && "Shopping Cart"}
            {location.pathname==="/contact" && "Contact Us"}
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
              {location.pathname==="/about" && "About"}
            {location.pathname==="/service" && "Services"}
            {location.pathname==="/products" && "Products"}
            {location.pathname==="/cart" && "Cart"}
            {location.pathname==="/contact" && "Contact"}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
