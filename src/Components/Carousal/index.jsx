import React, { useEffect } from "react";

const index = () => {

  useEffect(() => {
    const carouselElement = document.querySelector("#header-carousel");
    if (carouselElement) {
      new bootstrap.Carousel(carouselElement, {
        interval: 3000,
        wrap: true
      });
    }
  }, []);
  
  const carousels = [
    {
      image: "img/carousel-1.jpg",
      active: "active",
      heading: " Make Your Home Like Garden",
      detail:
        " Welcome to [Rithish Farm], your trusted destination for vibrant plants and expert gardening advice. From colorful flowers to fragrant herbs and majestic trees, we have everything you need to create a thriving, beautiful garden.Let’s grow together!",
    },
    {
      image: "img/carousel-2.jpg",
      active: "",
      heading: "Create Your Own Small Garden At Home",
      detail: "",
    },
    {
      image: "img/carousel3.jpg",
      active: "",
      heading: " Create Your Own Garden with Our Festival Offer",
      detail: "",
    },
  ];
  return (
    <>
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {carousels.map((item1, index) => (
              <div className={`carousel-item ${item1.active}`} key={index}>
                <img className="w-100" src={item1.image} alt="Image" />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <h1 className="display-1 text-white mb-5 animated slideInDown">
                          {item1.heading}
                        </h1>
                        <a
                          href=""
                          className="btn btn-primary py-sm-3 px-sm-4"
                        >
                          Explore More
                        </a>
                        <p className="text-white mt-3 mb-5 animated slideInDown">
                          {item1.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
