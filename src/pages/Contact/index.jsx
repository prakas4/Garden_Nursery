import React, { useContext } from 'react'
import { ProductContext } from '@context/Context'
import { Banner } from '@components/index.js'

const index = () => {
  const {showHeader}  = useContext(ProductContext)
  return (
   <>
   {showHeader && <Banner />}
   <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
        <p className="fs-5 fw-bold text-primary">Contact Us</p>
        <h1 className="display-5 mb-5">
          If You Have Any Query, Please Contact Us
        </h1>
        <p className="mb-4">
          The contact form is currently inactive. Get a functional and working
          contact form with Ajax &amp; PHP in a few minutes. Just copy and paste
          the files, add a little code and you're done.
        </p>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
                <label htmlFor="name">Your Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
                <label htmlFor="email">Your Email</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                />
                <label htmlFor="subject">Subject</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a message here"
                  id="message"
                  style={{ height: 100 }}
                  defaultValue={""}
                />
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary py-3 px-4" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      <div
        className="col-lg-6 wow fadeIn"
        data-wow-delay="0.5s"
        style={{ minHeight: 450 }}
      >
        <div className="position-relative rounded overflow-hidden h-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.248849161214!2d77.57604917024628!3d8.525242677949306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04692c8b82209f%3A0xa00060055fec4e1!2sRORIRI%20SOFTWARE%20SOLUTIONS%20PVT.LTD.!5e1!3m2!1sen!2sin!4v1732614955188!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default index