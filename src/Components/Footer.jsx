import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <>
   <>
  <div
    className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-4">Our Office</h4>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            RORIRI IT PARK, NALLANATHAPURAM, Kalakkad.
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +91 7810012668
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            business@rithishfarms.in
          </p>
          <div className="d-flex pt-2">
            <Link
              className="btn btn-square btn-outline-light rounded-circle me-2"
              to=""
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="btn btn-square btn-outline-light rounded-circle me-2"
              to="https://www.facebook.com/rithishfarms/"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="btn btn-square btn-outline-light rounded-circle me-2"
              to="https://www.instagram.com/rithishfarms/"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="btn btn-square btn-outline-light rounded-circle me-2"
              to=""
            >
              <i className="fab fa-linkedin-in" />
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-4">Services</h4>
          <Link className="btn btn-link" to="">
            Landscaping
          </Link>
          <Link className="btn btn-link" to="">
            Pruning plants
          </Link>
          <Link className="btn btn-link" to="">
            Urban Gardening
          </Link>
          <Link className="btn btn-link" to="">
            Garden Maintenance
          </Link>
          <Link className="btn btn-link" to="">
            Green Technology
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-4">Quick Links</h4>
          <Link className="btn btn-link" to="/about">
            About Us
          </Link>
          <Link className="btn btn-link" to="/contact">
            Contact Us
          </Link>
          <Link className="btn btn-link" to="/service">
            Our Services
          </Link>
          <Link className="btn btn-link" to="">
            Terms &amp; Condition
          </Link>
          <Link className="btn btn-link" to="#video">
            Support
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-white mb-4">Newsletter</h4>
          <p>
            "Stay informed, inspired, and connected—subscribe to our newsletter
            today!"
          </p>
          <div className="position-relative w-100">
            <input
              className="form-control bg-light border-light w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©{" "}
          <Link className="border-bottom" to="">
            Plant Nursery
          </Link>
          , All Right Reserved.
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a
    href="#"
    className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </a>
</>

   </>
  )
}

export default Footer