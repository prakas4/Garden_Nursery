import React from "react";

const Facts = () => {
  
  const facts = [
    {
      count: "500",
      fact: "Happy Clients",
    },
    {
      count: "1000",
      fact: "Garden Completed",
    },
    {
      count: "100",
      fact: "Dedicated Staff",
    },
    {
      count: "50",
      fact: "Awards Achieved",
    },
  ];
  return (
    <>
      <div
        className="container-fluid facts my-5 py-5"
        data-parallax="scroll"
        data-image-src="img/carousel-1.jpg"
      >
        <div className="container py-5">
          <div className="row g-5">
            {facts.map((item2, index) => (
              <div
                className="col-sm-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.1s"
                key={index}
              >
                <h1 className="display-4 text-white" data-toggle="counter-up">
                  {item2.count}
                </h1>
                <span className="fs-5 fw-semi-bold text-light">
                  {item2.fact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Facts;
