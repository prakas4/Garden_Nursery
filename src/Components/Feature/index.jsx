import React from "react";

const index = () => {
  const feature = [
    {
      icon: "fa fa-times",
      name: "No Hidden Cost",
      para: "Transparent pricing with no hidden costs—what you see is what you pay",
    },
    {
      icon: "fa fa-users",
      name: "Dedicated Team",
      para: "Our team is here to provide expert guidance and exceptional service every step of the way!",
    },
    {
      icon: "fa fa-phone",
      name: "24/7 Available",
      para: "We’re available 24/7 to assist you with all your gardening needs, anytime, anywhere!",
    },
  ];
  return (
    <>
      <div className="container-fluid top-feature py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            {feature.map((item,index) =>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s" key={index}>
            <div
              className="bg-white shadow d-flex align-items-center h-100 px-5"
              style={{ minHeight: 160 }}
            >
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                  <i className= {`${item.icon} text-primary`} />
                </div>
                <div className="ps-3">
                  <h4>{item.name}</h4>
                  <span>
                    {item.para}
                  </span>
                </div>
              </div>
            </div>
          </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
