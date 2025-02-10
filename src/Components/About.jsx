import React, { useContext } from 'react'
import Header from './Header'
import { ProductContext } from './Context'

const About = () => {
  const {showHeader} = useContext(ProductContext)
  return (
    <>
    {showHeader && <Header />}
    <div className="container-xxl py-5">
  <div className="container">
    <div
      className="text-center mx-auto wow fadeInUp"
      data-wow-delay="0.1s"
      style={{ maxWidth: 500 }}
    >
      <p className="fs-5 fw-bold text-primary">About Us</p>
      <h1 className="display-5 mb-5">About Our Company</h1>
    </div>
    <div className="row g-5 align-items-end">
      <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
        <img
          className="img-fluid rounded"
          data-wow-delay="0.1s"
          src="img/about.jpg"
        />
      </div>
      <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
        <h1 className="display-1 text-primary mb-0">25</h1>
        <p className="text-primary mb-4">Year of Experience</p>
        <h1 className="display-5 mb-4">We Make Your Home Like A Garden</h1>
        <p className="mb-4">
          "Transforming Your Space, One Bloom at a Time – Let's Bring Nature
          Home!" 🌿
        </p>
        <a className="btn btn-primary py-3 px-4" href="">
          Explore More
        </a>
      </div>
      <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
        <div className="row g-5">
          <div className="col-12 col-sm-6 col-lg-12">
            <div className="border-start ps-4">
              <i className="fa fa-award fa-3x text-primary mb-3" />
              <h4 className="mb-3">Award Winning</h4>
              <span>
                "Excellence Rooted in Nature – Where Every Bloom Wins Hearts!"
                🌟
              </span>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-12">
            <div className="border-start ps-4">
              <i className="fa fa-users fa-3x text-primary mb-3" />
              <h4 className="mb-3">Dedicated Team</h4>
              <span>
                "Passion in Every Petal – Powered by a Team That Cares!" 🌱✨
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default About