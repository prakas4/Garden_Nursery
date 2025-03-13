import React from 'react'

const index = () => {
  return (
    <>
    <>
  <div
    className="faq-header text-center mx-auto wow fadeInUp my-5"
    data-wow-delay="0.1s"
  >
    <h1 className="display-5 mb-5">Frequently Asked Questions</h1>
    <p className="fs-5 fw-bold text-primary">
      Your questions about our nursery garden, answered here!
    </p>
  </div>
  {/* FAQ Section */}
  <div className="container faq-container wow fadeInUp" data-wow-delay="0.1s">
    <div className="accordion" id="faqAccordion">
      {/* Question 1 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What types of plants do you offer?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            We offer a variety of indoor and outdoor plants, including flowering
            plants, succulents, herbs, and decorative shrubs.
          </div>
        </div>
      </div>
      {/* Question 2 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Do you provide plant delivery services?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            Yes, we deliver plants directly to your doorstep with proper
            packaging to ensure safety during transit.
          </div>
        </div>
      </div>
      {/* Question 3 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Do you offer guidance on plant care?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            Absolutely! Our experts provide care instructions, tips for
            watering, sunlight requirements, and pest control methods for your
            plants.
          </div>
        </div>
      </div>
      {/* Question 4 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Can I visit your nursery in person?
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            Yes, we welcome visitors to explore our nursery. Our address and
            visiting hours are available on the Contact Us page.
          </div>
        </div>
      </div>
      {/* Question 5 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Do you sell gardening tools and accessories?
          </button>
        </h2>
        <div
          id="collapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#faqAccordion"
        >
          <div className="accordion-body">
            Yes, we have a range of gardening tools, pots, fertilizers, and
            other accessories to meet your gardening needs.
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </>
  )
}

export default index