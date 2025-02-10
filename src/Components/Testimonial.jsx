import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Testimonial = () => {
  useEffect(() => {
    // Initialize Owl Carousel
    $('.testimonial-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ]
    });
  }, []);
  return (
   <>
   <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
        <p className="fs-5 fw-bold text-primary">Testimonial</p>
        <h1 className="display-5 mb-5">What Our Clients Say About Us!</h1>
        <p className="mb-4">
          "Our clients love our work! We bring creativity, dedication, and
          exceptional service to every landscaping project we complete."
        </p>
        <Link className="btn btn-primary py-3 px-4" to="">
          See More
        </Link>
      </div>
      <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
        <div className="owl-carousel testimonial-carousel">
          <div className="testimonial-item active">
            <img
              className="img-fluid rounded mb-3"
              src="./img/testimonial-1.jpg"
              alt=""
            />
            <p className="fs-5">
              "Exceptional service! The team transformed our garden into a
              beautiful, peaceful space. Highly recommend their landscaping
              expertise and professionalism."
            </p>
            <h4>Smith Bebe</h4>
            <span>Profession</span>
          </div>
          <div className="testimonial-item">
            <img
              className="img-fluid rounded mb-3"
              src="./img/testimonial-2.jpg"
              alt=""
            />
            <p className="fs-5">
              "Incredible work! Our garden looks stunning, and the maintenance
              service is top-notch. Truly a reliable and creative team."
            </p>
            <h4>Alfred Marsol</h4>
            <span>Profession</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Testimonial