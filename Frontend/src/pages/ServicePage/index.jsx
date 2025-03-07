import React, { useContext } from 'react'
import { Banner } from '@components/index.js'
import { ProductContext } from "@context/Context"

const index = () => {
  const {showHeader} = useContext(ProductContext)
  return (
    <>
    {showHeader && <Banner />}
    <div className="container-xxl py-5">
  <div className="container">
    <div
      className="text-center mx-auto wow fadeInUp"
      data-wow-delay="0.1s"
      style={{ maxWidth: 500 }}
    >
      <p className="fs-5 fw-bold text-primary">Our Services</p>
      <h1 className="display-5 mb-5">Services That We Offer For You</h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item rounded d-flex h-100">
          <div className="service-img rounded">
            <img className="img-fluid" src="img/service-1.jpg" alt="" />
          </div>
          <div className="service-text rounded p-5">
            <div className="btn-square rounded-circle mx-auto mb-3">
              <img className="img-fluid" src="img/icon/icon-3.png" alt="Icon" />
            </div>
            <h4 className="mb-3">Landscaping</h4>
            <p className="mb-4">
              "Creating beautiful landscapes that enhance your outdoor space
              with design, care, and nature's touch."
            </p>
            <a className="btn btn-sm" href="">
              <i className="fa fa-plus text-primary me-2" />
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="service-item rounded d-flex h-100">
          <div className="service-img rounded">
            <img className="img-fluid" src="img/service-2.jpg" alt="" />
          </div>
          <div className="service-text rounded p-5">
            <div className="btn-square rounded-circle mx-auto mb-3">
              <img className="img-fluid" src="img/icon/icon-6.png" alt="Icon" />
            </div>
            <h4 className="mb-3">Pruning plants</h4>
            <p className="mb-4">
              "Pruning plants to promote healthy growth, beauty, and vitality
              for a flourishing garden."
            </p>
            <a className="btn btn-sm" href="">
              <i className="fa fa-plus text-primary me-2" />
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item rounded d-flex h-100">
          <div className="service-img rounded">
            <img className="img-fluid" src="img/service-3.jpg" alt="" />
          </div>
          <div className="service-text rounded p-5">
            <div className="btn-square rounded-circle mx-auto mb-3">
              <img className="img-fluid" src="img/icon/icon-5.png" alt="Icon" />
            </div>
            <h4 className="mb-3">Irrigation &amp; Drainage</h4>
            <p className="mb-4">
              "Efficient irrigation and drainage solutions to keep your
              landscape thriving and water-flow control."
            </p>
            <a className="btn btn-sm" href="">
              <i className="fa fa-plus text-primary me-2" />
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item rounded d-flex h-100">
          <div className="service-img rounded">
            <img className="img-fluid" src="img/service-4.jpg" alt="" />
          </div>
          <div className="service-text rounded p-5">
            <div className="btn-square rounded-circle mx-auto mb-3">
              <img className="img-fluid" src="img/icon/icon-4.png" alt="Icon" />
            </div>
            <h4 className="mb-3">Garden Maintenance </h4>
            <p className="mb-4">
              "Regular garden maintenance ensures your outdoor space remains
              beautiful, healthy year-round."
            </p>
            <a className="btn btn-sm" href="">
              <i className="fa fa-plus text-primary me-2" />
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="service-item rounded d-flex h-100">
          <div className="service-img rounded">
            <img className="img-fluid" src="img/service-5.jpg" alt="" />
          </div>
          <div className="service-text rounded p-5">
            <div className="btn-square rounded-circle mx-auto mb-3">
              <img
                className="img-fluid"
                src="img/icon/icon-10.png"
                alt="Icon"
              />
            </div>
            <h4 className="mb-3">Delivery Services</h4>
            <p className="mb-4">
              "Delivering trust, speed, and reliability every single time to our
              Home."
            </p>
            <a className="btn btn-sm" href="">
              <i className="fa fa-plus text-primary me-2" />
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="service-item rounded d-flex h-100">
          <div className="service-img rounded">
            <img className="img-fluid" src="img/service-6.jpg" alt="" />
          </div>
          <div className="service-text rounded p-5">
            <div className="btn-square rounded-circle mx-auto mb-3">
              <img className="img-fluid" src="img/icon/icon-2.png" alt="Icon" />
            </div>
            <h4 className="mb-3">Urban Gardening</h4>
            <p className="mb-4">
              "Urban gardening transforms spaces, bringing nature and
              sustainability to city life."
            </p>
            <a className="btn btn-sm" href="">
              <i className="fa fa-plus text-primary me-2" />
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default index