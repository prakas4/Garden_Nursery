import React from 'react'

const FeatureChoose = () => {
  return (
    <>
    <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5 align-items-center">
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <p className="fs-5 fw-bold text-primary">Why Choosing Us!</p>
        <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
        <p className="mb-4">
          At [Roriri Nursery Plant], we prioritize quality, reliability, and
          customer satisfaction. Our dedicated team works tirelessly to ensure
          that each product and service exceeds your expectations. With
          competitive pricing, fast delivery, and a commitment to excellence,
          it's no wonder why so many people choose us for their needs. Join the
          thousands of satisfied customers who trust us to provide the best.
        </p>
        <a className="btn btn-primary py-3 px-4" href="">
          Explore More
        </a>
      </div>
      <div className="col-lg-6">
        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <div className="row g-4">
              <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                <div
                  className="text-center rounded py-5 px-4"
                  style={{ boxShadow: "0 0 45px rgba(0,0,0,.08)" }}
                >
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: 90, height: 90 }}
                  >
                    <i className="fa fa-check fa-3x text-primary" />
                  </div>
                  <h4 className="mb-0">100% Satisfaction</h4>
                </div>
              </div>
              <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                <div
                  className="text-center rounded py-5 px-4"
                  style={{ boxShadow: "0 0 45px rgba(0,0,0,.08)" }}
                >
                  <div
                    className="btn-square bg-light rounded-circle mx-auto mb-4"
                    style={{ width: 90, height: 90 }}
                  >
                    <i className="fa fa-users fa-3x text-primary" />
                  </div>
                  <h4 className="mb-0">Dedicated Team</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
            <div
              className="text-center rounded py-5 px-4"
              style={{ boxShadow: "0 0 45px rgba(0,0,0,.08)" }}
            >
              <div
                className="btn-square bg-light rounded-circle mx-auto mb-4"
                style={{ width: 90, height: 90 }}
              >
                <i className="fa fa-tools fa-3x text-primary" />
              </div>
              <h4 className="mb-0">Modern Equipment</h4>
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

export default FeatureChoose