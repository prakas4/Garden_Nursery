import React from 'react'

const Quote = () => {
  return (
    <>
    <div
  className="container-fluid quote my-5 py-5"
  data-parallax="scroll"
  data-image-src="img/carousel-2.jpg"
>
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div
          className="bg-white rounded p-4 p-sm-5 wow fadeIn"
          data-wow-delay="0.5s"
        >
          <h1 className="display-5 text-center mb-5">Get A Free Quote</h1>
          <div className="row g-3">
            <div className="col-sm-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control bg-light border-0"
                  id="gname"
                  placeholder="Gurdian Name"
                />
                <label htmlFor="gname">Your Name</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control bg-light border-0"
                  id="gmail"
                  placeholder="Gurdian Email"
                />
                <label htmlFor="gmail">Your Email</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control bg-light border-0"
                  id="cname"
                  placeholder="Child Name"
                />
                <label htmlFor="cname">Your Mobile</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control bg-light border-0"
                  id="cage"
                  placeholder="Child Age"
                />
                <label htmlFor="cage">Service Type</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control bg-light border-0"
                  placeholder="Leave a message here"
                  id="message"
                  style={{ height: 100 }}
                  defaultValue={""}
                />
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-primary py-3 px-4" type="submit">
                Submit Now
              </button>
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

export default Quote