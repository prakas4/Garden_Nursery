import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../Context';

const Navbar = () => {
  const location = useLocation();
  const {CartItems = []} =useContext(ProductContext);
  
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
  <Link
    to={'/'}
    className="navbar-brand d-flex align-items-center px-4 px-lg-5"
  >
    <h1 className="m-0">Plant Nursery</h1>
  </Link>
  <button
    type="button"
    className="navbar-toggler me-4"
    data-bs-toggle="collapse"
    data-bs-target="#navbarCollapse"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0">
    <Link to="/" className={`nav-item nav-link ${location.pathname === "/" ? "active" : ""}`}>
        Home
      </Link>
      <Link to="/about" className={`nav-item nav-link ${location.pathname === "/about" ? "active" : ""}`}>
        About
      </Link>
      <Link to="/products" className={`nav-item nav-link ${location.pathname === "/products" ? "active" : ""}`}>
        Products
      </Link>
      <Link to="/service" className={`nav-item nav-link ${location.pathname === "/service" ? "active" : ""}`}>
        Services
      </Link>
      <Link to="/cart" className={`nav-item nav-link ${location.pathname === "/cart" ? "active" : ""}`}>
      <i className="fa-solid fa-cart-shopping fs-3" style={{position:"relative"}}><span className="badge bg-danger p-1" style={{position:"absolute",fontSize:"10px",borderRadius:"12px"}}>{CartItems.length}</span></i>
      </Link>
    </div>
    <Link
      to={"/contact"}
      className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block"
    >
      Contact
      <i className="fa fa-arrow-right ms-3" />
    </Link>
  </div>
</nav>

    </>
  )
}

export default Navbar