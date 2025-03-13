import React from 'react'
import { Link } from 'react-router-dom';

const index = () => {
  const portfolioItems = [
    {
      imgSrc: "img/service-1.jpg",
      title: "Landscaping",
      delay: "0.1s",
    },
    {
      imgSrc: "img/service-2.jpg",
      title: "Pruning Plants",
      delay: "0.3s",
    },
    {
      imgSrc: "img/service-3.jpg",
      title: "Irrigation & Drainage",
      delay: "0.5s",
    },
    {
      imgSrc: "img/service-4.jpg",
      title: "Garden Maintenance",
      delay: "0.1s",
    },
    {
      imgSrc: "img/service-5.jpg",
      title: "Green Technology",
      delay: "0.3s",
    },
    {
      imgSrc: "img/service-6.jpg",
      title: "Urban Gardening",
      delay: "0.5s",
    },
  ];
  return (
    <>
    <div className="container-xxl py-5">
  <div className="container">
    <div
      className="text-center mx-auto wow fadeInUp"
      data-wow-delay="0.1s"
      style={{
        maxWidth: 500,
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeInUp"
      }}
    >
      <p className="fs-5 fw-bold text-primary">Our Projects</p>
      <h1 className="display-5 mb-5">Some Of Our Wonderful Projects</h1>
    </div>
    <div
      className="row wow fadeInUp"
      data-wow-delay="0.3s"
      style={{
        visibility: "visible",
        animationDelay: "0.3s",
        animationName: "fadeInUp"
      }}
    >
      <div className="col-12 text-center">
        <ul className="list-inline rounded mb-5" id="portfolio-flters">
          <li className="mx-2 active" data-filter="*">
            All
          </li>
          <li className="mx-2" data-filter=".first">
            Complete Projects
          </li>
          <li className="mx-2" data-filter=".second">
            Ongoing Projects
          </li>
        </ul>
      </div>
    </div>
    <div className="row g-4 portfolio-container">
      {portfolioItems.map((item, index) => (
        <div
          className="col-lg-4 col-md-6 portfolio-item wow fadeInUp"
          data-wow-delay={item.delay}
          key={index}
        >
          <div className="portfolio-inner rounded">
            <img className="img-fluid" src={item.imgSrc} alt={item.title} />
            <div className="portfolio-text">
              <h4 className="text-white mb-4">{item.title}</h4>
              <div className="d-flex">
                <Link
                  className="btn btn-lg-square rounded-circle mx-2"
                  href={item.imgSrc}
                  data-lightbox="portfolio"
                >
                  <i className="fa fa-eye" />
                </Link>
                <Link className="btn btn-lg-square rounded-circle mx-2" href="#">
                  <i className="fa fa-link" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  )
}

export default index